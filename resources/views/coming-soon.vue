<script setup>
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  // title: app.name,
  title: 'Coming Soon - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Coming soon.' },
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
  <BenchComingSoon />
</template>

<route lang="yaml">
  meta:
    layout: soon
</route>