<script setup lang="ts">
import { Toaster, notification } from '@stacksjs/notification'
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const reviewTitle = ref('')
const reviewContent = ref('')
const rating = ref(0)
const hoverRating = ref(0)
const fairness = ref(0)
const hoverFairness = ref(0)
const knowledge = ref(0)
const hoverKnowledge = ref(0)
const demeanor = ref(0)
const hoverDemeanor = ref(0)
const isAnonymous = ref(false)

interface Judge {
  id: string;
  name: string;
  court: string;
  department: string;
  imageUrl: string;
}

const judge = ref<Judge | null>(null)


async function loadJudge(id: number) {
  judge.value = {
    id: '1',
    name: 'Hon. Sarah Johnson',
    court: 'Superior Court of California',
    department: 'San Francisco County, Department 15',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80'
  }
}

onMounted(async () => {
  const judgeId = route.params.id

  if (judgeId) {
    await loadJudge(judgeId)
  }
})

const getRatingText = (value: number) => {
  switch (value) {
    case 1: return 'Poor'
    case 2: return 'Fair'
    case 3: return 'Good'
    case 4: return 'Very Good'
    case 5: return 'Excellent'
    default: return 'Select a rating'
  }
}

const ratingText = computed(() => getRatingText(hoverRating.value || rating.value))

function handleSubmit() {
  // const reviewData = {
  //   judgeId: judge.value?.id,
  //   title: reviewTitle.value,
  //   content: reviewContent.value,
  //   ratings: {
  //     overall: rating.value,
  //     fairness: fairness.value,
  //     knowledge: knowledge.value,
  //     demeanor: demeanor.value
  //   }
    
  // }
  
  // Send the review data to your backend
  notification('Review Submitted')
  router.push(`/judges/${judge.value?.id}/reviews`)
}

function handleCancel() {
  router.push('/review')
}
</script>

<template>
  <div class="space-y-12 pb-32">
    <ReviewJudgeSearch v-if="!judge" class="mb-48"/>

    <!-- Review Form - Only shown when judge is selected -->
    <div v-else>
      <!-- Review Header -->
      <div class="pb-12">
        <div>
          <div class="text-center mb-8">
            <img class="inline-block h-24 w-24 rounded-full ring-2 ring-white mb-4 filter grayscale" :src="judge.photo" :alt="judge.name" />
            <h3 class="text-lg font-semibold text-gray-800">{{ judge.name }}</h3>
            <p class="text-sm text-gray-600">{{ judge.court }}</p>
            <p class="text-sm text-gray-600">{{ judge.department }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-800">Judge's Performance</h2>
      <p class="mt-1 text-sm/6 text-gray-600">Rate the judge's performance in different aspects.</p>

      <div class="mt-10 space-y-10">
        <!-- Title field -->
        <div class="col-span-full">
          <label for="title" class="block text-sm/6 font-medium text-gray-700">Review Title</label>
          <div class="mt-2">
            <input
              type="text"
              name="title"
              id="title"
              v-model="reviewTitle"
              :disabled="!judge"
              placeholder="Brief summary of your experience"
              class="block w-full rounded-md bg-off-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
          </div>
        </div>

        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <label for="fairness" class="text-sm/6 font-medium text-gray-700">Fairness & Impartiality</label>
            <div class="flex items-center space-x-1 w-64">
              <div class="flex items-center space-x-1">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  type="button"
                  :disabled="!judge"
                  class="text-gray-300 hover:text-yellow-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  :class="{ 'text-yellow-400': star <= (hoverFairness || fairness) }"
                  @click="fairness = star"
                  @mouseenter="hoverFairness = star"
                  @mouseleave="hoverFairness = 0"
                >
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              </div>
              <span class="ml-2 text-sm text-gray-500 w-24">{{ fairness ? getRatingText(fairness) : '' }}</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label for="knowledge" class="text-sm/6 font-medium text-gray-700">Legal Knowledge</label>
            <div class="flex items-center space-x-1 w-64">
              <div class="flex items-center space-x-1">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  type="button"
                  :disabled="!judge"
                  class="text-gray-300 hover:text-yellow-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  :class="{ 'text-yellow-400': star <= (hoverKnowledge || knowledge) }"
                  @click="knowledge = star"
                  @mouseenter="hoverKnowledge = star"
                  @mouseleave="hoverKnowledge = 0"
                >
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              </div>
              <span class="ml-2 text-sm text-gray-500 w-24">{{ knowledge ? getRatingText(knowledge) : '' }}</span>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <label for="demeanor" class="text-sm/6 font-medium text-gray-700">Professional Demeanor</label>
            <div class="flex items-center space-x-1 w-64">
              <div class="flex items-center space-x-1">
                <button 
                  v-for="star in 5" 
                  :key="star"
                  type="button"
                  :disabled="!judge"
                  class="text-gray-300 hover:text-yellow-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  :class="{ 'text-yellow-400': star <= (hoverDemeanor || demeanor) }"
                  @click="demeanor = star"
                  @mouseenter="hoverDemeanor = star"
                  @mouseleave="hoverDemeanor = 0"
                >
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </button>
              </div>
              <span class="ml-2 text-sm text-gray-500 w-24">{{ demeanor ? getRatingText(demeanor) : '' }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="case-number" class="block text-sm/6 font-medium text-gray-700">Case Number (Optional)</label>
          <div class="mt-2">
            <input 
              type="text" 
              name="case-number" 
              id="case-number" 
              :disabled="!judge"
              class="block w-full rounded-md bg-off-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="case-date" class="block text-sm/6 font-medium text-gray-700">Case Date (Optional)</label>
          <div class="mt-2">
            <input 
              type="date" 
              name="case-date" 
              id="case-date" 
              :disabled="!judge"
              class="block w-full rounded-md bg-off-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
          </div>
        </div>

        <div class="col-span-full">
          <label for="role" class="block text-sm/6 font-medium text-gray-700">Your Role in the Case</label>
          <div class="mt-2">
            <select 
              id="role" 
              name="role" 
              :disabled="!judge"
              class="block w-full rounded-md bg-off-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option>Attorney</option>
              <option>Party to the Case</option>
              <option>Court Staff</option>
              <option>Observer</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div class="col-span-full">
          <div class="relative flex items-start">
            <div class="flex h-6 items-center">
              <button
                type="button"
                :disabled="!judge"
                @click="isAnonymous = !isAnonymous"
                :class="[
                  isAnonymous ? 'bg-gray-600' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
                ]"
              >
                <span
                  :class="[
                    isAnonymous ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                  ]"
                >
                  <span
                    :class="[
                      isAnonymous ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                      'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    ]"
                    aria-hidden="true"
                  >
                    <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                      <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <span
                    :class="[
                      isAnonymous ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                      'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                    ]"
                    aria-hidden="true"
                  >
                    <svg class="h-3 w-3 text-gray-600" fill="currentColor" viewBox="0 0 12 12">
                      <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
            <div class="ml-3 text-sm leading-6">
              <label for="anonymous" class="font-medium text-gray-700">Post anonymously</label>
              <p class="text-gray-500">Your name will not be displayed with this review</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="col-span-full">
          <label for="rating" class="block text-sm/6 font-medium text-gray-700">Overall Rating</label>
          <div class="mt-2">
            <div class="flex items-center space-x-1">
              <button 
                v-for="star in 5" 
                :key="star"
                type="button"
                :disabled="!judge"
                class="text-gray-300 hover:text-yellow-400 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                :class="{ 'text-yellow-400': star <= (hoverRating || rating) }"
                @click="rating = star"
                @mouseenter="hoverRating = star"
                @mouseleave="hoverRating = 0"
              >
                <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </button>
              <span class="ml-2 text-sm text-gray-500">{{ ratingText }}</span>
            </div>
          </div>
        </div>

        <div class="col-span-full">
          <label for="review" class="block text-sm/6 font-medium text-gray-700">Your Review</label>
          <div class="mt-2">
            <RichTextEditor 
              v-model="reviewContent" 
              :disabled="!judge"
            />
          </div>
          <p class="mt-3 text-sm/6 text-gray-600">Please be specific about your experience and maintain a professional tone.</p>
        </div>
      </div>
    </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" @click="handleCancel" class="text-sm/6 font-semibold text-gray-700">Cancel</button>
        <button 
          @click="handleSubmit" 
          :disabled="!judge"
          class="rounded-sm px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          :class="[
            judge 
              ? 'bg-gray-600 hover:bg-gray-500' 
              : 'bg-gray-300 cursor-not-allowed'
          ]"
        >
          Submit Review
        </button>
      </div>
   
  </div>

  <Toaster position="top-right" />
</template>

<style>
.ProseMirror {
  min-height: 150px;
  padding: 0.5rem 0;
}

.ProseMirror:focus {
  outline: none;
}

.ProseMirror p:first-child {
  margin-top: 0;
}

.ProseMirror p.is-empty:first-child::before {
  color: #9ca3af;
  content: attr(data-placeholder);
  float: left;
  height: 0;
  pointer-events: none;
}

/* Basic editor styles */
.ProseMirror > * + * {
  margin-top: 0.75em;
}

.ProseMirror ul,
.ProseMirror ol {
  padding: 0 1rem;
}

.ProseMirror ul {
  list-style-type: disc;
}

.ProseMirror ol {
  list-style-type: decimal;
}

.ProseMirror code {
  background-color: rgba(97, 97, 97, 0.1);
  color: #616161;
  padding: 0.25rem;
  border-radius: 0.25rem;
}

.ProseMirror blockquote {
  padding-left: 1rem;
  border-left: 2px solid rgba(13, 13, 13, 0.1);
}
</style>
