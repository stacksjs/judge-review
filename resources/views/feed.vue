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
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
        <!-- Left Sidebar - Case Categories -->
        <div class="hidden lg:block lg:col-span-3">
          <CategoriesList :categories="categories" />
        </div>

        <!-- Main Feed -->
        <div class="col-span-1 lg:col-span-6">
          <ReviewsFeed :reviews="reviews" />
        </div>

        <!-- Right Sidebar -->
        <div class="hidden lg:block lg:col-span-3">
          <RightSidebar :trending-judges="trendingJudges" :recent-activity="recentActivity" />
        </div>
      </div>
    </div>
  </div>
</template>

