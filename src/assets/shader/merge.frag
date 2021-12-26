precision highp float;

varying vec2 screenPosition;
uniform sampler2D texture;
uniform sampler2D oneTimeTexture;
uniform int dStep;

void main() {
  vec3 oneTimeColor = texture2D(oneTimeTexture, screenPosition).xyz;
  vec3 prevColor = texture2D(texture, screenPosition).xyz;
  vec3 finalColor = (oneTimeColor / float(dStep + 2)) + (prevColor * float(dStep) / float(dStep + 1));
  gl_FragColor = vec4(finalColor, 1.0);
}