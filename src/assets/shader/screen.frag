precision highp float;

varying vec2 screenPosition;
uniform sampler2D texture;

void main() {

  vec3 color = texture2D(texture, screenPosition).xyz;

  gl_FragColor = vec4(color + vec3(0.2), 1.0);

}