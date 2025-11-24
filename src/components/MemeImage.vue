<template>
  <div class="relative group h-full w-full">
    <img
      :src="imagePath"
      :alt="alt"
      class="w-full h-full object-contain cursor-pointer"
      @click="$emit('click')"
    />
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-200 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
      <button
        @click.stop="copyToClipboard"
        class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors font-semibold"
        title="Copy to clipboard"
      >
        📋
      </button>
      <button
        @click.stop="downloadImage"
        class="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-colors font-semibold"
        title="Download image"
      >
        ⬇️
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemeImage',
  props: {
    imagePath: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: 'Meme'
    }
  },
  emits: ['click'],
  methods: {
    async copyToClipboard() {
      try {
        // Check if the Clipboard API is supported
        if (!navigator.clipboard || !window.ClipboardItem) {
          this.showMessage('❌ Your browser doesn\'t support image copying. Try downloading instead.');
          return;
        }

        this.showMessage('📋 Copying image...');

        // Fetch the image
        const response = await fetch(this.imagePath);
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        let blob = await response.blob();

        // Convert to PNG if needed for better compatibility
        if (!blob.type || !blob.type.startsWith('image/')) {
          throw new Error('Invalid image type');
        }

        // For better compatibility, convert to PNG using canvas
        const img = new Image();
        img.crossOrigin = 'anonymous';

        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
          img.src = this.imagePath;
        });

        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        // Convert canvas to blob
        blob = await new Promise(resolve => {
          canvas.toBlob(resolve, 'image/png');
        });

        // Copy to clipboard
        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob
          })
        ]);

        this.showMessage('✅ Meme copied! You can now paste it anywhere.');
      } catch (err) {
        console.error('Failed to copy image:', err);
        this.showMessage('❌ Copy failed. Make sure you\'re on localhost or HTTPS. Try downloading instead.');
      }
    },
    downloadImage() {
      const link = document.createElement('a');
      link.href = this.imagePath;
      link.download = this.imagePath.split('/').pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.showMessage('⬇️ Download started!');
    },
    showMessage(message) {
      // Create a toast notification instead of alert
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: white;
        color: black;
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.transition = 'opacity 0.3s';
        toast.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(toast);
        }, 300);
      }, 2000);
    }
  }
}
</script>

