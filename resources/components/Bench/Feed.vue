<template>
  <div class="p-4">
    <div class="flex items-start space-x-4">
      <router-link :to="`/profile/${review.author.id}`" class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" :src="review.author.imageUrl" :alt="review.author.name" />
      </router-link>
      <div class="min-w-0 flex-1">
        <div class="flex items-center justify-between">
          <p class="text-sm font-medium text-gray-900">
            <router-link :to="`/profile/${review.author.id}`" class="hover:underline">
              {{ review.author.name }}
            </router-link>
          </p>
          <p class="text-sm text-gray-500">
            <time :datetime="review.dateTime">{{ review.date }}</time>
          </p>
        </div>
        
        <!-- Star Rating -->
        <div class="mt-1 flex items-center">
          <div class="flex items-center">
            <template v-for="star in 5" :key="star">
              <svg 
                class="h-5 w-5" 
                :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </template>
          </div>
          <span class="ml-2 text-sm text-gray-500">{{ review.rating }}</span>
        </div>

        <!-- Review Title -->
        <h3 class="mt-2 text-lg font-semibold text-gray-900">{{ review.title }}</h3>

        <!-- Review Content with Read More -->
        <div class="mt-2">
          <p class="text-sm text-gray-700" :class="{ 'line-clamp-3': !isExpanded }">
            {{ review.content }}
          </p>
          <button 
            v-if="review.content.length > 200" 
            @click="isExpanded = !isExpanded"
            class="mt-1 text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            {{ isExpanded ? 'Show less' : 'Read more' }}
          </button>
        </div>

        <!-- Review Actions -->
        <div class="mt-4 flex items-center space-x-4">
          <button type="button" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <svg class="mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
            </svg>
            {{ review.likes }}
          </button>
          <button type="button" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
            <svg class="mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 01-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 01-1.33 0l-1.713-3.293a.783.783 0 00-.642-.413 41.108 41.108 0 01-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902z" clip-rule="evenodd" />
            </svg>
            {{ review.comments }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { BenchReviews } from '@/types/bench';

defineProps<{
  review: BenchReviews;
}>();

const isExpanded = ref(false);
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 