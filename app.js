import * as THREE from './build/three.module.js';
import Stats from './jsm/libs/stats.module.js';

import { GUI } from './jsm/libs/dat.gui.module.js';
import { OrbitControls } from './jsm/controls/OrbitControls.js';
import { MarchingCubes } from './jsm/objects/MarchingCubes.js';
import { ToonShader1, ToonShader2, ToonShaderHatching, ToonShaderDotted } from './jsm/shaders/ToonShader.js';

var container, stats;

var camera, scene, renderer;

var materials, current_material;

var light, pointLight, ambientLight;

var pointLight2

var effect, resolution;

var effectController;

var time = 0;
var clock = new THREE.Clock();

// animate();

scene = new THREE.Scene();
scene.background = null;
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 2000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animateOnScroll() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}

document.body.onscroll = () => {
    animateOnScroll()
    console.log(document.body.offsetTop)
}

var text2 = document.createElement('div');
text2.style.position = 'absolute';
//text2.style.zIndex = 1;    // if you still don't see the label, try uncommenting this
text2.style.width = 100;
text2.style.height = 100;
text2.style.backgroundColor = "blue";
text2.innerHTML = "hi there!";
text2.style.top = 200 + 'px';
text2.style.left = 200 + 'px';
document.body.appendChild(text2);

function animate() {

    requestAnimationFrame( animate );

    render();
    //stats.update();
}