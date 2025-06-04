<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  // title: app.name,
  title: 'The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Coming soon.' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
    },
  ],
})

</script>

<template>

  <main>
    <HeroSection />
    <PricingSection />
    <TestimonialsSection />
  </main>

</template>