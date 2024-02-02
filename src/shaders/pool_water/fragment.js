export default /* glsl */ `
uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float opacity;

 
varying float vElevation;

void main(){
  //7-1 mix colors according to the elevation
  float mixStrengh = (vElevation + uColorOffset)*uColorMultiplier;
  vec3 color = mix(uDepthColor,uSurfaceColor,mixStrengh);
  gl_FragColor = vec4(color,opacity);
}
`;
