<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { judges } from '../../functions/judges'

  const searchQuery = ref('')

  const filteredJudges = computed(() => {
    if (!searchQuery.value) return judges.value
    const query = searchQuery.value.toLowerCase()
    return judges.value.filter(judge => 
      judge.name.toLowerCase().includes(query) ||
      judge.court.toLowerCase().includes(query) ||
      judge.location.toLowerCase().includes(query)
    )
  })
</script> 

<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Search and Filter Section -->
      <div class="mb-8">
        <div class="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div class="w-full sm:w-96">
            <div class="relative">
              <input
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 bg-off-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                placeholder="Search judges..."
                v-model="searchQuery"
              >
              <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <select class="rounded-md border-0 bg-off-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6">
              <option>All Courts</option>
              <option>Supreme Court</option>
              <option>Appellate Court</option>
              <option>District Court</option>
            </select>
            <select class="rounded-md border-0 bg-off-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6">
              <option>All States</option>
              <option>California</option>
              <option>New York</option>
              <option>Texas</option>
              <option>Florida</option>
            </select>
            <select class="rounded-md border-0 bg-off-white py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6">
              <option>Rating</option>
              <option>4+ Stars</option>
              <option>3+ Stars</option>
              <option>2+ Stars</option>
            </select>
          </div>
        </div>
      </div>

      <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="judge in filteredJudges" :key="judge.id" class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg text-center shadow">
          <div class="flex flex-1 flex-col p-8">
            <div class="mx-auto h-32 w-32 overflow-hidden rounded-full">
              <img class="h-full w-full object-cover filter grayscale" :src="judge.image" :alt="judge.name">
            </div>
            <h3 class="mt-6 text-sm font-medium text-gray-900">{{ judge.name }}</h3>
            <dl class="mt-1 flex grow flex-col justify-between">
              <dt class="sr-only">Court</dt>
              <dd class="text-sm text-gray-500">{{ judge.court }}</dd>
              <dt class="sr-only">Location</dt>
              <dd class="mt-3">
                <span class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-600/20">{{ judge.location }}</span>
              </dd>
              <dd class="mt-3">
                <div class="flex items-center justify-center">
                  <div class="flex items-center">
                    <svg v-for="star in 5" :key="star" 
                          :class="[star <= judge.rating ? 'text-yellow-400' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                          viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="ml-2 text-sm text-gray-500">({{ judge.reviewCount }})</span>
                </div>
              </dd>
            </dl>
          </div>
          <div>
            <div class="-mt-px flex divide-x divide-gray-200">
              <div class="flex w-0 flex-1">
                <router-link :to="`judges/${judge.id}/profile`" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                  <svg class="size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  View
                </router-link>
              </div>
              <div class="-ml-px flex w-0 flex-1">
                <router-link :to="`judges/review/${judge.id}`" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                  <svg class="size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
                  </svg>
                  Review
                </router-link>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- Pagination -->
      <div class="mt-10 flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
        <div class="flex flex-1 justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
          <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
        </div>
        <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-gray-700">
              Showing <span class="font-medium">1</span> to <span class="font-medium">8</span> of <span class="font-medium">12</span> results
            </p>
          </div>
          <div>
            <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Previous</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="#" aria-current="page" class="relative z-10 inline-flex items-center bg-gray-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">1</a>
              <a href="#" class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
              <a href="#" class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
              <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span class="sr-only">Next</span>
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
