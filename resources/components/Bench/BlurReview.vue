<script setup lang="ts">
  const props = defineProps<{
    color?: 'white' | 'off-white'
  }>()

  const color = props.color || 'off-white'
</script>

<template>
  <div v-if="color === 'off-white'" class="abl abm bh m ee abn" style="background: linear-gradient(rgba(249, 247, 241, 0), rgb(249, 247, 241))"></div>
  <div v-else class="abl abm bh m ee abn" style="background: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))"></div>
</template>

<style scoped>
  .abl {
    margin-top: -240px;
  }
  .abm {
    height: 250px;
  }
  .bh {
    width: 100%;
  }
  .ee {
    position: relative;
  }
</style>