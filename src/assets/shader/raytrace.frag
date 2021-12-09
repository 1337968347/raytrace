precision highp float;

uniform vec2 uResolution;

vec3 trace(vec3 p0, vec3 direction) {
    vec3 color = vec3(1.0, 0.0, 0.0);

    return color;
}

void main() {
    vec3 origin = vec3(0.0, 0.0, 5.0);
    vec3 direction = vec3(normalize(gl_FragCoord.xy / uResolution - 0.5), -1.0);
    vec3 rayTraceColor = trace(origin, direction);
    gl_FragColor = vec4(rayTraceColor, 1.0);
}