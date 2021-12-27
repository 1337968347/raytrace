import{r as t,h as i,a as s,H as n,c as o,d as e,f as r}from"./p-3b0580b4.js";import{g as h,c as a,a as c}from"./p-909cc088.js";import{c as l,h as u}from"./p-7840618d.js";const d=()=>new Float32Array([-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,-1,0,1,1,0]),p=function(t){var i=new Float32Array(3);return t&&(i[0]=t[0],i[1]=t[1],i[2]=t[2]),i},f=function(t){var i=new Float32Array(9);return t&&(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8]),i},v={create:function(t){var i=new Float32Array(16);return t&&(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i},set:function(t,i){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i},identity:function(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},transpose:function(t,i){if(!i||t==i){var s=t[1],n=t[2],o=t[3],e=t[6],r=t[7],h=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=s,t[6]=t[9],t[7]=t[13],t[8]=n,t[9]=e,t[11]=t[14],t[12]=o,t[13]=r,t[14]=h,t}return i[0]=t[0],i[1]=t[4],i[2]=t[8],i[3]=t[12],i[4]=t[1],i[5]=t[5],i[6]=t[9],i[7]=t[13],i[8]=t[2],i[9]=t[6],i[10]=t[10],i[11]=t[14],i[12]=t[3],i[13]=t[7],i[14]=t[11],i[15]=t[15],i},determinant:function(t){var i=t[0],s=t[1],n=t[2],o=t[3],e=t[4],r=t[5],h=t[6],a=t[7],c=t[8],l=t[9],u=t[10],d=t[11],p=t[12],f=t[13],v=t[14],g=t[15];return p*l*h*o-c*f*h*o-p*r*u*o+e*f*u*o+c*r*v*o-e*l*v*o-p*l*n*a+c*f*n*a+p*s*u*a-i*f*u*a-c*s*v*a+i*l*v*a+p*r*n*d-e*f*n*d-p*s*h*d+i*f*h*d+e*s*v*d-i*r*v*d-c*r*n*g+e*l*n*g+c*s*h*g-i*l*h*g-e*s*u*g+i*r*u*g},inverse:function(t,i){i||(i=t);var s=t[0],n=t[1],o=t[2],e=t[3],r=t[4],h=t[5],a=t[6],c=t[7],l=t[8],u=t[9],d=t[10],p=t[11],f=t[12],v=t[13],g=t[14],w=t[15],m=s*h-n*r,b=s*a-o*r,x=s*c-e*r,y=n*a-o*h,A=n*c-e*h,M=o*c-e*a,k=l*v-u*f,S=l*g-d*f,T=l*w-p*f,j=u*g-d*v,E=u*w-p*v,G=d*w-p*g,I=1/(m*G-b*E+x*j+y*T-A*S+M*k);return i[0]=(h*G-a*E+c*j)*I,i[1]=(-n*G+o*E-e*j)*I,i[2]=(v*M-g*A+w*y)*I,i[3]=(-u*M+d*A-p*y)*I,i[4]=(-r*G+a*T-c*S)*I,i[5]=(s*G-o*T+e*S)*I,i[6]=(-f*M+g*x-w*b)*I,i[7]=(l*M-d*x+p*b)*I,i[8]=(r*E-h*T+c*k)*I,i[9]=(-s*E+n*T-e*k)*I,i[10]=(f*A-v*x+w*m)*I,i[11]=(-l*A+u*x-p*m)*I,i[12]=(-r*j+h*S-a*k)*I,i[13]=(s*j-n*S+o*k)*I,i[14]=(-f*y+v*b-g*m)*I,i[15]=(l*y-u*b+d*m)*I,i},toRotationMat:function(t,i){return i||(i=v.create()),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=0,i[13]=0,i[14]=0,i[15]=1,i},toMat3:function(t,i){return i||(i=f()),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[4],i[4]=t[5],i[5]=t[6],i[6]=t[8],i[7]=t[9],i[8]=t[10],i},toInverseMat3:function(t,i){var s=t[0],n=t[1],o=t[2],e=t[4],r=t[5],h=t[6],a=t[8],c=t[9],l=t[10],u=l*r-h*c,d=-l*e+h*a,p=c*e-r*a,v=s*u+n*d+o*p;if(!v)return null;var g=1/v;return i||(i=f()),i[0]=u*g,i[1]=(-l*n+o*c)*g,i[2]=(h*n-o*r)*g,i[3]=d*g,i[4]=(l*s-o*a)*g,i[5]=(-h*s+o*e)*g,i[6]=p*g,i[7]=(-c*s+n*a)*g,i[8]=(r*s-n*e)*g,i},multiply:function(t,i,s){s||(s=t);var n=t[0],o=t[1],e=t[2],r=t[3],h=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],p=t[10],f=t[11],v=t[12],g=t[13],w=t[14],m=t[15],b=i[0],x=i[1],y=i[2],A=i[3],M=i[4],k=i[5],S=i[6],T=i[7],j=i[8],E=i[9],G=i[10],I=i[11],D=i[12],R=i[13],L=i[14],Y=i[15];return s[0]=b*n+x*h+y*u+A*v,s[1]=b*o+x*a+y*d+A*g,s[2]=b*e+x*c+y*p+A*w,s[3]=b*r+x*l+y*f+A*m,s[4]=M*n+k*h+S*u+T*v,s[5]=M*o+k*a+S*d+T*g,s[6]=M*e+k*c+S*p+T*w,s[7]=M*r+k*l+S*f+T*m,s[8]=j*n+E*h+G*u+I*v,s[9]=j*o+E*a+G*d+I*g,s[10]=j*e+E*c+G*p+I*w,s[11]=j*r+E*l+G*f+I*m,s[12]=D*n+R*h+L*u+Y*v,s[13]=D*o+R*a+L*d+Y*g,s[14]=D*e+R*c+L*p+Y*w,s[15]=D*r+R*l+L*f+Y*m,s},multiplyVec3:function(t,i,s){s||(s=i);var n=i[0],o=i[1],e=i[2];return s[0]=t[0]*n+t[4]*o+t[8]*e+t[12],s[1]=t[1]*n+t[5]*o+t[9]*e+t[13],s[2]=t[2]*n+t[6]*o+t[10]*e+t[14],s},multiplyVec4:function(t,i,s){s||(s=i);var n=i[0],o=i[1],e=i[2],r=i[3];return s[0]=t[0]*n+t[4]*o+t[8]*e+t[12]*r,s[1]=t[1]*n+t[5]*o+t[9]*e+t[13]*r,s[2]=t[2]*n+t[6]*o+t[10]*e+t[14]*r,s[3]=t[3]*n+t[7]*o+t[11]*e+t[15]*r,s},translate:function(t,i,s){var n=i[0],o=i[1],e=i[2];if(!s||t==s)return t[12]=t[0]*n+t[4]*o+t[8]*e+t[12],t[13]=t[1]*n+t[5]*o+t[9]*e+t[13],t[14]=t[2]*n+t[6]*o+t[10]*e+t[14],t[15]=t[3]*n+t[7]*o+t[11]*e+t[15],t;var r=t[0],h=t[1],a=t[2],c=t[3],l=t[4],u=t[5],d=t[6],p=t[7],f=t[8],v=t[9],g=t[10],w=t[11];return s[0]=r,s[1]=h,s[2]=a,s[3]=c,s[4]=l,s[5]=u,s[6]=d,s[7]=p,s[8]=f,s[9]=v,s[10]=g,s[11]=w,s[12]=r*n+l*o+f*e+t[12],s[13]=h*n+u*o+v*e+t[13],s[14]=a*n+d*o+g*e+t[14],s[15]=c*n+p*o+w*e+t[15],s},scale:function(t,i,s){var n=i[0],o=i[1],e=i[2];return s&&t!=s?(s[0]=t[0]*n,s[1]=t[1]*n,s[2]=t[2]*n,s[3]=t[3]*n,s[4]=t[4]*o,s[5]=t[5]*o,s[6]=t[6]*o,s[7]=t[7]*o,s[8]=t[8]*e,s[9]=t[9]*e,s[10]=t[10]*e,s[11]=t[11]*e,s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15],s):(t[0]*=n,t[1]*=n,t[2]*=n,t[3]*=n,t[4]*=o,t[5]*=o,t[6]*=o,t[7]*=o,t[8]*=e,t[9]*=e,t[10]*=e,t[11]*=e,t)},rotate:function(t,i,s,n){var o=s[0],e=s[1],r=s[2],h=Math.sqrt(o*o+e*e+r*r);if(!h)return null;1!=h&&(o*=h=1/h,e*=h,r*=h);var a=Math.sin(i),c=Math.cos(i),l=1-c,u=t[0],d=t[1],p=t[2],f=t[3],v=t[4],g=t[5],w=t[6],m=t[7],b=t[8],x=t[9],y=t[10],A=t[11],M=o*o*l+c,k=e*o*l+r*a,S=r*o*l-e*a,T=o*e*l-r*a,j=e*e*l+c,E=r*e*l+o*a,G=o*r*l+e*a,I=e*r*l-o*a,D=r*r*l+c;return n?t!=n&&(n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[0]=u*M+v*k+b*S,n[1]=d*M+g*k+x*S,n[2]=p*M+w*k+y*S,n[3]=f*M+m*k+A*S,n[4]=u*T+v*j+b*E,n[5]=d*T+g*j+x*E,n[6]=p*T+w*j+y*E,n[7]=f*T+m*j+A*E,n[8]=u*G+v*I+b*D,n[9]=d*G+g*I+x*D,n[10]=p*G+w*I+y*D,n[11]=f*G+m*I+A*D,n},rotateX:function(t,i,s){var n=Math.sin(i),o=Math.cos(i),e=t[4],r=t[5],h=t[6],a=t[7],c=t[8],l=t[9],u=t[10],d=t[11];return s?t!=s&&(s[0]=t[0],s[1]=t[1],s[2]=t[2],s[3]=t[3],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]):s=t,s[4]=e*o+c*n,s[5]=r*o+l*n,s[6]=h*o+u*n,s[7]=a*o+d*n,s[8]=e*-n+c*o,s[9]=r*-n+l*o,s[10]=h*-n+u*o,s[11]=a*-n+d*o,s},rotateY:function(t,i,s){var n=Math.sin(i),o=Math.cos(i),e=t[0],r=t[1],h=t[2],a=t[3],c=t[8],l=t[9],u=t[10],d=t[11];return s?t!=s&&(s[4]=t[4],s[5]=t[5],s[6]=t[6],s[7]=t[7],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]):s=t,s[0]=e*o+c*-n,s[1]=r*o+l*-n,s[2]=h*o+u*-n,s[3]=a*o+d*-n,s[8]=e*n+c*o,s[9]=r*n+l*o,s[10]=h*n+u*o,s[11]=a*n+d*o,s},rotateZ:function(t,i,s){var n=Math.sin(i),o=Math.cos(i),e=t[0],r=t[1],h=t[2],a=t[3],c=t[4],l=t[5],u=t[6],d=t[7];return s?t!=s&&(s[8]=t[8],s[9]=t[9],s[10]=t[10],s[11]=t[11],s[12]=t[12],s[13]=t[13],s[14]=t[14],s[15]=t[15]):s=t,s[0]=e*o+c*n,s[1]=r*o+l*n,s[2]=h*o+u*n,s[3]=a*o+d*n,s[4]=e*-n+c*o,s[5]=r*-n+l*o,s[6]=h*-n+u*o,s[7]=a*-n+d*o,s},frustum:function(t,i,s,n,o,e,r){r||(r=v.create());var h=i-t,a=n-s,c=e-o;return r[0]=2*o/h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=2*o/a,r[6]=0,r[7]=0,r[8]=(i+t)/h,r[9]=(n+s)/a,r[10]=-(e+o)/c,r[11]=-1,r[12]=0,r[13]=0,r[14]=-e*o*2/c,r[15]=0,r},perspective:function(t,i,s,n,o){var e=s*Math.tan(t*Math.PI/360),r=e*i;return v.frustum(-r,r,-e,e,s,n,o)},ortho:function(t,i,s,n,o,e,r){r||(r=v.create());var h=i-t,a=n-s,c=e-o;return r[0]=2/h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=2/a,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=-2/c,r[11]=0,r[12]=-(t+i)/h,r[13]=-(n+s)/a,r[14]=-(e+o)/c,r[15]=1,r},lookAt:function(t,i,s,n){n||(n=v.create());var o,e,r,h,a,c,l,u,d,p,f=t[0],g=t[1],w=t[2],m=s[0],b=s[1],x=s[2];return f==i[0]&&g==i[1]&&w==i[2]?v.identity(n):(o=f-i[0],e=g-i[1],r=w-i[2],h=b*(r*=p=1/Math.sqrt(o*o+e*e+r*r))-x*(e*=p),a=x*(o*=p)-m*r,c=m*e-b*o,(p=Math.sqrt(h*h+a*a+c*c))?(h*=p=1/p,a*=p,c*=p):(h=0,a=0,c=0),l=e*c-r*a,u=r*h-o*c,d=o*a-e*h,(p=Math.sqrt(l*l+u*u+d*d))?(l*=p=1/p,u*=p,d*=p):(l=0,u=0,d=0),n[0]=h,n[1]=l,n[2]=o,n[3]=0,n[4]=a,n[5]=u,n[6]=e,n[7]=0,n[8]=c,n[9]=d,n[10]=r,n[11]=0,n[12]=-(h*f+a*g+c*w),n[13]=-(l*f+u*g+d*w),n[14]=-(o*f+e*g+r*w),n[15]=1,n)},str:function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+"]"}},g=(t,i)=>({uniform:(i,s)=>{t(i,s)},value:i}),w=t=>g(((i,s)=>{s.uniform2f(i,t[0],t[1])}),t);class m{constructor(t,i,s,n=i.FLOAT){this.unit=-1,this.source=t,this.gl=i,this.texture=this.gl.createTexture(),this.bindTexture(),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,s,s,0,i.RGBA,n,t),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST)}bindTexture(t){void 0!==t&&(this.gl.activeTexture(this.gl.TEXTURE0+t),this.unit=t),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)}unbindTexture(){this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}uniform(t){this.gl.uniform1i(t,this.unit)}}class b{constructor(t,i,s,n){this.unit=-1,this.width=i,this.height=s,this.gl=t,this.frameBuffer=t.createFramebuffer(),t.bindFramebuffer(t.FRAMEBUFFER,this.frameBuffer),this.texture=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.texture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,i,s,0,t.RGBA,n||t.UNSIGNED_BYTE,null),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),this.depth=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.depth),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT16,i,s),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.texture,0),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,this.depth),t.bindTexture(t.TEXTURE_2D,null),t.bindRenderbuffer(t.RENDERBUFFER,null),t.bindFramebuffer(t.FRAMEBUFFER,null)}bind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,this.frameBuffer),this.gl.viewport(0,0,this.width,this.height)}unbind(){this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null)}bindTexture(t){void 0!==t&&(this.gl.activeTexture(this.gl.TEXTURE0+t),this.unit=t),this.gl.bindTexture(this.gl.TEXTURE_2D,this.texture)}unbindTexture(){this.gl.activeTexture(this.gl.TEXTURE0+this.unit),this.gl.bindTexture(this.gl.TEXTURE_2D,null)}uniform(t){this.gl.uniform1i(t,this.unit)}}class x extends class{constructor(t,i){this.gl=i,this.buffer=this.gl.createBuffer(),this.bind(),this.length=t.length,this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW),this.unbind()}bind(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.buffer)}unbind(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,null)}}{constructor(t,i){super(t,i)}drawTriangles(){this.gl.drawArrays(this.gl.TRIANGLES,0,this.length/3)}}class y{constructor(t=[]){this.children=[],this.children=t}visit(t,i,s){this.enter(t,i,s);for(let n=0;n<this.children.length;n++)this.children[n].visit(t,i,s);this.exit(t,i,s)}exit(t,i,s){}append(t){this.children.push(t)}enter(t,i,s){}}class A{constructor(){this.uniforms={},this.shaders=[],this.textureUnit=0,this.viewport={x:0,y:0,width:640,height:480},this.root=new y}append(t){this.root.append(t)}draw(t,i){i.viewport(this.viewport.x,this.viewport.y,this.viewport.width,this.viewport.height),i.clearColor(0,0,0,1),i.clearDepth(1),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT),this.root.visit(this,t,i)}pushUniforms(){this.uniforms=Object.create(this.uniforms)}popUniforms(){this.uniforms=Object.getPrototypeOf(this.uniforms)}pushTextura(){return this.textureUnit++}popTextura(){this.textureUnit--}pushShader(t){this.shaders.push(t)}popShader(){this.shaders.pop()}getShader(){return this.shaders[this.shaders.length-1]}}class M extends y{constructor(t,i){super(),this.children=[],this.fbo=t,this.children=i}enter(t,i,s){this.fbo.bind(),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT)}exit(t,i,s){this.fbo.unbind(),s.viewport(t.viewport.x,t.viewport.y,t.viewport.width,t.viewport.height)}}class k extends y{constructor(t,i,s){super(),this.children=[],this.shader=t,this.uniforms=i,this.children=s}enter(t){t.pushShader(this.shader),this.shader.use(),j.prototype.enter.call(this,t)}exit(t){t.popShader(),j.prototype.exit.call(this,t)}}class S{constructor(){this.x=0,this.y=0,this.near=.5,this.far=5e3,this.fov=50,this.position=p([0,0,0])}use(t){const i=new Float32Array(this.position),s=this.getProjection(),n=this.getWorldView(),o=v.create();var e;v.multiply(s,n,o),t.uniforms.projection=g(((t,i)=>{i.uniformMatrix4fv(t,!1,e)}),e=o),t.uniforms.eye=(t=>g(((i,s)=>{s.uniform3fv(i,t)}),t))(i)}setProjection(t,i){this.near=t,this.far=i}project(t){const i=v.create();v.multiply(this.getProjection(),this.getWorldView(),i);const s=v.multiplyVec4(i,t,(e=new Float32Array(4),n&&(e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n.length>3?n[3]:o),e));var n,o,e;return function(t,i,s){s&&t!=s?(s[0]=t[0]*i,s[1]=t[1]*i,s[2]=t[2]*i,s[3]=t[3]*i):(t[0]*=i,t[1]*=i,t[2]*=i,t[3]*=i)}(s,1/s[3]),s}getInverseRotation(){return t=v.toInverseMat3(this.getWorldView()),i||(i=v.create()),i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=0,i[4]=t[3],i[5]=t[4],i[6]=t[5],i[7]=0,i[8]=t[6],i[9]=t[7],i[10]=t[8],i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i;var t,i}getProjection(){return v.perspective(this.fov,1,this.near,this.far)}getWorldView(){const t=new Float32Array(this.position),i=v.identity(v.create());return v.rotateX(i,this.x),v.rotateY(i,this.y),v.translate(i,(s=t,(n=p())||(n=s),n[0]=-s[0],n[1]=-s[1],n[2]=-s[2],n)),i;var s,n}}class T extends y{constructor(t){super(),this.bufferGeometry=t}visit(t,i,s){const n=t.getShader();n.uniforms(t.uniforms);for(const t of Object.keys(this.bufferGeometry)){const i=this.bufferGeometry[t];i.bind();const o=n.getAttribLocation(t);s.vertexAttribPointer(o,3,s.FLOAT,!1,0,0),s.enableVertexAttribArray(o),i instanceof x&&i.drawTriangles()}for(const t of Object.keys(this.bufferGeometry))this.bufferGeometry[t].unbind()}}class j extends y{constructor(t,i){super(),this.uniforms=t,this.children=i}enter(t){t.pushUniforms();for(let i in this.uniforms){const s=this.uniforms[i];(s instanceof m||s instanceof b)&&s.bindTexture(t.pushTextura()),t.uniforms[i]=s}}exit(t){for(let i in this.uniforms){const s=this.uniforms[i];(s instanceof m||s instanceof b)&&(s.unbindTexture(),t.popTextura())}t.popUniforms()}}class E extends y{constructor(t,i,s,n=[]){super();const o=new x(d(),s),e=new T({position:o}),r=new k(t,i,[e]);this.children=[...n,r]}}const G={32:"SPACE",13:"ENTER",9:"TAB",8:"BACKSPACE",16:"SHIFT",17:"CTRL",18:"ALT",20:"CAPS_LOCK",144:"NUM_LOCK",145:"SCROLL_LOCK",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN",33:"PAGE_UP",34:"PAGE_DOWN",36:"HOME",35:"END",45:"INSERT",46:"DELETE",27:"ESCAPE",19:"PAUSE"},I=(t,i,s)=>t<i?i:t>s?s:t,D=t=>{if(t){const i=t.changedTouches;if(i&&i.length>0){const t=i[0];return{x:t.clientX,y:t.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}};class R{constructor(t){this.input=t}tick(t){const{x:i,y:s}=this.input.getOffsetFromElementCenter();t.y+=1e-4*i,t.x+=1e-4*s;const n=t.getInverseRotation(),o=p();var e,r,h;this.input.keys.W?o[2]=-1:this.input.keys.S&&(o[2]=1),this.input.keys.A?o[0]=-1:this.input.keys.D&&(o[0]=1),function(t,i){i||(i=t);var s=t[0],n=t[1],o=t[2],e=Math.sqrt(s*s+n*n+o*o);e?1==e?(i[0]=s,i[1]=n,i[2]=o):(i[0]=s*(e=1/e),i[1]=n*e,i[2]=o*e):(i[0]=0,i[1]=0,i[2]=0)}(o),v.multiplyVec3(n,o),e=t.position,r=o,h&&e!=h?(h[0]=e[0]+r[0],h[1]=e[1]+r[1],h[2]=e[2]+r[2]):(e[0]+=r[0],e[1]+=r[1],e[2]+=r[2])}}class L{constructor(t){this.keys={},this.mouse={down:!1,x:0,y:0},this.onClick=void 0,this.onKeyUp=void 0,this.onKeyDown=void 0,this.width=0,this.height=0,this.hasFocus=!0,this.element=void 0,this.focus=()=>{this.hasFocus||(this.hasFocus=!0,this.reset())},this.blur=()=>{this.hasFocus=!1,this.reset()},this.mouseMove=(t,i)=>{if(!this.mouse.down)return;const s=this.element.getBoundingClientRect();this.mouse.x=I(t-s.left,0,this.element.width),this.mouse.y=I(i-s.top,0,this.element.height)},this.mouseDown=(t,i)=>{this.mouse.down=!0;const s=this.element.getBoundingClientRect();this.mouse.x=I(t-s.left,0,this.element.width),this.mouse.y=I(i-s.top,0,this.element.height)},this.mouseUp=()=>{this.mouse.down=!1,this.hasFocus&&this.onClick&&this.onClick(this.mouse.x,this.mouse.y)},this.keyDown=t=>{const i=this.getKeyName(t),s=this.keys[i];return this.keys[i]=!0,this.onKeyDown&&!s&&this.onKeyDown(i),this.hasFocus},this.keyUp=t=>{var i=this.getKeyName(t);return this.keys[i]=!1,this.onKeyUp&&this.onKeyUp(i),this.hasFocus},this.reset=()=>{this.keys={};for(let t=65;t<128;t++)this.keys[String.fromCharCode(t)]=!1;for(let t in G)this.keys[G[t]]=!1;this.mouse={down:!1,x:0,y:0}},this.getKeyName=t=>G[t]||String.fromCharCode(t),this.element=t,this.bind(t),this.reset()}bind(t){t&&(this.element=t,document.onkeydown=t=>this.keyDown(t.keyCode),document.onkeyup=t=>this.keyUp(t.keyCode),window.onclick=i=>{i.target===t?focus():blur()},this.element.onmousedown=t=>{const{x:i,y:s}=D(t);this.mouseDown(i,s)},this.element.ontouchstart=t=>{const{x:i,y:s}=D(t);this.mouseDown(i,s)},document.ontouchmove=t=>{const{x:i,y:s}=D(t);this.mouseMove(i,s)},document.onmousemove=t=>{const{x:i,y:s}=D(t);this.mouseMove(i,s)},document.ontouchend=this.mouseUp,document.ontouchcancel=this.mouseUp,document.onmouseup=this.mouseUp)}getOffsetFromElementCenter(){return this.element&&this.mouse.down?{x:this.mouse.x-.5*this.element.width,y:this.mouse.y-.5*this.element.height}:{x:0,y:0}}}class Y{constructor(){this.isRunning=!1,this.timerId=null}start(){if(this.isRunning)return;this.isRunning=!0,this.now=(new Date).getTime(),this.loopFunc=window.requestAnimationFrame.bind(window)||(t=>{this.timerId=setTimeout(t,16)});const t=i=>{this.isRunning&&(this.tick(i),this.loopFunc(t))};this.loopFunc(t)}stop(){this.isRunning=!1,this.timerId&&(clearTimeout(this.timerId),this.timerId=null)}tick(t){this.onTick&&this.onTick((t-this.now)/1e3),this.now=t}setAnimationLoop(t){this.onTick=t}}class Z{constructor(){this.clock=new Y,this.domElement=document.createElement("canvas"),this.gl=this.domElement.getContext("webgl"),this.gl.getExtension("OES_texture_float"),this.gl.enable(this.gl.DEPTH_TEST),this.inputHandler=new L(this.domElement),this.cameraController=new R(this.inputHandler)}start(){this.clock.start()}stop(){this.clock.isRunning&&this.clock.stop()}getGLRenderContext(){return this.gl}setAnimationLoop(t){this.clock.setAnimationLoop(t)}render(t,i){this.cameraController.tick(i),i.use(t),t.draw(i,this.gl)}}class O{constructor(t){this.resources={},this.pendingStatus={total:0,pending:0,failed:0},this.loadImage=t=>{const i=document.createElement("img");i.src=this.rootPath+t,i.onload=()=>{this.success(t,i)},i.onerror=()=>{this.error(t,i)}},this.loadJSON=t=>{fetch(this.rootPath+t).then((async t=>t.json())).then((i=>this.success(t,i))).catch((i=>{this.error(t,i)}))},this.loadData=t=>{fetch(this.rootPath+t).then((async t=>t.text())).then((i=>{this.success(t,i)})).catch((i=>{this.error(t,i)}))},this.success=(t,i)=>{this.resources[t]=i,this.pendingStatus.pending--,0===this.pendingStatus.pending&&this.onRendy&&this.onRendy()},this.error=(t,i)=>{throw this.pendingStatus.pending--,this.pendingStatus.failed++,this.resources[t]=null,"string"!=typeof i&&(i.path=t),i},this.rootPath=t}load(t){for(let i=0;i<t.length;i++){const s=t[i];s in t||(this.pendingStatus.pending++,this.pendingStatus.total++,/\.(jpe?g|gif|png)$/.test(s)?this.loadImage(s):/\.json$/.test(s)?this.loadJSON(s):this.loadData(s))}setTimeout((()=>{0===this.pendingStatus.pending&&this.onRendy&&this.onRendy()}),1)}setOnRendy(t){this.onRendy=t}}const U=(t,i,s)=>{const n=t.createShader(i);if(t.shaderSource(n,s),t.compileShader(n),!t.getShaderParameter(n,t.COMPILE_STATUS))throw console.warn(t.getShaderInfoLog(n),i,s),'Compiler exception: "'+t.getShaderInfoLog(n)+'"';return n};class C{constructor(t,i,s){this.uniformLocations={},this.gl=t,this.program=((t,i,s)=>{const n=U(t,t.VERTEX_SHADER,i),o=U(t,t.FRAGMENT_SHADER,s),e=t.createProgram();if(t.attachShader(e,n),t.attachShader(e,o),t.linkProgram(e),!t.getProgramParameter(e,t.LINK_STATUS))throw"Linker exception: "+t.getProgramInfoLog(e);return e})(this.gl,i,s)}use(){this.gl.useProgram(this.program)}uniforms(t){for(let i in t){const s=t[i];let n;void 0!==this.uniformLocations[i]?n=this.uniformLocations[i]:(n=this.gl.getUniformLocation(this.program,i),this.uniformLocations[i]=n),null!==n&&("number"==typeof s?this.gl.uniform1f(n,s):s.uniform(n,this.gl))}}getAttribLocation(t){const i=this.gl.getAttribLocation(this.program,t);if(i<0)throw"attribute not found";return i}}class F{constructor(t,i){this.shaders={},this.importExpression=/\/\/\/\s*import "([^"]+)"/g,this.resources=t,this.gl=i}get(t,i){i||(i=t+".frag",t+=".vert");const s=`${t}-${i}`;return s in this.resources||(this.shaders[s]=new C(this.gl,this.getSource(t),this.getSource(i))),this.shaders[s]}getSource(t){const i=this._getSourceName(t),s=this.resources[i];if(null==s)throw new Error(`cant found ${t} Source`);return s.replace(this.importExpression,((t,i)=>this.getSource(i)))}_getSourceName(t){const i=t.split("/");return i[i.length-1]}}class N{constructor(t,i){this.position=t,this.materials=i}}class z extends N{constructor(t,i){super(t,i),this.type=0}}class P extends N{constructor(t,i){super(t,i),this.type=1}}const Q=()=>{let t,i,s,n,o,e,r=new Z;const h=r.getGLRenderContext();o=new O("./assets/shader/"),o.load(["raytrace.vert","raytrace.frag","screen.vert","screen.frag","merge.vert","merge.frag"]),o.setOnRendy((function(){e=new F(o.resources,h);const l=e.get("raytrace"),u=e.get("screen"),p=e.get("merge"),f=function(t){const i=[];return i.push(new z([-.2,0,-.08,.17],[1.8,.8,.8,0])),i.push(new z([-.06,-.45,.3,.07],[.2,.2,.8,0])),i.push(new z([.26,-.25,-.15,.2],[1.8,1.3,.3,2.9])),i.push(new P([0,.5,0,0],[.8,.5,.5,0])),i.push(new P([0,-.5,0,0],[.5,.8,.8,0])),i.push(new P([.5,0,0,0],[.5,.5,.8,0])),i.push(new P([-.5,0,0,0],[.8,.5,.8,0])),i.push(new P([0,0,.5,0],[.8,.8,.5,0])),function(t,i){let s=[],n=[],o=[],e=0;for(const i of t)s=s.concat([i.type,0,0,0]),n=n.concat(i.position),o=o.concat(i.materials),e++;const r=Math.pow(2,Math.ceil(Math.log(e)/(2*Math.log(2))));for(let t=0;t<r*r-e;t++)s=s.concat([0,0,0,0]),n=n.concat([0,0,0,0]),o=o.concat([0,0,0,0]);return{objects:new m(new Uint8Array(s),i,r,i.UNSIGNED_BYTE),objectPositions:new m(new Float32Array(n),i,r),objectMaterials:new m(new Float32Array(o),i,r),numObjects:(h=e,g(((t,i)=>{i.uniform1i(t,h)}),h)),uResolution:w([1024,1024]),objectTextureSize:r,timeSinceStart:0,textureWeight:0};var h}(i,t)}(h),v=new b(h,1024,1024),y=new b(h,1024,1024);t=new S;const G=new x(d(),h);n=new T({position:G}),s=new k(l,{},[n]),i=new A;const I=new M(v,[s]),D=new M(y,[new E(p,{texture:a,oneTimeTexture:v},h,[])]),R=new M(a,[new E(u,{texture:y},h,[])]),L=new E(u,{texture:y},h,[I,D,R]),Y=new j(f,[L]);i.append(Y),r.start(),document.querySelector("ion-content").appendChild(r.domElement),((t,i)=>{const s=()=>{t.width=i.viewport.width=1024,t.height=i.viewport.height=1024};window.addEventListener("resize",s,!1),s()})(r.domElement,i),r.setAnimationLoop((function(){f.timeSinceStart=(Date.now()-Z)/1e6,f.textureWeight=c/(c+1),c++,r.render(i,t)})),f.uResolution=w([1024,1024]);let Z=Date.now()}));const a=new b(h,1024,1024);let c=1};let B=class{constructor(i){t(this,i)}componentDidLoad(){document.querySelector("ion-content").innerHTML="",Q()}render(){return i("ion-app",null,i("ion-content",null))}get el(){return s(this)}};B.style="ion-content{overflow-y:hidden}";let W=class{constructor(i){t(this,i)}componentDidLoad(){H((async()=>{const t=c(window,"hybrid");a.getBoolean("_testing")||import("./p-35331d77.js").then((t=>t.startTapClick(a))),a.getBoolean("statusTap",t)&&import("./p-8cff764e.js").then((t=>t.startStatusTap())),a.getBoolean("inputShims",V())&&import("./p-5514aa89.js").then((t=>t.startInputShims(a)));const i=await import("./p-f2660943.js");a.getBoolean("hardwareBackButton",t)?i.startHardwareBackButton():i.blockHardwareBackButton(),"undefined"!=typeof window&&import("./p-2e4e8117.js").then((t=>t.startKeyboardAssist(window))),import("./p-aef0bba0.js").then((t=>t.startFocusVisible()))}))}render(){const t=h(this);return i(n,{class:{[t]:!0,"ion-page":!0,"force-statusbar-padding":a.getBoolean("_forceStatusbarPadding")}})}get el(){return s(this)}};const V=()=>c(window,"ios")&&c(window,"mobile"),H=t=>{"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)};W.style="html.plt-mobile ion-app{user-select:none}html.plt-mobile ion-app [contenteditable]{user-select:text}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}";let J=class{constructor(i){t(this,i),this.ionScrollStart=o(this,"ionScrollStart",7),this.ionScroll=o(this,"ionScroll",7),this.ionScrollEnd=o(this,"ionScrollEnd",7),this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.isMainContent=!0,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}connectedCallback(){this.isMainContent=null===this.el.closest("ion-menu, ion-popover, ion-modal")}disconnectedCallback(){this.onScrollEnd()}onAppLoad(){this.resize()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}shouldForceOverscroll(){const{forceOverscroll:t}=this,i=h(this);return void 0===t?"ios"===i&&c("ios"):t}resize(){this.fullscreen?e((()=>this.readDimensions())):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,r(this))}readDimensions(){const t=X(this.el),i=Math.max(this.el.offsetTop,0),s=Math.max(t.offsetHeight-i-this.el.offsetHeight,0);(i!==this.cTop||s!==this.cBottom)&&(this.cTop=i,this.cBottom=s,r(this))}onScroll(t){const i=Date.now(),s=!this.isScrolling;this.lastScroll=i,s&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,e((i=>{this.queued=!1,this.detail.event=t,_(this.detail,this.scrollEl,i,s),this.ionScroll.emit(this.detail)})))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,i,s){return this.scrollToPoint(t+this.scrollEl.scrollLeft,i+this.scrollEl.scrollTop,s)}async scrollToPoint(t,i,s=0){const n=this.scrollEl;if(s<32)return null!=i&&(n.scrollTop=i),void(null!=t&&(n.scrollLeft=t));let o,e=0;const r=new Promise((t=>o=t)),h=n.scrollTop,a=n.scrollLeft,c=null!=i?i-h:0,l=null!=t?t-a:0,u=t=>{const i=Math.min(1,(t-e)/s)-1,r=Math.pow(i,3)+1;0!==c&&(n.scrollTop=Math.floor(r*c+h)),0!==l&&(n.scrollLeft=Math.floor(r*l+a)),r<1?requestAnimationFrame(u):o()};return requestAnimationFrame((t=>{e=t,u(t)})),r}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval((()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()}),100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}render(){const{isMainContent:t,scrollX:s,scrollY:o}=this,e=h(this),r=this.shouldForceOverscroll(),c=t?"main":"div",d="ios"===e&&a.getBoolean("experimentalTransitionShadow",!0);return this.resize(),i(n,{class:l(this.color,{[e]:!0,"content-sizing":u("ion-popover",this.el),overscroll:r}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}},i("div",{id:"background-content",part:"background"}),i(c,{class:{"inner-scroll":!0,"scroll-x":s,"scroll-y":o,overscroll:(s||o)&&r},ref:t=>this.scrollEl=t,onScroll:this.scrollEvents?t=>this.onScroll(t):void 0,part:"scroll"},i("slot",null)),d?i("div",{class:"transition-effect"},i("div",{class:"transition-cover"}),i("div",{class:"transition-shadow"})):null,i("slot",{name:"fixed"}))}get el(){return s(this)}};const X=t=>{const i=t.closest("ion-tabs");if(i)return i;return t.closest("ion-app,ion-page,.ion-page,page-inner")||(t=>t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null)(t)},_=(t,i,s,n)=>{const o=t.currentX,e=t.currentY,r=i.scrollLeft,h=i.scrollTop,a=s-t.currentTime;if(n&&(t.startTime=s,t.startX=r,t.startY=h,t.velocityX=t.velocityY=0),t.currentTime=s,t.currentX=t.scrollLeft=r,t.currentY=t.scrollTop=h,t.deltaX=r-t.startX,t.deltaY=h-t.startY,a>0&&a<100){const i=(h-e)/a;t.velocityX=(r-o)/a*.7+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}};J.style=':host{--background:var(--ion-background-color, #fff);--color:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;flex:1;width:100%;height:100%;margin:0 !important;padding:0 !important;font-family:var(--ion-font-family, inherit);contain:size style}:host(.ion-color) .inner-scroll{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.outer-content){--background:var(--ion-color-step-50, #f2f2f2)}#background-content{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);position:absolute;background:var(--background)}.inner-scroll{left:0px;right:0px;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;color:var(--color);box-sizing:border-box;overflow:hidden}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.inner-scroll{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-y,.scroll-x{-webkit-overflow-scrolling:touch;z-index:0;will-change:scroll-position}.scroll-y{touch-action:pan-y;overflow-y:var(--overflow);overscroll-behavior-y:contain}.scroll-x{touch-action:pan-x;overflow-x:var(--overflow);overscroll-behavior-x:contain}.scroll-x.scroll-y{touch-action:auto}.overscroll::before,.overscroll::after{position:absolute;width:1px;height:1px;content:""}.overscroll::before{bottom:-1px}.overscroll::after{top:-1px}:host(.content-sizing){contain:none}:host(.content-sizing) .inner-scroll{position:relative}.transition-effect{display:none;position:absolute;left:-100%;width:100%;height:100vh;opacity:0;pointer-events:none}.transition-cover{position:absolute;right:0;width:100%;height:100%;background:black;opacity:0.1}.transition-shadow{display:block;position:absolute;right:0;width:10px;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAgCAYAAAAIXrg4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE3MDgzRkQ5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3MDgzRkU5QTkyMTFFOUEwNzQ5MkJFREE1NUY2MjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMTcwODNGQjlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMTcwODNGQzlBOTIxMUU5QTA3NDkyQkVEQTU1RjYyNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmePEuQAAABNSURBVHjaYvz//z8DIxAwMDAwATGMhmFmPDQuOSZks0AMmoJBaQHjkPfB0Lfg/2gQjVow+HPy/yHvg9GiYjQfjMbBqAWjFgy/4hogwADYqwdzxy5BuwAAAABJRU5ErkJggg==);background-repeat:repeat-y;background-size:10px 16px}::slotted([slot=fixed]){position:absolute}';export{B as app_root,W as ion_app,J as ion_content}