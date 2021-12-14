precision highp float;

uniform vec2 uResolution;

uniform sampler2D objects;
uniform sampler2D objectPositions;
uniform sampler2D objectMaterials;
uniform sampler2D objectMaterialsExtended;

uniform sampler2D lights;
uniform sampler2D lightMaterials;

uniform int numObjects;
uniform int lightObjects;

// 光线与球面相交
void iSphere(in float ID, in vec3 origin, in vec3 direction, in vec4 sphere, inout float closestIntersection, inout float closestID) {
    // p(x) = o + t*d; 光线
    // (p-c)(p-c) = r^2 球
    // (d^2) * t^2 + (2d(o-c)) * t + (o-c)^2 - r^2 = 0 光线跟球的交点
    // ax^2 + bx + c =0
    float a = dot(direction, direction);
    float b = 2.0 * dot(direction, origin - sphere.xyz);
    float c = dot(origin - sphere.xyz, origin - sphere.xyz) - sphere.w * sphere.w;

}

vec3 trace(vec3 p0, vec3 direction) {
    vec3 color = vec3(1.0, 0.0, 0.0);
    float t = 1000.0;
    float id = -1.0;

    return color;
}

// 求光线与场景中物体的最近交点
void intersect(in vec3 origin, in vec3 direction, inout float closestIntersection, inout float closestID) {

}

void main() {
    vec3 origin = vec3(0.0, 0.0, 5.0);
    vec3 direction = vec3(normalize(gl_FragCoord.xy / uResolution - 0.5), -1.0);
    vec3 rayTraceColor = trace(origin, direction);
    gl_FragColor = vec4(rayTraceColor, 1.0);
}