<script setup lang="ts">
import type { BlogPost } from '@/types/bench';
import { computed } from 'vue';

const props = defineProps<{
  post: BlogPost
}>()

const post = props.post

// Calculate reading time (assuming average reading speed of 200 words per minute)
const readingTime = computed(() => {
  const words = post.content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
})
</script>

<template>
  <header class="relative">
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {{ post.title }}
        </h1>
      </div>

      <!-- Author and meta info -->
      <div class="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
        <!-- Author info -->
        <div class="flex items-center">
          <img class="h-12 w-12 rounded-full" :src="post.author.imageUrl" :alt="post.author.name">
          <div class="ml-3">
            <p class="text-sm font-medium text-gray-900">
              <a href="#" class="hover:underline">{{ post.author.name }}</a>
            </p>
          </div>
        </div>

        <!-- Reading time and date -->
        <div class="flex items-center space-x-4 text-sm text-gray-500">
          <span>{{ readingTime }}</span>
          <span aria-hidden="true">&middot;</span>
          <time :datetime="post.dateTime">{{ post.date }}</time>
        </div>
      </div>
    </div>
  </header>
</template> 