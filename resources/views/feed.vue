<script setup lang="ts">
import { categories, reviews, trendingJudges, recentActivity } from '../functions/sample'

defineOptions({
  name: 'FeedPage',
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  // title: app.name,
  title: 'Feed - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Feed.' },
  ],
})
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-6">
        <!-- Left Sidebar - Case Categories -->
        <div class="hidden lg:block lg:col-span-2 space-y-6">
          <CategoriesList :categories="categories" />
          <LeftSidebar :trending-judges="trendingJudges" :recent-activity="recentActivity" />
        </div>

        <!-- Main Feed -->
        <div class="col-span-1 lg:col-span-4">
          <ReviewsFeed :reviews="reviews" />
        </div>
      </div>
    </div>
  </div>
</template>

