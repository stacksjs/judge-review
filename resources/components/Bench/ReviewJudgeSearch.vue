<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const isSearching = ref(false)

// Mock data for now - this would come from your API
const judges = ref([
  {
    id: '1',
    name: 'Hon. Sarah Johnson',
    court: 'Superior Court of California',
    department: 'San Francisco County, Department 15',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
  },
  {
    id: '2',
    name: 'Hon. Michael Chen',
    court: 'Superior Court of California',
    department: 'San Francisco County, Department 12',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
])

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
                <img :src="judge.imageUrl" class="h-10 w-10 rounded-full filter grayscale" :alt="judge.name">
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