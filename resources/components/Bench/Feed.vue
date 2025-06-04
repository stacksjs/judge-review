<template>
  <div class="sm:rounded-lg border">
    <div class="px-4 py-5 sm:p-6">
      <!-- Reviewer -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link :to="`/profile/${review.author.id}`" class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" :src="review.author.imageUrl" :alt="review.author.name" />
          </router-link>
          <div class="ml-2">
            <p class="text-sm font-medium text-gray-900">
              <router-link :to="`/profile/${review.author.id}`" class="hover:underline">
                {{ review.author.name }}
              </router-link>
            </p>
            <p class="text-xs text-gray-500">reviewed</p>
          </div>
        </div>
        <span class="text-sm text-gray-600">{{ review.date }}</span>
      </div>

      <!-- Judge Name and Rating -->
      <div class="mt-2 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <router-link :to="`/judges/${review.judge.id}/profile`" class="text-sm font-bold text-gray-900 hover:underline">
            {{ review.judge.name }}
          </router-link>
        </div>
        <div class="flex items-center">
          <svg v-for="star in 5" :key="star" 
            class="h-5 w-5" 
            :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      <!-- Review Title -->
      <div class="mt-3">
        <h3 class="text-base font-semibold text-gray-900">{{ review.title }}</h3>
      </div>

      <!-- Review Content -->
      <div class="mt-2">
        <div class="relative">
          <p class="text-sm text-gray-700 line-clamp-4">{{ review.content }}</p>
          <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div class="mt-2">
          <router-link 
            :to="`/article/${review.id}`"
            class="inline-block text-xs text-gray-600 hover:text-gray-500 hover:underline"
          >
            Read more
          </router-link>
        </div>
      </div>

      <!-- Actions and Status -->
      <div class="mt-4 flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <button 
            type="button" 
            @click="toggleLike"
            class="inline-flex items-center transition ease-in-out duration-150 text-sm"
            :class="isLiked ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'"
          >
            <svg 
              class="mr-1.5 h-5 w-5 transition-colors" 
              :class="isLiked ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-600'"
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
            </svg>
            <span :class="isLiked ? 'text-blue-600' : 'group-hover:text-gray-600'">
              {{ review.likes }}
            </span>
          </button>
        </div>
        <div class="flex items-center space-x-2">
          <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            {{ review.type }}
          </span>
          <span class="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
            {{ review.status }}
          </span>
        </div>
      </div>
    </div>

    <!-- Pricing Modal -->
    <PricingModal 
      :is-open="showPricingModal"
      @close-modal="showPricingModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BenchReviews } from '@/types/bench'
import PricingModal from '../Modal/PricingModal.vue'

defineProps<{
  review: BenchReviews
}>();

const showPricingModal = ref(false)
const isLiked = ref(false)

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>

<style scoped>
.line-clamp-4 {
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 