import * as Scene from '../engine/scene';
import { WebGLRenderer } from '../engine/renderer';
import { VertexBufferObject, setCanvasFullScreen, Texture2D, uniform } from '../engine/glUtils';
import Loader from '../engine/loader';
import { screen_quad } from '../engine/mesh';
import { ShaderManager } from '../engine/shader';
import { Sphere, Plane, RenderObject } from './object';

function makeScene(gl: WebGLRenderingContext) {
  const renderObjects = [];
  renderObjects.push(new Sphere([0.0, 2.5, 0.0, 1], [1.0, 1.0, 1.8, 0.2]));
  renderObjects.push(new Sphere([0.8, 2, 3, 0.25], [1.0, 1.0, 0.8, 0.9]));
  renderObjects.push(new Sphere([0, -1, 0, 0.55], [0.5, 0.0, 0.8, 0.9]));

  return buildScene(renderObjects, gl);
}

function buildScene(renderObjects: RenderObject[], gl: WebGLRenderingContext) {
  let objects = [];
  let objectPositions = [];
  let objectMaterials = [];
  let numObjects = 0;

  for (const item of renderObjects) {
    objects = objects.concat([item.type, 0, 0, 0]);
    objectPositions = objectPositions.concat(item.position);
    objectMaterials = objectMaterials.concat(item.materials);
    numObjects++;
  }

  const objectSideList = Math.pow(2.0, Math.ceil(Math.log(numObjects) / (2.0 * Math.log(2.0))));

  for (let i = 0; i < objectSideList * objectSideList - numObjects; i++) {
    objects = objects.concat([0, 0, 0, 0]);
    objectPositions = objectPositions.concat([0, 0, 0, 0]);
    objectMaterials = objectMaterials.concat([0, 0, 0, 0]);
  }

  return {
    objects: new Texture2D(new Uint8Array(objects), gl, objectSideList, gl.UNSIGNED_BYTE),
    objectPositions: new Texture2D(new Float32Array(objectPositions), gl, objectSideList),
    objectMaterials: new Texture2D(new Float32Array(objectMaterials), gl, objectSideList),
    numObjects: uniform.Int(numObjects),
    uResolution: uniform.Vec2([800, 800]),
    objectTextureSize: objectSideList,
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
  loader.load(['raytrace.vert', 'raytrace.frag']);
  loader.setOnRendy(init);

  function init() {
    // 资源管理相关

    shaderManager = new ShaderManager(loader.resources, gl);

    const raytraceShader = shaderManager.get('raytrace');

    camera = new Scene.Camera();

    const positionVbo = new VertexBufferObject(screen_quad(), gl);
    const sceneObject = makeScene(gl);
    mesh = new Scene.SimpleMesh({ position: positionVbo });
    material = new Scene.Material(raytraceShader, sceneObject, [mesh]);
    scene = new Scene.Graph();

    scene.append(material);

    renderer.start();
    document.querySelector('ion-content').appendChild(renderer.domElement);
    setCanvasFullScreen(renderer.domElement, scene, 400, 400);


    sceneObject.uResolution = uniform.Vec2([400, 400]);

    renderer.render(scene, camera);
 
  }
};
