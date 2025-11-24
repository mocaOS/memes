<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-95 overflow-y-auto"
      @click.self="close"
    >
      <div class="w-full max-w-7xl p-4 md:p-8">
        <!-- Header -->
        <div class="sticky top-0 bg-black z-10 pb-4 mb-4 border-b border-gray-800">
          <div class="flex justify-between items-center">
            <div>
              <h2 class="text-3xl font-bold mb-2">{{ category.title }}</h2>
              <p class="text-gray-400">{{ category.description }}</p>
            </div>
            <button
              @click="close"
              class="text-white hover:text-gray-400 text-4xl leading-none transition-colors"
              title="Close"
            >
              ×
            </button>
          </div>
        </div>

        <!-- Memes Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <MemeImage
            v-for="(meme, index) in memes"
            :key="index"
            :image-path="meme"
            :alt="`${category.title} meme ${index + 1}`"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import MemeImage from './MemeImage.vue'

export default {
  name: 'MemeModal',
  components: {
    MemeImage
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    category: {
      type: Object,
      default: null
    },
    memes: {
      type: Array,
      default: () => []
    }
  },
  emits: ['close'],
  methods: {
    close() {
      this.$emit('close')
    },
    handleKeydown(e) {
      if (e.key === 'Escape') {
        this.close()
      }
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('keydown', this.handleKeydown)
      } else {
        document.body.style.overflow = ''
        document.removeEventListener('keydown', this.handleKeydown)
      }
    }
  },
  mounted() {
    if (this.isOpen) {
      document.addEventListener('keydown', this.handleKeydown)
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

