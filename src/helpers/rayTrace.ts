import * as Scene from '../engine/scene';
import { WebGLRenderer } from '../engine/renderer';
import { VertexBufferObject, setCanvasFullScreen, Texture2D, uniform } from '../engine/glUtils';
import Loader from '../engine/loader';
import { screen_quad } from '../engine/mesh';
import { ShaderManager } from '../engine/shader';
import { Sphere, Plane, RenderObject, Light } from './object';

function makeScene(gl: WebGLRenderingContext) {
  const renderObjects = [];
  renderObjects.push(new Sphere([0.0, 2.5, 0.0, 1], [1.0, 1.0, 0.8, 0.7], [0.4, 50.0, 0.8, 0.0]));
  renderObjects.push(new Sphere([0.5, 3, 5, 0.2], [1.0, 0.0, 0.8, 0.7], [0.9, 10.0, 1.0, 0.0]));
  renderObjects.push(new Sphere([2.2, 3.01, 0.0, 0.9], [0.0, 1.0, 0.0, 0.7], [0.3, 50.0, 0.3, 0.0]));

  renderObjects.push(new Plane([0.0, 1.0, 0.0, 0.0], [0.5, 0.5, 0.5, 0.4], [0.1, 0.3, 0.15, 0.0]));

  renderObjects.push(new Light([-2.0, 7.3, 0.0, 0.0], [1.0, 1.0, 1.0, 0.0]));
  renderObjects.push(new Light([0.0, 8.0, 3.0, 0.0], [1.0, 1.0, 1.0, 0.0]));
  return buildScene(renderObjects, gl);
}

function buildScene(renderObjects: RenderObject[], gl: WebGLRenderingContext) {
  let lights = [];
  let lightMaterials = [];
  let objects = [];
  let objectPositions = [];
  let objectMaterials = [];
  let objectMaterialsExtended = [];
  let numObjects = 0;
  let numLight = 0;

  for (const item of renderObjects) {
    if (item instanceof Sphere || item instanceof Plane) {
      objects = objects.concat([item.type, 0, 0, 0]);
      objectPositions = objectPositions.concat(item.position);
      objectMaterials = objectMaterials.concat(item.materials);
      objectMaterialsExtended = objectMaterialsExtended.concat(item.objectMaterialsExtended);
      numObjects++;
    } else {
      lights = lights.concat(item.position);
      lightMaterials = lightMaterials.concat(item.materials);
      numLight++;
    }
  }

  const objectSideList = Math.pow(2.0, Math.ceil(Math.log(numObjects) / (2.0 * Math.log(2.0))));
  const lightSideList = Math.pow(2.0, Math.ceil(Math.log(numLight) / (2.0 * Math.log(2.0))));

  for (let i = 0; i < objectSideList * objectSideList - numObjects; i++) {
    objects = objects.concat([0, 0, 0, 0]);
    objectPositions = objectPositions.concat([0, 0, 0, 0]);
    objectMaterials = objectMaterials.concat([0, 0, 0, 0]);
    objectMaterialsExtended = objectMaterialsExtended.concat([0, 0, 0, 0]);
  }

  for (let i = 0; i < lightSideList * lightSideList - numLight; i++) {
    lights = lights.concat([0, 0, 0, 0]);
    lightMaterials = lightMaterials.concat([0, 0, 0, 0]);
  }
  return {
    objects: new Texture2D(new Uint8Array(objects), gl, objectSideList, gl.UNSIGNED_BYTE),
    objectPositions: new Texture2D(new Float32Array(objectPositions), gl, objectSideList),
    objectMaterials: new Texture2D(new Float32Array(objectMaterials), gl, objectSideList),
    objectMaterialsExtended: new Texture2D(new Float32Array(objectMaterialsExtended), gl, objectSideList),
    lights: new Texture2D(new Float32Array(lights), gl, lightSideList),
    lightMaterials: new Texture2D(new Float32Array(lightMaterials), gl, lightSideList),
    numObjects: uniform.Int(numObjects),
    uResolution: uniform.Vec2([1000, 900]),
    numLight: uniform.Int(numLight),
    objectTextureSize: objectSideList,
    lightTextureSize: lightSideList,
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

    renderer.setAnimationLoop(animation);
    renderer.start();
    document.querySelector('ion-content').appendChild(renderer.domElement);
    setCanvasFullScreen(renderer.domElement, scene);

    function animation(_time: number) {
      sceneObject.uResolution = uniform.Vec2([window.innerWidth, window.innerHeight]);

      renderer.render(scene, camera);
    }
  }
};
