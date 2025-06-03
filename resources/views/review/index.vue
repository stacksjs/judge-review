<template>
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 mt-16">
    <ReviewForm />
  </div>  
</template>

<script setup lang="ts">
defineOptions({
  name: 'ReviewPage',
})

useHead({
  // title: app.name,
  title: 'Review - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Review.' },
  ],
})
</script>
