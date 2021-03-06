import * as Scene from './scene';
import { GlValue } from '../interfaces';

const createGlValue = (set, value: Float32Array | Number) => {
  const setValue = (): GlValue => {
    const uniform = (location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
      set(location, gl);
    };
    return { uniform, value };
  };
  return setValue();
};

export const Mat4 = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniformMatrix4fv(location, false, value);
  }, value);
};

export const Mat3 = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniformMatrix3fv(location, false, value);
  }, value);
};

export const Vec2 = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniform2f(location, value[0], value[1]);
  }, value);
};

export const Vec3 = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniform3fv(location, value);
  }, value);
};

export const Vec4 = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniform4fv(location, value);
  }, value);
};

export const Int = value => {
  return createGlValue((location: WebGLUniformLocation, gl: WebGLRenderingContext) => {
    gl.uniform1i(location, value);
  }, value);
};

export const uniform = {
  Mat4,
  Mat3,
  Vec2,
  Vec3,
  Vec4,
  Int,
};
export class Texture2D {
  gl: WebGLRenderingContext;
  texture: WebGLTexture;
  source: any;
  unit: number = -1;

  constructor(source: any, gl: WebGLRenderingContext, size: number, type: number = gl.FLOAT) {
    this.source = source;
    this.gl = gl;
    this.texture = this.gl.createTexture();
    this.bindTexture();
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, type, source);
  	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  }

  bindTexture(unit?: number) {
    if (unit !== undefined) {
      this.gl.activeTexture(this.gl.TEXTURE0 + unit);
      this.unit = unit;
    }
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
  }

  unbindTexture() {
    this.gl.activeTexture(this.gl.TEXTURE0 + this.unit);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
  }

  uniform(location: WebGLUniformLocation) {
    this.gl.uniform1i(location, this.unit);
  }
}

export class FrameBufferObject {
  width: number;
  height: number;
  gl: WebGLRenderingContext;
  frameBuffer: WebGLFramebuffer;
  texture: WebGLTexture;
  depth: WebGLRenderbuffer;
  unit = -1;

  constructor(gl: WebGLRenderingContext, width: number, height: number, format?: number) {
    this.width = width;
    this.height = height;
    this.gl = gl;
    // FBO ????????????????????????
    this.frameBuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);

    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    // ????????????????????????
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, format || gl.UNSIGNED_BYTE, null);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // ???????????????????????????????????????????????????????????????????????????
    this.depth = gl.createRenderbuffer();
    gl.bindRenderbuffer(gl.RENDERBUFFER, this.depth);
    // ?????????????????????????????????????????????????????????
    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
    // ????????????????????????FBO
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this.depth);

    gl.bindTexture(gl.TEXTURE_2D, null);
    gl.bindRenderbuffer(gl.RENDERBUFFER, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  }

  bind() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.frameBuffer);
    this.gl.viewport(0, 0, this.width, this.height);
  }

  unbind() {
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
  }

  bindTexture(unit?: number) {
    if (unit !== undefined) {
      this.gl.activeTexture(this.gl.TEXTURE0 + unit);
      this.unit = unit;
    }
    this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
  }

  unbindTexture() {
    this.gl.activeTexture(this.gl.TEXTURE0 + this.unit);
    this.gl.bindTexture(this.gl.TEXTURE_2D, null);
  }

  uniform(location: WebGLUniformLocation) {
    this.gl.uniform1i(location, this.unit);
  }
}

/**
 * ?????????????????????????????????????????????????????????????????????bind
 */
export class BufferObject {
  gl: WebGLRenderingContext;
  buffer: WebGLBuffer;
  length: number;
  constructor(vertexData: Float32Array, gl: WebGLRenderingContext) {
    this.gl = gl;
    this.buffer = this.gl.createBuffer();
    this.bind();
    this.length = vertexData.length;
    this.gl.bufferData(this.gl.ARRAY_BUFFER, vertexData, this.gl.STATIC_DRAW);
    this.unbind();
  }

  bind() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
  }

  unbind() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
  }
}

export class VertexBufferObject extends BufferObject {
  gl: WebGLRenderingContext;
  buffer: WebGLBuffer;
  length: number;
  constructor(vertexData: Float32Array, gl: WebGLRenderingContext) {
    super(vertexData, gl);
  }

  drawTriangles() {
    this.gl.drawArrays(this.gl.TRIANGLES, 0, this.length / 3);
  }
}

// ???????????????RGBA??????
export const getImageData = (imageEl: HTMLImageElement) => {
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');
  canvasEl.width = imageEl.width;
  canvasEl.height = imageEl.height;
  ctx.drawImage(imageEl, 0, 0);
  return ctx.getImageData(0, 0, imageEl.width, imageEl.height);
};

// ???????????????????????????????????????
export const sampleHeight = (imgData: ImageData, u: number, v: number) => {
  // ~~ ?????????????????????
  if (u < 0 || u > 1 || v < 0 || v > 1) return 0.0;
  var x = ~~(imgData.width * u),
    y = ~~(imgData.height * v),
    i = (y * imgData.width + x) * 4 + 3;
  return imgData.data[i] / 255;
};

export const setCanvasFullScreen = (canvas: HTMLCanvasElement, scene: Scene.Graph, width?: number, height?: number) => {
  const onResize = () => {
    canvas.width = scene.viewport.width = width || window.innerWidth;
    canvas.height = scene.viewport.height = height || window.innerHeight;
  };
  window.addEventListener('resize', onResize, false);
  onResize();
};
