<template>
  <div
    class="cursor-pointer border border-gray-800 hover:border-gray-200 transition-colors overflow-hidden"
    @click="$emit('click')"
  >
    <div class="h-[250px] relative bg-black overflow-hidden flex items-center justify-center">
      <img
        :src="category.preview"
        :alt="category.title"
        class="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">{{ category.title }}</h3>
      <p class="text-gray-400 text-sm">{{ category.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  emits: ['click']
}
</script>

