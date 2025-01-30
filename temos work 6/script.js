import * as THREE from 'three';
import ThreeGlobe from 'three-globe';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 350;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('globe-container').appendChild(renderer.domElement);

// Create Globe
const globe = new ThreeGlobe()
  .globeImageUrl('//unpkg.com/three-globe/example/img/earth-dark.jpg')
  .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');

// Add Globe to the scene
scene.add(globe);

// Add light to the scene
const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.001; // Rotate the globe slowly
  renderer.render(scene, camera);
}
animate();

// Handle Resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
