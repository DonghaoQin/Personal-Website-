<template>
  <div class="about-me-container" ref="container">
    <canvas ref="threeCanvas"></canvas>

    <!-- Loading screen -->
    <transition name="fade-slow">
      <div v-if="isLoading" class="loading-screen">
        <div class="loading-content">
          <div class="spinner"></div>
          <h2>{{ $t('loading.title') || 'Loading 3D Model' }}</h2>
          <div class="progress-container">
            <div class="progress-track">
              <div class="progress-fill" :style="{ width: loadingProgress + '%' }"></div>
            </div>
            <p class="progress-text">{{ loadingProgress }}%</p>
          </div>
          <p class="loading-hint">{{ $t('loading.hint') || 'This may take a moment...' }}</p>
        </div>
      </div>
    </transition>

    <!-- Info panels that appear at different scroll positions -->
    <transition name="fade">
      <div v-if="currentSection >= 0 && !isLoading" class="info-panel" :class="'section-' + currentSection">
        <div class="panel-content">
          <h2>{{ $t('aboutMe.sections[' + currentSection + '].title') }}</h2>
          <p>{{ $t('aboutMe.sections[' + currentSection + '].content') }}</p>
        </div>
      </div>
    </transition>

    <!-- Scroll progress indicator -->
    <div v-if="!isLoading" class="scroll-progress">
      <div class="progress-bar" :style="{ height: scrollProgress + '%' }"></div>
    </div>
  </div>
</template>

<script>
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

export default {
  name: 'AboutMe',
  data() {
    return {
      currentSection: -1,
      scrollProgress: 0,
      isLoading: true,
      loadingProgress: 0,
      isDestroyed: false
    }
  },
  // Store Three.js objects outside of Vue's reactivity system
  created() {
    this.three = {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
      mixer: null,
      animations: [],
      clock: null
    }
  },
  mounted() {
    console.log('AboutMe component mounted')
    try {
      this.initThree()
      console.log('Three.js initialized')
      this.loadModel()
      console.log('Model loading started')
      this.animate()
      console.log('Animation loop started')
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
    } catch (error) {
      console.error('Error in mounted:', error)
    }
  },
  beforeUnmount() {
    this.isDestroyed = true

    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)

    // Clean up Three.js resources
    if (this.three.mixer) {
      this.three.mixer.stopAllAction()
    }

    if (this.three.model && this.three.scene) {
      this.three.scene.remove(this.three.model)
    }

    if (this.three.renderer) {
      this.three.renderer.dispose()
      this.three.renderer.forceContextLoss()
    }
  },
  methods: {
    initThree() {
      // Initialize clock first (needed by animate loop)
      this.three.clock = new THREE.Clock()

      // Create scene
      this.three.scene = new THREE.Scene()
      this.three.scene.background = new THREE.Color(0xffffff)

      // Create camera
      this.three.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      this.three.camera.position.set(0, 2.5, 3)
      this.three.camera.lookAt(0, 2.5, 0)

      // Create renderer
      const canvas = this.$refs.threeCanvas
      this.three.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
      })
      this.three.renderer.setSize(window.innerWidth, window.innerHeight)
      this.three.renderer.setPixelRatio(window.devicePixelRatio)
      this.three.renderer.shadowMap.enabled = true
      this.three.renderer.shadowMap.type = THREE.PCFSoftShadowMap

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      this.three.scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(5, 10, 7.5)
      directionalLight.castShadow = true
      directionalLight.shadow.camera.near = 0.1
      directionalLight.shadow.camera.far = 50
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      this.three.scene.add(directionalLight)

      const fillLight = new THREE.DirectionalLight(0x4444ff, 0.3)
      fillLight.position.set(-5, 0, -5)
      this.three.scene.add(fillLight)

      const backLight = new THREE.DirectionalLight(0xffffff, 0.5)
      backLight.position.set(0, 5, -5)
      this.three.scene.add(backLight)
    },

    loadModel() {
      // TEST MODE: Set to true to use a simple cube instead of GLB model
      const TEST_MODE = false
      // DISABLE_ANIMATIONS: Set to true to skip loading animations
      const DISABLE_ANIMATIONS = true
      // USE_PLACEHOLDER: Use a stylized humanoid shape as placeholder
      const USE_PLACEHOLDER = false

      if (TEST_MODE) {
        // Create a simple test cube
        const geometry = new THREE.BoxGeometry(1, 2, 1)
        const material = new THREE.MeshStandardMaterial({ color: 0x667eea })
        this.three.model = new THREE.Mesh(geometry, material)
        this.three.model.castShadow = true
        this.three.model.receiveShadow = true
        this.three.scene.add(this.three.model)

        this.loadingProgress = 100
        setTimeout(() => {
          this.isLoading = false
        }, 500)
        return
      }

      if (USE_PLACEHOLDER) {
        console.log('Creating placeholder model')

        // Create a simple humanoid placeholder
        this.three.model = new THREE.Group()

        // Head
        const headGeo = new THREE.SphereGeometry(0.25, 32, 32)
        const material = new THREE.MeshStandardMaterial({
          color: 0x667eea,
          metalness: 0.3,
          roughness: 0.4
        })
        const head = new THREE.Mesh(headGeo, material)
        head.position.y = 1.5
        head.castShadow = true
        this.three.model.add(head)

        // Body
        const bodyGeo = new THREE.CylinderGeometry(0.3, 0.35, 0.8, 32)
        const body = new THREE.Mesh(bodyGeo, material)
        body.position.y = 0.9
        body.castShadow = true
        this.three.model.add(body)

        // Arms
        const armGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.7, 16)
        const leftArm = new THREE.Mesh(armGeo, material)
        leftArm.position.set(-0.4, 1.1, 0)
        leftArm.rotation.z = 0.3
        leftArm.castShadow = true
        this.three.model.add(leftArm)

        const rightArm = new THREE.Mesh(armGeo, material)
        rightArm.position.set(0.4, 1.1, 0)
        rightArm.rotation.z = -0.3
        rightArm.castShadow = true
        this.three.model.add(rightArm)

        // Legs
        const legGeo = new THREE.CylinderGeometry(0.1, 0.09, 0.9, 16)
        const leftLeg = new THREE.Mesh(legGeo, material)
        leftLeg.position.set(-0.15, 0.05, 0)
        leftLeg.castShadow = true
        this.three.model.add(leftLeg)

        const rightLeg = new THREE.Mesh(legGeo, material)
        rightLeg.position.set(0.15, 0.05, 0)
        rightLeg.castShadow = true
        this.three.model.add(rightLeg)

        this.three.scene.add(this.three.model)
        console.log('Placeholder model added to scene')
        console.log('Camera position:', this.three.camera.position)
        console.log('Model children:', this.three.model.children.length)

        this.loadingProgress = 100
        setTimeout(() => {
          this.isLoading = false
          console.log('Loading screen hidden')
        }, 500)
        return
      }

      // Setup DRACO loader for compressed models
      const dracoLoader = new DRACOLoader()
      dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/')
      dracoLoader.setDecoderConfig({ type: 'js' })

      const loader = new GLTFLoader()
      loader.setDRACOLoader(dracoLoader)

      loader.load(
        '/models/aboutme.glb',
        (gltf) => {
          this.three.model = gltf.scene

          // Scale the model to 3x
          this.three.model.scale.set(3, 3, 3)

          // Center the model
          const box = new THREE.Box3().setFromObject(this.three.model)
          const center = box.getCenter(new THREE.Vector3())
          this.three.model.position.sub(center)
          this.three.model.position.y = 0

          // Update matrix after positioning
          this.three.model.updateMatrix()
          this.three.model.updateMatrixWorld(true)

          // Enable shadows and configure matrices
          this.three.model.traverse((node) => {
            if (node.isMesh) {
              node.castShadow = true
              node.receiveShadow = true
              // Ensure matrix updates are working properly
              node.matrixAutoUpdate = true
              node.updateMatrix()
              node.updateMatrixWorld(true)
            }
          })

          // Ensure model matrix auto-update is enabled
          this.three.model.matrixAutoUpdate = true

          // Add to scene after all transformations
          this.three.scene.add(this.three.model)

          // Load animations if available (only if not disabled)
          if (!DISABLE_ANIMATIONS && gltf.animations && gltf.animations.length > 0) {
            this.three.mixer = new THREE.AnimationMixer(this.three.model)
            this.three.animations = gltf.animations

            // Play the first animation by default
            if (this.three.animations[0]) {
              const action = this.three.mixer.clipAction(this.three.animations[0])
              action.play()
            }
            console.log('Loaded animations:', this.three.animations.length)
          } else {
            console.log('Animations disabled or not available')
          }

          console.log('Model loaded successfully')

          // Hide loading screen
          this.loadingProgress = 100
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        },
        (progress) => {
          if (progress.lengthComputable) {
            const percent = Math.round((progress.loaded / progress.total) * 100)
            this.loadingProgress = Math.min(percent, 99) // Keep at 99% until fully loaded
            console.log(`Loading model: ${percent}%`)
          }
        },
        (error) => {
          console.error('Error loading model:', error)
          this.isLoading = false
        }
      )
    },

    handleScroll() {
      // Don't handle scroll if still loading
      if (this.isLoading || !this.$refs.container) return

      const container = this.$refs.container
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = container.scrollHeight - window.innerHeight

      if (scrollHeight <= 0) return

      const scrollPercent = (scrollTop / scrollHeight) * 100

      this.scrollProgress = Math.min(scrollPercent, 100)

      // Define 5 scroll trigger points (20%, 40%, 60%, 80%, 100%)
      const triggers = [0, 20, 40, 60, 80]
      let newSection = -1

      for (let i = 0; i < triggers.length; i++) {
        if (scrollPercent >= triggers[i]) {
          newSection = i
        }
      }

      // Trigger animation change when entering new section
      if (newSection !== this.currentSection && newSection >= 0) {
        this.currentSection = newSection
        this.changeAnimation(newSection)
      }

      // Update camera rotation based on scroll
      if (this.three.camera && this.three.model) {
        // Rotate camera around the model from top to bottom
        const angle = (scrollPercent / 100) * Math.PI * 0.7 // 0 to ~126 degrees
        const radius = 3

        // When angle = 0:
        // x = sin(0) * 3 = 0
        // z = cos(0) * 3 = 3
        // This matches initial position (0, ?, 3)

        // Camera moves from looking at head (top) to feet (bottom)
        this.three.camera.position.x = Math.sin(angle) * radius
        this.three.camera.position.y = 2.5 - (scrollPercent / 100) * 2.5 // Start at 2.5, end at 0
        this.three.camera.position.z = Math.cos(angle) * radius

        // Look at different heights based on scroll
        const lookAtY = 2.5 - (scrollPercent / 100) * 2.5 // From head (2.5) to feet (0)
        this.three.camera.lookAt(0, lookAtY, 0)
      }
    },

    changeAnimation(sectionIndex) {
      if (!this.three.mixer || !this.three.animations.length) return

      // Stop all current animations
      this.three.mixer.stopAllAction()

      // Play animation for this section (if available)
      if (this.three.animations[sectionIndex]) {
        const action = this.three.mixer.clipAction(this.three.animations[sectionIndex])
        action.reset()
        action.fadeIn(0.5)
        action.play()
      }
    },

    handleResize() {
      if (this.three.camera && this.three.renderer) {
        this.three.camera.aspect = window.innerWidth / window.innerHeight
        this.three.camera.updateProjectionMatrix()
        this.three.renderer.setSize(window.innerWidth, window.innerHeight)
      }
    },

    animate() {
      // Stop animation loop if component is destroyed
      if (this.isDestroyed) return

      requestAnimationFrame(this.animate)

      // Safety check - don't render if component is unmounting or essential objects are missing
      if (!this.three.renderer || !this.three.scene || !this.three.camera) return

      const delta = this.three.clock.getDelta()

      if (this.three.mixer) {
        this.three.mixer.update(delta)
      }

      // Force update all matrices in the scene
      this.three.scene.updateMatrixWorld(true)

      try {
        this.three.renderer.render(this.three.scene, this.three.camera)
      } catch (error) {
        // Silently ignore render errors during loading/unloading
        if (!this.isLoading && !this.isDestroyed) {
          console.error('Render error:', error)
        }
      }
    }
  }
}
</script>

<style scoped>
.about-me-container {
  position: relative;
  width: 100%;
  height: 500vh; /* 5x viewport height for scrolling */
  background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
}

canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
}

.info-panel {
  position: fixed;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  max-width: 400px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.panel-content h2 {
  color: #fff;
  font-size: 28px;
  margin-bottom: 15px;
  font-weight: 600;
}

.panel-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  line-height: 1.6;
}

.scroll-progress {
  position: fixed;
  top: 0;
  right: 0;
  width: 4px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  z-index: 100;
}

.progress-bar {
  width: 100%;
  background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
  transition: height 0.1s ease;
  border-radius: 2px;
}

/* Section-specific styles */
.section-0 .panel-content { border-left: 4px solid #667eea; }
.section-1 .panel-content { border-left: 4px solid #f093fb; }
.section-2 .panel-content { border-left: 4px solid #4facfe; }
.section-3 .panel-content { border-left: 4px solid #43e97b; }
.section-4 .panel-content { border-left: 4px solid #fa709a; }

/* Fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-50%) translateX(50px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-50%) translateX(-50px);
}

/* Loading screen */
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loading-content {
  text-align: center;
  max-width: 500px;
  padding: 40px;
}

.spinner {
  width: 60px;
  height: 60px;
  margin: 0 auto 30px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading-content h2 {
  color: #fff;
  font-size: 28px;
  margin-bottom: 30px;
  font-weight: 600;
}

.progress-container {
  margin: 20px 0;
}

.progress-track {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
}

.progress-text {
  color: #667eea;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.loading-hint {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-top: 15px;
}

/* Slow fade transition for loading screen */
.fade-slow-enter-active, .fade-slow-leave-active {
  transition: opacity 0.8s ease;
}

.fade-slow-enter-from, .fade-slow-leave-to {
  opacity: 0;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .info-panel {
    right: 50%;
    transform: translate(50%, -50%);
    max-width: 90%;
    padding: 20px;
  }

  .panel-content h2 {
    font-size: 22px;
  }

  .panel-content p {
    font-size: 14px;
  }

  .loading-content {
    padding: 20px;
  }

  .loading-content h2 {
    font-size: 22px;
  }

  .progress-text {
    font-size: 20px;
  }
}
</style>
