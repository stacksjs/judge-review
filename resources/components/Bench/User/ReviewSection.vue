<template>
  <div class="mt-8">
    <h2 class="text-lg font-medium text-gray-800">Your Reviews</h2>
    <div class="mt-6 space-y-6">
      <Feed v-for="review in reviews" :key="review.id" :review="review" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { BenchReviews } from '@/types/bench';
import Feed from '../Feed.vue';

defineProps<{
  reviews: BenchReviews[]
}>();
</script>
