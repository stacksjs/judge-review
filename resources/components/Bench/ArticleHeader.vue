<script setup lang="ts">
import type { BenchReviews } from '@/types/bench';

const props = defineProps<{
  review: BenchReviews
}>()

const review = props.review
</script>

<template>
  <header class="relative">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ review.title }}
        </h1>
      </div>

      <!-- Author and Judge info -->
      <div class="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
        <div class="flex items-center">
          <img class="h-12 w-12 rounded-full" :src="review.author.imageUrl" :alt="review.author.name">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline">{{ review.author.name }}</a>
            </p>
            <div class="flex space-x-1 text-sm text-gray-500">
              <time :datetime="review.dateTime">{{ review.date }}</time>
              <span aria-hidden="true">&middot;</span>
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="flex flex-col items-end">
            <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-2">
              {{ review.type }}
            </span>
            <h2 class="text-lg font-semibold text-gray-900">Reviewing</h2>
            <div class="mt-1 flex items-center justify-end">
              <img class="h-10 w-10 rounded-full" :src="review.judge.photo" :alt="review.judge.name">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">{{ review.judge.name }}</p>
                <p class="text-sm text-gray-500">{{ review.judge.court }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>