<template>
  <div class="top-4 border p-4 rounded-sm bg-off-gray">
    <h2 class="text-base font-semibold text-gray-900">Explore Categories</h2>
    <nav class="mt-4 space-y-1">
      <a v-for="category in categories" 
        :key="category.name" 
        @click.prevent="setActiveCategory(category.name)"
        href="#" 
        class="group flex items-center rounded-md px-3 py-2 text-sm font-medium"
        :class="[activeCategory === category.name ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
        <component :is="category.icon" 
          class="mr-3 h-5 w-5 flex-shrink-0"
          :class="[activeCategory === category.name ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" 
          aria-hidden="true" />
        {{ category.name }}
        <span class="ml-auto inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
          {{ category.count }}
        </span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Category {
  name: string;
  count: number;
  current: boolean;
  icon: string;
}

const props = defineProps<{
  categories: Category[];
}>();

const emit = defineEmits(['categoryChanged']);

const activeCategory = ref(props.categories.find(cat => cat.current)?.name || '');

const setActiveCategory = (categoryName: string) => {
  activeCategory.value = categoryName;
  emit('categoryChanged', categoryName);
}
</script> 