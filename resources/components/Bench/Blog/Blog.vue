<script setup lang="ts">
import type { BlogPost } from '@/types/bench';
import { computed } from 'vue';

const props = defineProps<{
  post: BlogPost
}>()

const post = props.post

defineOptions({
  name: 'BlogDetailPage',
})

useHead({
  title: `${post.title} - The Chamber of Secrets`,
  meta: [
    { name: 'description', content: post.content.substring(0, 160) },
  ],
})

const shareUrl = computed(() => {
  return window.location.href
})

const sharePost = () => {
  if (navigator.share) {
    navigator.share({
      title: post.title,
      text: post.content.substring(0, 160),
      url: shareUrl.value,
    })
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(shareUrl.value)
    // You might want to add a toast notification here
  }
}
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-32">
    <div class="mx-auto mt-6 text-gray-500">
      <div class="blog-content relative">
        <div class="text-lg text-gray-700 space-y-6 whitespace-pre-line" v-html="post.content"></div>
      </div>

      <!-- Article footer -->
      <div class="mt-16 border-t border-gray-200 pt-8">
        <div class="flex items-center justify-end">
          <button 
            @click="sharePost"
            class="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template> 