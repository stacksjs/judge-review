<script setup lang="ts">
import { blogPosts } from '../../functions/sample'

const { id } = useRoute().params

const post = blogPosts.value.find((post) => post.id === parseInt(id))
</script>

<template>
  <BlogHeader :post="post" />
  <Blog :post="post" />
</template>