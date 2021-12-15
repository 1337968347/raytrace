precision highp float;

#define MAX_OBJECTS 10
#define MAX_LIGHT 10
#define SPHERE 0
#define PLANE 1

uniform vec2 uResolution;

uniform sampler2D objects;  //[index, type, null, null]
uniform sampler2D objectPositions; // [x, y, z, width]
uniform sampler2D objectMaterials; // [r, g, b, diffues]
uniform sampler2D objectMaterialsExtended; // [specular, relefction, null , null]

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
    // (d^2) * t^2 + (2d(o-c)) * t + (o-c)^2 - r^2 = 0 光线跟球的交点
    // ax^2 + bx + c =0
    float a = dot(direction, direction);
    float b = 2.0 * dot(direction, origin - sphere.xyz);
    float c = dot(origin - sphere.xyz, origin - sphere.xyz) - sphere.w * sphere.w;

    // 判别式
    float disc = b * b - 4.0 * a * c;
    if(disc < 0.0)
        return;
    // p(x) = o + t*d; 光线的t
    float t = -(b - sqrt(disc)) / 2.0;

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
    float t = (0.0 - dot(origin, normal)) / dot(direction, normal);

    if(t > 0.0 && t < closestIntersection) {
        closestIntersection = t;
        closestID = ID;
    }
}

// 求光线与场景中物体的最近交点
void intersect(in vec3 origin, in vec3 direction, inout float closestIntersection, inout vec2 closestID) {
 	float it = 1.0/objectTextureSize/2.0;
    float ity = 1.0/objectTextureSize/2.0;
    
    float step = 1.0/objectTextureSize;

    for(int i = 0; i < MAX_OBJECTS; i++) {
        if(i >= numObjects) {
            break;
        }

        int objectType = int(texture2D(objects, vec2(it,ity)).x * 256.0);

        if(objectType == SPHERE) {
            iSphere(vec2(it,ity), origin, direction, texture2D(objectPositions, vec2(it,ity)), closestIntersection, closestID);
        } else if(objectType == PLANE) {
            iPlane(vec2(it,ity), origin, direction, texture2D(objectPositions, vec2(it,ity)).xyz, closestIntersection, closestID);
        }

        it+=step;
				
        if(it > 1.0)
        {
            ity += step;
            it = step/2.0;
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

    vec3 color = 0.2 * texture2D(objectMaterials, ID).xyz;

    float it = 1.0/lightTextureSize/2.0;
    float ity = 1.0/lightTextureSize/2.0;

    float step = 1.0/lightTextureSize;

    for(int i = 0; i < MAX_LIGHT; i++) {
        if(i > numLight) {
            break;
        }

        // 试探光线
        vec3 lightdir = normalize(texture2D(lights, vec2(it,ity)).xyz - intersection);

        float shadowT = 1000.0;
        vec2 shadowID = vec2(-1.0);

        intersect(intersection, lightdir, shadowT, shadowID);

        if(shadowID.x < 0.0) {
            color += texture2D(lightMaterials, ID).xyz;
        }

        it += step;
    }

    return color;
}

void main() {
    gl_FragColor = vec4(0.0);

    vec3 origin = vec3(0.0, 0.0, 100.0);
    vec3 direction = vec3(normalize(gl_FragCoord.xy / uResolution - 0.5), -1.0);

    float t = 1000.0;
    vec2 ID = vec2(-1.0);
    intersect(origin, direction, t, ID);

    // 相交
    if(t < 1000.0) {
        vec4 lightColor = vec4(computeLighting(origin, direction, t, ID), 1.0);
        gl_FragColor += lightColor;
    }
}