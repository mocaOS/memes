<template>
  <div class="min-h-screen bg-black text-white p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <header class="mb-6 text-center">
          <svg class="moca-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" viewBox="0 0 2.063 0.578"><g fill="none" transform="scale(.01563)"><g fill="currentColor" clip-path="url(#iconifyVue1)"><path d="M55.304 12.54c2.03.419 3.425 1.408 3.118 2.21-.307.8-2.202 1.11-4.231.69-2.03-.42-3.426-1.41-3.119-2.21.308-.801 2.202-1.11 4.232-.69Zm.379 9.329c.307-.801-1.089-1.79-3.118-2.21-2.03-.42-3.924-.11-4.232.69-.307.801 1.09 1.79 3.119 2.21 2.03.42 3.924.11 4.231-.69Z"></path><path d="M62.475 28.138c2.559-2.2 4.174-4.771 5.172-7.292.931-2.421 1.383-4.651 1.26-6.931-.123-1.93-.603-3.808-1.998-5.485-.972-1.175-2.258-2.07-4.106-2.441-.739-.15-1.341.11-1.546.613-.206.512.082.984.793 1.155 1.41.341 2.286 1.075 2.943 1.999 1.067 1.517 1.395 3.164 1.395 4.852 0 3.525-1.176 6.83-3.53 9.894-1.327 1.738-2.97 3.285-5.365 4.32-1.108.471-2.299.713-3.599.481a2.01 2.01 0 00-.547-.02c-.589.07-1.04.432-1.081.864-.041.462.342.854 1.04.985 1.41.27 2.805.17 4.16-.221 2.012-.583 3.627-1.577 5.009-2.773Z"></path><path fill-rule="evenodd" d="M53.32 3.97c-3.613 2.863-6.597 7.011-8.39 11.682-1.792 4.671-2.203 9.352-1.15 13.18 1.164 4.258 4.01 7.06 8.006 7.885 3.997.823 8.417-.472 12.44-3.657 3.613-2.863 6.597-7.011 8.39-11.682 1.792-4.671 2.203-9.342 1.149-13.18-1.163-4.258-4.01-7.06-8.006-7.885-3.996-.833-8.416.463-12.44 3.657Zm11.767-1.92C58.766.745 50.801 7.044 47.312 16.124v.01l-.041.11a3.9 3.9 0 01-.042.111c-3.352 9-1.04 17.288 5.242 18.584 6.322 1.306 14.287-4.993 17.777-14.073v-.01l.04-.111a5.34 5.34 0 01.042-.11c3.353-8.99 1.026-17.288-5.242-18.584Z" clip-rule="evenodd"></path><path d="M99.575 3.79V1.428h-3.216V.263h-6.46V1.44h-3.216v1.185H85.07V3.8h-1.615v1.185h-1.601v2.361H80.25V8.53h-1.614v2.36h-1.615v3.557H75.42v4.741h-1.588v9.473h1.601v3.545h1.615v2.371h1.601v1.185h3.23v1.155h4.845v-1.175h3.216v-1.175h1.6v-1.185h1.615v-1.176h1.601v-2.36H93.13v1.195h-1.601v1.175h-1.601v1.166h-6.46v-1.176h-1.614v-2.37H80.28V16.797h1.6v-4.73h1.602V8.52h1.615V6.15h1.601V4.964h1.615V3.79h1.615V2.624h6.418v2.36h-1.574v4.742h1.601v1.155h3.23V9.706h1.574V3.779c-.534.01-1.054.01-1.601.01Z"></path><path d="M96.345 27.515h-1.587v2.35h1.587v-2.35Zm19.337 3.526v2.37h-1.601v1.176h-1.615v1.185h-3.216v1.176h-3.216v-1.166h-1.615v-1.175h-1.615v-1.185h-1.601V19.198h1.574v-4.731h1.615v-2.37h1.601V9.735h1.601v-2.37h1.615V5.004h1.615V3.819h1.601V2.634h1.615V1.459h3.216V.283h6.459v2.351l.014-.01h-1.642V1.459h-3.216v1.185h-1.615v1.175h-1.601v1.176h-1.615v2.37h-1.601v2.37h-1.615v3.547h-1.615v3.556h-1.601v5.926h-1.588v7.102h1.615v2.35h6.446v-1.165c.561 0 1.081 0 1.601-.01Z"></path><path d="M128.587 31.041h-1.615v1.175h-1.587V23.94H127v-8.297h1.601V8.53h1.615v-7.1h1.573V.263h-4.817v2.36h-3.229l.013-.01v13.029h-1.601v4.731h-1.615v3.556h-1.601v2.37h-1.615v2.361h-1.628v2.381l-.014-.01h1.642v-1.195h1.601v-2.35h1.602v9.452h3.229v-1.176h1.615v-1.185h1.601v-1.185h1.588c.013-.794.013-1.577.027-2.35Z"></path><path d="M130.215 28.68h-1.628v2.361l-.014-.01h1.629c0-.803 0-1.577.013-2.35Z"></path><path d="M130.202 28.68h1.601v-1.165h-1.588c0 .402 0 .784-.013 1.166Zm-85.094-1.165h-1.587v2.35h1.587v-2.35Zm-1.588 2.351c-.013-.01-.013 0 0 0Zm-1.628 2.35h1.615v-2.36h-1.615v2.36Z"></path><path d="M38.69 27.485h1.601v-7.102h1.615v-7.111h1.574V1.418h-1.601V.263h-4.845V1.44h-1.6v1.185h-1.616v2.36h-1.601V6.16h-1.615v2.37h-1.601v2.36H27.4v-.01h-.014V1.399h-1.628V.243h-4.845v1.175h-1.601v1.176h-1.601v2.37h-1.615V6.14h-1.615v2.37h-1.6v2.37h-1.616v2.341H9.691V9.675h1.602V2.574h1.587V.234H9.664v1.174H4.82v1.186H1.63l.001 1.185h3.216v1.175H6.42v2.37h-1.6v7.103H3.218v7.112H1.604v7.101H.016v7.092h4.817v-4.741h1.615v-5.917h1.615v-4.74h1.601v-3.557h1.615v-2.36h1.615v-2.37h1.6V9.684h1.602v-2.37h1.615V6.14h1.615V4.974h3.188v5.927h-1.6v7.102h-1.616v8.297h-1.6v7.111H16.11v3.526h4.83v-2.35h1.615V26.29h1.602v-4.741h1.614v-4.732h1.601v-2.36h.014v-.01h1.629v-2.37h1.6V9.705h1.616v-2.36h1.6V6.17h1.616V5.005h3.188v5.916h-1.6v7.102h-1.616v8.297h-1.574v9.482h1.602v1.156h3.23v-1.175h1.6v-1.186h1.588v-2.36h-3.189c.014-1.608.014-3.165.014-4.752Z"></path><path d="M41.879 32.227c.013 0 .013 0 0 0 0-.01.013 0 0 0Z"></path></g><defs><clipPath id="iconifyVue1"><path fill="#fff" d="M0 0h132v37H0z"></path></clipPath></defs></g></svg>
          <h2 class="text-3xl font-bold mb-4">MEME STUDIO</h2>
        </header>

      <!-- Random Meme Section -->
      <div class="mb-16">
        <div class="max-w-3xl mx-auto h-[420px] flex items-center justify-center mb-6" v-if="randomMeme">
          <MemeImage
            :image-path="randomMeme"
            alt="Random meme"
            class="h-full"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            @click="randomizeMeme"
            class="rnd-button"
            title="Click for random meme"
          >
            <svg viewBox="0 0 300 160" xmlns="http://www.w3.org/2000/svg" class="rnd-svg">
              <defs>
                <!-- Monochrome Psychedelic Gradient -->
                <linearGradient id="monoGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
                  <stop offset="25%" style="stop-color:#888888;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#000000;stop-opacity:1" />
                  <stop offset="75%" style="stop-color:#cccccc;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ffffff;stop-opacity:1" />
                </linearGradient>

                <!-- Glossy overlay -->
                <linearGradient id="glossy" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.8" />
                  <stop offset="50%" style="stop-color:#aaaaaa;stop-opacity:0.2" />
                  <stop offset="100%" style="stop-color:#000000;stop-opacity:0.3" />
                </linearGradient>

                <!-- Glow filter -->
                <filter id="glow">
                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              <!-- Swirling energy drop pointing up -->
              <path d="M 150 15 Q 120 25, 90 45 Q 70 60, 65 80 Q 60 95, 70 110 Q 85 125, 110 135 Q 135 142, 150 145 Q 165 142, 190 135 Q 215 125, 230 110 Q 240 95, 235 80 Q 230 60, 210 45 Q 180 25, 150 15 Z"
                    fill="url(#monoGrad)"
                    filter="url(#glow)"
                    class="blob-shape"/>

              <!-- Swirl energy lines -->
              <path d="M 120 50 Q 105 65, 100 85" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4" class="swirl swirl-1"/>
              <path d="M 180 50 Q 195 65, 200 85" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.4" class="swirl swirl-2"/>
              <path d="M 135 70 Q 125 85, 125 100" stroke="#cccccc" stroke-width="1.5" fill="none" opacity="0.3" class="swirl swirl-3"/>
              <path d="M 165 70 Q 175 85, 175 100" stroke="#cccccc" stroke-width="1.5" fill="none" opacity="0.3" class="swirl swirl-4"/>

              <!-- Glossy overlay on blob -->
              <ellipse cx="150" cy="110" rx="90" ry="20" fill="url(#glossy)" opacity="0.5"/>

              <!-- random Text -->
              <text x="150" y="95" font-family="Arial, sans-serif" font-size="32" font-weight="700"
                    fill="#000000" text-anchor="middle" letter-spacing="2" class="rnd-text">
                random
              </text>

              <!-- Sparkle decorations -->
              <circle cx="150" cy="25" r="4" fill="#ffffff" class="sparkle sparkle-1">
                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="85" cy="55" r="3" fill="#cccccc" class="sparkle sparkle-2">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.3s"/>
              </circle>
              <circle cx="215" cy="55" r="3" fill="#ffffff" class="sparkle sparkle-3">
                <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.6s"/>
              </circle>
              <circle cx="110" cy="120" r="2" fill="#aaaaaa" class="sparkle sparkle-4">
                <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.4s"/>
              </circle>
              <circle cx="190" cy="120" r="2" fill="#aaaaaa" class="sparkle sparkle-5">
                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.8s"/>
              </circle>
            </svg>
          </button>
        </div>
      </div>

      <!-- Categories Section -->
      <div>
        <h2 class="text-3xl font-bold mb-8 text-center">browse every meme from any era</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CategoryCard
            v-for="category in categories"
            :key="category.slug"
            :category="category"
            @click="openCategory(category)"
          />
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-16 mb-8 text-center">
        <p class="text-lg">
          Dive into the <a href="https://vibe.museumofcryptoart.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-gray-300 underline transition-colors">Vibe Studio</a> to find lots of other apps and resources around MOCA and Art Decc0s.
        </p>
      </footer>

      <!-- Modal -->
      <MemeModal
        :is-open="modalOpen"
        :category="selectedCategory"
        :memes="categoryMemes"
        @close="closeModal"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import CategoryCard from './components/CategoryCard.vue'
import MemeModal from './components/MemeModal.vue'
import MemeImage from './components/MemeImage.vue'
import categoriesData from './categories.json'
import memesData from './memes-data.json'

export default {
  name: 'App',
  components: {
    CategoryCard,
    MemeModal,
    MemeImage
  },
  setup() {
    const categories = ref(categoriesData)
    const allMemes = ref([])
    const randomMeme = ref(null)
    const modalOpen = ref(false)
    const selectedCategory = ref(null)
    const categoryMemes = ref([])

    // Load all meme paths
    const loadAllMemes = () => {
      const memes = []
      Object.values(memesData).forEach(categoryMemes => {
        memes.push(...categoryMemes)
      })
      allMemes.value = memes
    }

    // Get all memes from a category
    const getMemesByCategory = (category) => {
      return memesData[category.slug] || []
    }

    // Randomize meme
    const randomizeMeme = () => {
      if (allMemes.value.length > 0) {
        const randomIndex = Math.floor(Math.random() * allMemes.value.length)
        randomMeme.value = allMemes.value[randomIndex]
      }
    }

    // Open category modal
    const openCategory = (category) => {
      selectedCategory.value = category
      categoryMemes.value = getMemesByCategory(category)
      modalOpen.value = true
    }

    // Close modal
    const closeModal = () => {
      modalOpen.value = false
      selectedCategory.value = null
      categoryMemes.value = []
    }

    onMounted(() => {
      loadAllMemes()
      randomizeMeme()
    })

    return {
      categories,
      randomMeme,
      modalOpen,
      selectedCategory,
      categoryMemes,
      randomizeMeme,
      openCategory,
      closeModal
    }
  }
}
</script>

<style scoped>
.rnd-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.rnd-button:hover {
  transform: scale(1.15);
  animation: float 1.5s ease-in-out infinite, shake 0.5s ease-in-out infinite;
}

.rnd-button:hover .blob-shape {
  animation: morphBlobFast 0.8s ease-in-out infinite, shiftGradient 2s ease-in-out infinite;
}

.rnd-button:hover .rnd-svg {
  filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.9));
}

.rnd-button:hover .swirl {
  animation: swirlFlowFast 1s ease-in-out infinite;
  opacity: 0.8 !important;
  stroke-width: 3;
}

.rnd-button:hover .sparkle {
  animation: sparkleBurst 0.6s ease-in-out infinite !important;
}

.rnd-button:hover .rnd-text {
  animation: textWiggle 0.3s ease-in-out infinite;
}

.rnd-button:active {
  transform: scale(0.95);
}

.rnd-svg {
  width: 300px;
  height: 160px;
  filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
}

.blob-shape {
  animation: morphBlob 4s ease-in-out infinite, shiftGradient 8s ease-in-out infinite;
  transform-origin: center;
}

.rnd-text {
  animation: pulse 2s ease-in-out infinite;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
               0 0 20px rgba(255, 255, 255, 0.6),
               0 0 30px rgba(255, 255, 255, 0.4);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes morphBlob {
  0%, 100% {
    d: path("M 150 15 Q 120 25, 90 45 Q 70 60, 65 80 Q 60 95, 70 110 Q 85 125, 110 135 Q 135 142, 150 145 Q 165 142, 190 135 Q 215 125, 230 110 Q 240 95, 235 80 Q 230 60, 210 45 Q 180 25, 150 15 Z");
  }
  33% {
    d: path("M 150 18 Q 125 28, 95 48 Q 75 63, 68 82 Q 62 98, 73 112 Q 88 127, 113 137 Q 137 144, 150 147 Q 163 144, 187 137 Q 212 127, 227 112 Q 238 98, 232 82 Q 225 63, 205 48 Q 175 28, 150 18 Z");
  }
  66% {
    d: path("M 150 12 Q 115 23, 88 43 Q 68 58, 63 78 Q 58 93, 68 108 Q 82 123, 108 133 Q 133 140, 150 143 Q 167 140, 192 133 Q 218 123, 232 108 Q 242 93, 237 78 Q 232 58, 212 43 Q 185 23, 150 12 Z");
  }
}

@keyframes shiftGradient {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.85;
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.swirl {
  animation: swirlFlow 3s ease-in-out infinite;
}

.swirl-1 {
  animation-delay: 0s;
}

.swirl-2 {
  animation-delay: 0.5s;
}

.swirl-3 {
  animation-delay: 1s;
}

.swirl-4 {
  animation-delay: 1.5s;
}

@keyframes swirlFlow {
  0%, 100% {
    stroke-dasharray: 50;
    stroke-dashoffset: 0;
    opacity: 0.4;
  }
  50% {
    stroke-dasharray: 50;
    stroke-dashoffset: 100;
    opacity: 0.2;
  }
}

@keyframes swirlFlowFast {
  0% {
    stroke-dasharray: 30;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 30;
    stroke-dashoffset: 150;
  }
}

@keyframes morphBlobFast {
  0% {
    d: path("M 150 15 Q 120 25, 90 45 Q 70 60, 65 80 Q 60 95, 70 110 Q 85 125, 110 135 Q 135 142, 150 145 Q 165 142, 190 135 Q 215 125, 230 110 Q 240 95, 235 80 Q 230 60, 210 45 Q 180 25, 150 15 Z");
  }
  25% {
    d: path("M 150 10 Q 110 20, 85 40 Q 65 58, 62 78 Q 58 90, 75 108 Q 95 123, 120 133 Q 140 140, 150 142 Q 160 140, 180 133 Q 205 123, 225 108 Q 242 90, 238 78 Q 235 58, 215 40 Q 190 20, 150 10 Z");
  }
  50% {
    d: path("M 150 20 Q 130 28, 95 50 Q 73 63, 68 85 Q 63 98, 65 115 Q 78 128, 105 138 Q 132 145, 150 148 Q 168 145, 195 138 Q 222 128, 235 115 Q 237 98, 232 85 Q 227 63, 205 50 Q 170 28, 150 20 Z");
  }
  75% {
    d: path("M 150 8 Q 125 22, 92 42 Q 68 55, 60 75 Q 55 93, 68 112 Q 88 127, 115 137 Q 138 143, 150 146 Q 162 143, 185 137 Q 212 127, 232 112 Q 245 93, 240 75 Q 232 55, 208 42 Q 175 22, 150 8 Z");
  }
  100% {
    d: path("M 150 15 Q 120 25, 90 45 Q 70 60, 65 80 Q 60 95, 70 110 Q 85 125, 110 135 Q 135 142, 150 145 Q 165 142, 190 135 Q 215 125, 230 110 Q 240 95, 235 80 Q 230 60, 210 45 Q 180 25, 150 15 Z");
  }
}

@keyframes shake {
  0%, 100% {
    transform: scale(1.15) rotate(0deg);
  }
  25% {
    transform: scale(1.15) rotate(-2deg);
  }
  50% {
    transform: scale(1.15) rotate(2deg);
  }
  75% {
    transform: scale(1.15) rotate(-1deg);
  }
}

@keyframes sparkleBurst {
  0%, 100% {
    opacity: 0;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(2);
  }
}

@keyframes textWiggle {
  0%, 100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-1px) translateY(1px);
  }
  50% {
    transform: translateX(1px) translateY(-1px);
  }
  75% {
    transform: translateX(-1px) translateY(-1px);
  }
}

/* Responsive sizing */
@media (max-width: 768px) {
  .rnd-svg {
    width: 250px;
    height: 133px;
  }
}

@media (max-width: 480px) {
  .rnd-svg {
    width: 200px;
    height: 107px;
  }
}
</style>

