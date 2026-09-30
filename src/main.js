import * as THREE from 'three';
import { SceneManager } from './scene/sceneManager.js';
import { UIController } from './ui/uiController.js';
import { medicalAudio } from './audio/audioSynth.js';

// Application Bootstrap for MedTutor 3D
window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (!container) {
    console.error('Canvas container not found');
    return;
  }

  // 1. Initialize 3D Scene
  const sceneManager = new SceneManager(container);

  // 2. Initialize UI Controller
  const uiController = new UIController(sceneManager);

  // 3. Render Animation Loop (60 FPS)
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const delta = Math.min(clock.getDelta(), 0.1); // clamp delta
    sceneManager.update(delta);
  }

  animate();

  // 4. Initial User Audio Unlock Listener (Browsers require user click to unlock AudioContext)
  const unlockAudio = () => {
    medicalAudio.ensureContext();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);

  // Log platform readiness
  console.log('🩺 MedTutor 3D Platform initialized successfully.');
});
