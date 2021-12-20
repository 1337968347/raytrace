precision highp float;

#define MAX_OBJECTS 10
#define MAX_LIGHT 10
#define SPHERE 0
#define PLANE 1
#define MAX_RECURSION 5

uniform vec2 uResolution;

uniform sampler2D objects;  //[index, type, null, null]
uniform sampler2D objectPositions; // [x, y, z, width]
uniform sampler2D objectMaterials; // [r, g, b, diffues]
uniform sampler2D objectMaterialsExtended; // [specular, shininess, relefction , null]

uniform sampler2D lights; // [x, y , z, null]
uniform sampler2D lightMaterials;

uniform int numObjects;
uniform int numLight;
uniform float objectTextureSize;
uniform float lightTextureSize;

// 光线与球面相交
void iSphere(in vec2 ID, in vec3 origin, in vec3 direction, in vec4 sphere, inout float closestIntersection, inout vec2 closestID) {
    // p(x) = o + t*d; 光线
    // (p-c)(p-c) = r^2 球
    // (d^2) * t^2 + (2d(o-c)) * t + (o-c)^2 - r^2 = 0 光线跟球的交点 ---------------------
    // ax^2 + bx + c =0
    // d 是单位向量  a = d *d = 1
    float b = 2.0 * dot(origin - sphere.xyz, direction);
    float c = dot(origin - sphere.xyz, origin - sphere.xyz) - sphere.w * sphere.w;

    // 判别式
    float disc = b * b - 4.0 * c;
    if(disc <= 0.0)
        return;
    // p(x) = o + t*d; 光线的t
    float t = -(b + sqrt(disc)) / 2.0;

    if(t > 0.0 && t < closestIntersection) {
        closestIntersection = t;
        closestID = ID;
    }
}

// 光线跟平面相交
void iPlane(in vec2 ID, in vec3 origin, in vec3 direction, in vec3 normal, inout float closestIntersection, inout vec2 closestID) {
    // (p - p0) * n = 0 平面
    // p = o + td 光线
    // (o + td - p0) * n = 0  --> tdn = (p0 - o) n --> t = (p0 - 0)n / dn

    float t = (dot(vec3(0.0, 0.0, 0.0), normal) - dot(origin, normal)) / dot(direction, normal);

    if(t > 0.0 && t < closestIntersection) {
        closestIntersection = t;
        closestID = ID;
    }
}

// 求光线与场景中物体的最近交点
void intersect(in vec3 origin, in vec3 direction, inout float closestIntersection, inout vec2 closestID) {
    float it = 1.0 / objectTextureSize / 2.0;
    float ity = 1.0 / objectTextureSize / 2.0;

    float step = 1.0 / objectTextureSize;

    for(int i = 0; i < MAX_OBJECTS; i++) {
        if(i >= numObjects) {
            break;
        }

        int objectType = int(texture2D(objects, vec2(it, ity)).x * 256.0);

        if(objectType == SPHERE) {
            iSphere(vec2(it, ity), origin, direction, texture2D(objectPositions, vec2(it, ity)), closestIntersection, closestID);
        } else if(objectType == PLANE) {
            iPlane(vec2(it, ity), origin, direction, texture2D(objectPositions, vec2(it, ity)).xyz, closestIntersection, closestID);
        }

        it += step;

        if(it > 1.0) {
            ity += step;
            it = step / 2.0;
        }
    }

}

// 球面的法向量
vec3 nSphere(in vec3 position, in vec3 sphere) {
    return normalize(position - sphere);
}

// 平面的法向量
vec3 nPhone(in vec3 plane) {
    return plane;
}

// 获取法向量
vec3 normal(in vec3 position, in vec2 ID) {
    if(int(texture2D(objects, ID).x * 256.0) == SPHERE) {
        return nSphere(position, texture2D(objectPositions, ID).xyz);
    } else if(int(texture2D(objects, ID).x * 256.0) == PLANE) {
        return nPhone(texture2D(objectPositions, ID).xyz);
    }
    return vec3(0.0);
}

// 计算像素的颜色
vec3 computeLighting(in vec3 origin, in vec3 direction, in float t, in vec2 ID) {
    vec3 intersection = origin + t * direction;
    vec3 norm = normal(intersection, ID);

    vec3 color = 0.05 * texture2D(objectMaterials, ID).xyz;

    float it = 1.0 / lightTextureSize / 2.0;
    float ity = 1.0 / lightTextureSize / 2.0;

    float step = 1.0 / lightTextureSize;

    for(int i = 0; i < MAX_LIGHT; i++) {
        if(i > numLight) {
            break;
        }

        vec3 lightdir = normalize(texture2D(lights, vec2(it, ity)).xyz - intersection);
        float shadowT = 1000.0;
        vec2 shadowID = vec2(-1.0);

        // intersection = o + td; 因为t的浮点数精度问题。
        // 可能交点会被物体遮盖； 解决方法就是交点往光源的方向靠近。让交点离开相交的物体
        intersect(intersection + lightdir * 0.00001, lightdir, shadowT, shadowID);
        // 试探光线
        if(shadowID.x < 0.0 || shadowT < 0.01) {
            float dp = dot(norm, lightdir);
            vec3 lightColor = texture2D(lightMaterials, vec2(it, ity)).xyz;
            vec3 objectColor = texture2D(objectMaterials, ID).xyz;
            float diffuseK = texture2D(objectMaterials, ID).w;

            if(dp > 0.0)
                color += diffuseK * dp * objectColor * lightColor;

            // 镜面反射
            // 反射光线 r = 2(l * n)n - l 
            vec3 R = -(2.0 * dot(lightdir, norm) * norm - lightdir);
            dp = dot(R, direction);
            float k = texture2D(objectMaterialsExtended, ID).x;
            float shininess = texture2D(objectMaterialsExtended, ID).y;

            if(dp > 0.0)
                color += k * pow(dp, shininess) * lightColor;

        }

        it += step;
        if(it > 1.0) {
            ity += step;
            it = step / 2.0;
        }
    }

    return color;
}

// 反射
vec4 reflection(in vec3 origin, in vec3 direction, in float t, in vec2 ID) {
    vec4 color[MAX_RECURSION];
    float reflCoefficient[MAX_RECURSION];
    vec4 matColor[MAX_RECURSION];

    int recursion = 0;

    for(int i = 0; i < MAX_RECURSION; i++) {
        recursion = i;

        vec3 intersection = origin + t * direction;
        vec3 norm = normal(intersection, ID);
        // 反射方向
        direction = direction - 2.0 * dot(direction, norm) * norm;
        // 浮点数问题
        origin = intersection + direction * 0.00001;

        vec2 reflID = vec2(-1.0, -1.0);
        float reflT = 1000.0;

		//intersect the reflected ray with the scene
        intersect(origin, direction, reflT, reflID);
        // 相交
        if(reflID.x >= 0.0) {
            color[i] = vec4(computeLighting(origin, direction, reflT, reflID), 1.0);
            reflCoefficient[i] = texture2D(objectMaterialsExtended, ID).z;
            matColor[i] = texture2D(objectMaterials, ID);
        } else {
            color[i] = vec4(0.3, 0.6, 1.0, 1.0);
            reflCoefficient[i] = texture2D(objectMaterialsExtended, ID).z;
            matColor[i] = texture2D(objectMaterials, ID);
            break;
        }

        if(reflCoefficient[i] < 0.000001)
            break;

        ID = reflID;
        t = reflT;

    }

    vec4 sum = vec4(0.0, 0.0, 0.0, 1.0);

    vec4 prod = vec4(1.0, 1.0, 1.0, 1.0);
    for(int i = 0; i < MAX_RECURSION; i++) {
        if(i > recursion)
            break;

        prod *= reflCoefficient[i] * matColor[i];

        sum += color[i] * prod;
    }

    return sum;
}

void main() {
    gl_FragColor = vec4(0.0);

    vec3 origin = vec3(0.4, 1.5, 12.0);
    vec3 direction = normalize(vec3(gl_FragCoord.xy / uResolution - 0.5, -1.0));

    float t = 1000.0;
    vec2 ID = vec2(-1.0);
    intersect(origin, direction, t, ID);

    // 相交
    if(ID.x > -1.0) {
        vec4 lightColor = vec4(computeLighting(origin, direction, t, ID), 1.0);
        gl_FragColor += lightColor;
        gl_FragColor += reflection(origin, direction, t, ID);
    } else {
        gl_FragColor += vec4(0.3, 0.6, 1.0, 1.0);
    }
}