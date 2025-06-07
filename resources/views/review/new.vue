<template>
  <div class="min-h-screen bg-off-white py-10">
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <ReviewForm />
    </div>
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
  