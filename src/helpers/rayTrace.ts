import * as Scene from '../engine/scene';
import { WebGLRenderer } from '../engine/renderer';
import { VertexBufferObject, setCanvasFullScreen } from '../engine/glUtils';
import Loader from '../engine/loader';
import { screen_quad } from '../engine/mesh';
import { ShaderManager } from '../engine/shader';

export const makeDivideCurve = () => {
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
    camera.position = new Float32Array([0, 10, 80]);

    const positionVbo = new VertexBufferObject(screen_quad(), gl);

    mesh = new Scene.SimpleMesh({ position: positionVbo });
    material = new Scene.Material(raytraceShader, {}, [mesh]);

    scene = new Scene.Graph();

    scene.append(material);

    renderer.setAnimationLoop(animation);
    renderer.start();
    document.querySelector('ion-content').appendChild(renderer.domElement);
    setCanvasFullScreen(renderer.domElement, scene);
  }

  function animation(_time: number) {
    renderer.render(scene, camera);
  }
};
