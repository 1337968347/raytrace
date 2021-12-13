precision highp float;

uniform vec2 uResolution;

uniform sampler2D objects;
uniform sampler2D objectPositions;
uniform sampler2D objectMaterials;
uniform sampler2D objectMaterialsExtended;

uniform sampler2D lights;
uniform sampler2D lightMaterials;



vec3 trace(vec3 p0, vec3 direction) {
    vec3 color = vec3(1.0, 0.0, 0.0);
    float t = 1000.0;
    float id = -1.0;

    return color;
}

// 求光线与场景中物体的最近交点
void intersect(in vec3 origin, in vec3 direction, inout float closestIntersection, inout vec2 closestID) {

}

void main() {
    vec3 origin = vec3(0.0, 0.0, 5.0);
    vec3 direction = vec3(normalize(gl_FragCoord.xy / uResolution - 0.5), -1.0);
    vec3 rayTraceColor = trace(origin, direction);
    gl_FragColor = vec4(rayTraceColor, 1.0);
}