<script setup lang="ts">
defineOptions({
  name: 'HomePage',
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  // title: app.name,
  title: 'Stacks',
  meta: [
    { name: 'description', content: 'Coming soon.' },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
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