import * as Scene from '../engine/scene';
import { WebGLRenderer } from '../engine/renderer';
import { VertexBufferObject, setCanvasFullScreen, Texture2D, uniform, FrameBufferObject } from '../engine/glUtils';
import Loader from '../engine/loader';
import { screen_quad } from '../engine/mesh';
import { ShaderManager } from '../engine/shader';
import { Sphere, Plane, RenderObject } from './object';

const size = 700;

function makeScene(gl: WebGLRenderingContext) {
  const renderObjects = [];
  renderObjects.push(new Sphere([-0.2, 0, -0.28, 0.07], [1.8, 0.8, 0.8, 0.0], [0.5, 0.0, 0.0, 0.0]));
  renderObjects.push(new Sphere([-0.15, -0.45, 0.45, 0.07], [0.2, 0.2, 0.8, 0.0], [0.5, 0.0, 0.0, 0.0]));
  renderObjects.push(new Sphere([0.1, -0.3, 0.4, 0.18], [1.0, 1.0, 1.0, 7.0], [0.2, 0.0, 0.0, 0.0]));

  renderObjects.push(new Plane([0, 0.5, 0, 0], [0.8, 0.5, 0.5, 0.0], [0.7, 0.0, 0.0, 0.0]));
  renderObjects.push(new Plane([0, -0.5, 0, 0], [0.5, 0.8, 0.8, 0.0], [0.7, 0.0, 0.0, 0.0]));
  renderObjects.push(new Plane([0.5, 0, 0, 0], [0.5, 0.5, 0.8, 0.0], [0.7, 0.0, 0.0, 0.0]));
  renderObjects.push(new Plane([-0.5, 0, 0, 0], [0.8, 0.5, 0.8, 0.0], [0.7, 0.0, 0.0, 0.0]));
  renderObjects.push(new Plane([0, 0, 0.5, 0], [0.8, 0.8, 0.5, 0.0], [0.7, 0.0, 0.0, 0.0]));
  renderObjects.push(new Plane([0, 0, -2.1, 0], [0.8, 0.8, 0.5, 0.0], [0.7, 0.0, 0.0, 0.0]));

  return buildScene(renderObjects, gl);
}

function buildScene(renderObjects: RenderObject[], gl: WebGLRenderingContext) {
  let objects = [];
  let objectPositions = [];
  let objectMaterials = [];
  let objectMaterialsExtended = [];
  let numObjects = 0;

  for (const item of renderObjects) {
    objects = objects.concat([item.type, 0, 0, 0]);
    objectPositions = objectPositions.concat(item.position);
    objectMaterials = objectMaterials.concat(item.materials);
    objectMaterialsExtended = objectMaterialsExtended.concat(item.objectMaterialsExtended);
    numObjects++;
  }

  const objectSideList = Math.pow(2.0, Math.ceil(Math.log(numObjects) / (2.0 * Math.log(2.0))));

  for (let i = 0; i < objectSideList * objectSideList - numObjects; i++) {
    objects = objects.concat([0, 0, 0, 0]);
    objectPositions = objectPositions.concat([0, 0, 0, 0]);
    objectMaterials = objectMaterials.concat([0, 0, 0, 0]);
    objectMaterialsExtended = objectMaterialsExtended.concat([0, 0, 0, 0]);
  }

  return {
    objects: new Texture2D(new Uint8Array(objects), gl, objectSideList, gl.UNSIGNED_BYTE),
    objectPositions: new Texture2D(new Float32Array(objectPositions), gl, objectSideList),
    objectMaterials: new Texture2D(new Float32Array(objectMaterials), gl, objectSideList),
    objectMaterialsExtended: new Texture2D(new Float32Array(objectMaterialsExtended), gl, objectSideList),
    numObjects: uniform.Int(numObjects),
    uResolution: uniform.Vec2([size, size]),
    objectTextureSize: objectSideList,
    timeSinceStart: 0,
    textureWeight: 0,
  };
}

export const makeRayTrace = () => {
  let camera: Scene.Camera;
  let scene: Scene.Graph;
  let renderer: WebGLRenderer = new WebGLRenderer();
  let material: Scene.Material;
  let mesh: Scene.SimpleMesh;
  let loader: Loader;
  let shaderManager: ShaderManager;
  const gl = renderer.getGLRenderContext();

  loader = new Loader('./assets/shader/');
  loader.load(['raytrace.vert', 'raytrace.frag', 'screen.vert', 'screen.frag', 'merge.vert', 'merge.frag']);
  loader.setOnRendy(init);
  const finalFbo = new FrameBufferObject(gl, size, size);
  // 步长
  let dStep = 1;

  function init() {
    // 资源管理相关
    shaderManager = new ShaderManager(loader.resources, gl);
    const raytraceShader = shaderManager.get('raytrace');
    const postShader = shaderManager.get('screen');
    const mergeShader = shaderManager.get('merge');

    const sceneObject = makeScene(gl);

    const fbo1 = new FrameBufferObject(gl, size, size);
    const fbo2 = new FrameBufferObject(gl, size, size);

    camera = new Scene.Camera();
    const positionVbo = new VertexBufferObject(screen_quad(), gl);

    mesh = new Scene.SimpleMesh({ position: positionVbo });
    material = new Scene.Material(raytraceShader, {}, [mesh]);
    scene = new Scene.Graph();
    const oneTimeTarget = new Scene.RenderTarget(fbo1, [material]);

    const mergeTarget = new Scene.RenderTarget(fbo2, [new Scene.PostProcess(mergeShader, { texture: finalFbo, oneTimeTexture: fbo1 }, gl, [])]);
    const mergeTarget1 = new Scene.RenderTarget(finalFbo, [new Scene.PostProcess(postShader, { texture: fbo2 }, gl, [])]);

    const postprocess = new Scene.PostProcess(postShader, { texture: fbo2 }, gl, [oneTimeTarget, mergeTarget, mergeTarget1]);
    const uniformPostProcess = new Scene.Uniforms(sceneObject, [postprocess]);

    scene.append(uniformPostProcess);

    renderer.start();
    document.querySelector('ion-content').appendChild(renderer.domElement);
    setCanvasFullScreen(renderer.domElement, scene, size, size);
    renderer.setAnimationLoop(animation);

    sceneObject.uResolution = uniform.Vec2([size, size]);

    let startTime = Date.now();

    function animation() {
      sceneObject.timeSinceStart = (Date.now() - startTime) / 1000;
      dStep++;
      sceneObject.textureWeight = (dStep - 1) / dStep;
      renderer.render(scene, camera);
    }
  }
};
