<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { judges } from '../../functions/judges'

const router = useRouter()
const searchQuery = ref('')


const filteredJudges = computed(() => {
  if (!searchQuery.value) return []
  return judges.value.filter(judge => 
    judge.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    judge.court.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    judge.department.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const selectJudge = (judge: any) => {
  router.push(`/review/${judge.id}`)
}
</script>

<template>
  <div class="max-w-3xl mx-auto">
    <div class="text-center">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Write a Review</h2>
      <p class="mt-2 text-sm text-gray-600">
        Search for a judge by name, court, or department to begin your review.
      </p>
    </div>

    <div class="mt-8">
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          class="block w-full rounded-md bg-off-white px-4 py-3 text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600"
          placeholder="Search for a judge..."
        >
        <div v-if="searchQuery && filteredJudges.length > 0" class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <ul class="max-h-60 overflow-auto rounded-md py-1 text-base">
            <li
              v-for="judge in filteredJudges"
              :key="judge.id"
              class="relative cursor-pointer select-none py-2 px-3 hover:bg-gray-100"
              @click="selectJudge(judge)"
            >
              <div class="flex items-center">
                <img :src="judge.image" class="h-10 w-10 rounded-full filter grayscale" :alt="judge.name">
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ judge.name }}</p>
                  <p class="text-sm text-gray-500">{{ judge.court }}</p>
                  <p class="text-xs text-gray-500">{{ judge.department }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div v-else-if="searchQuery && filteredJudges.length === 0" class="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg">
          <div class="py-4 px-3 text-center text-sm text-gray-500">
            No judges found matching your search.
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 