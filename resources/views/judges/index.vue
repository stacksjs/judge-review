<script setup lang="ts">
defineOptions({
  name: 'JudgesPage',
})

useHead({
  // title: app.name,
  title: 'Judges - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Judges.' },
  ],
})
</script>

<template>
  <div>
    <JudgeDirectory />
  </div>   
</template>
