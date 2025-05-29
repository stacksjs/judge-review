<template>
  <div class="space-y-6">
    <div v-for="review in reviews" :key="review.id" class="rounded-lg bg-white shadow">
      <div class="p-4">
        <div class="flex items-start space-x-4">
          <img class="h-10 w-10 rounded-full" :src="review.author.imageUrl" :alt="review.author.name" />
          <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">{{ review.author.name }}</a>
              </p>
              <p class="text-sm text-gray-500">
                <time :datetime="review.dateTime">{{ review.date }}</time>
              </p>
            </div>
            <p class="mt-2 text-sm text-gray-700">{{ review.content }}</p>
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
    </div>
  </div>
</template>

<script setup lang="ts">
interface Author {
  name: string;
  imageUrl: string;
}

interface Review {
  id: number;
  author: Author;
  content: string;
  date: string;
  dateTime: string;
  likes: number;
  comments: number;
}

defineProps<{
  reviews: Review[];
}>();
</script> 