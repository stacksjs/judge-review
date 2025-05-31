<template>
  <div class="space-y-6">
    <div v-for="review in reviews" :key="review.id" class="rounded-lg bg-white shadow">
      <Feed :review="review" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BenchReviews } from '@/types/bench'

defineProps<{
  reviews: BenchReviews[]
}>();
</script> 