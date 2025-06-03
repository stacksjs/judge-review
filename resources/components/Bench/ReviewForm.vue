<template>
    <form>
         <div class="space-y-12">
           <div class="pb-12">
             <div>
               <div class="text-center mb-8">
                 <img class="inline-block h-24 w-24 rounded-full ring-2 ring-white mb-4" src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" alt="Judge Sarah Johnson" />
                 <h3 class="text-lg font-semibold text-gray-800">Hon. Sarah Johnson</h3>
                 <p class="text-sm text-gray-600">Superior Court of California</p>
                 <p class="text-sm text-gray-600">San Francisco County, Department 15</p>
               </div>
             </div>
           </div>
   
           <div class="border-b border-gray-900/10 pb-12">
             <h2 class="text-base/7 font-semibold text-gray-800">Judge's Performance</h2>
             <p class="mt-1 text-sm/6 text-gray-600">Rate the judge's performance in different aspects.</p>
   
             <div class="mt-10 space-y-10">
               <div class="space-y-6">
                 <div class="flex items-center justify-between">
                   <label for="fairness" class="text-sm/6 font-medium text-gray-700">Fairness & Impartiality</label>
                   <div class="flex items-center space-x-1 w-64">
                     <div class="flex items-center space-x-1">
                       <button 
                         v-for="star in 5" 
                         :key="star"
                         type="button"
                         class="text-gray-300 hover:text-yellow-400 focus:outline-none"
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
                         class="text-gray-300 hover:text-yellow-400 focus:outline-none"
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
                         class="text-gray-300 hover:text-yellow-400 focus:outline-none"
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
           </div>
   
           <div class="border-b border-gray-900/10 pb-12">
             <h2 class="text-base/7 font-semibold text-gray-800">Additional Information</h2>
             <p class="mt-1 text-sm/6 text-gray-600">Optional information to provide context for your review.</p>
   
             <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
               <div class="sm:col-span-3">
                 <label for="case-number" class="block text-sm/6 font-medium text-gray-700">Case Number (Optional)</label>
                 <div class="mt-2">
                   <input type="text" name="case-number" id="case-number" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6">
                 </div>
               </div>
   
               <div class="sm:col-span-3">
                 <label for="case-date" class="block text-sm/6 font-medium text-gray-700">Case Date (Optional)</label>
                 <div class="mt-2">
                   <input type="date" name="case-date" id="case-date" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6">
                 </div>
               </div>
   
               <div class="col-span-full">
                 <label for="role" class="block text-sm/6 font-medium text-gray-700">Your Role in the Case</label>
                 <div class="mt-2">
                   <select id="role" name="role" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6">
                     <option>Attorney</option>
                     <option>Party to the Case</option>
                     <option>Court Staff</option>
                     <option>Observer</option>
                     <option>Other</option>
                   </select>
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
                       class="text-gray-300 hover:text-yellow-400 focus:outline-none"
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
                   <!-- TODO: this will be a WYSIWYG editor -->
                   <textarea name="review" id="review" rows="6" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6" placeholder="Share your experience with this judge..."></textarea>
                 </div>
                 <p class="mt-3 text-sm/6 text-gray-600">Please be specific about your experience and maintain a professional tone.</p>
               </div>
             </div>

           </div>
         </div>
   
         <div class="mt-6 flex items-center justify-end gap-x-6">
           <button type="button" class="text-sm/6 font-semibold text-gray-700">Cancel</button>
           <button type="submit" class="rounded-sm bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Submit Review</button>
         </div>
       </form>
   </template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const rating = ref(0)
const hoverRating = ref(0)
const fairness = ref(0)
const hoverFairness = ref(0)
const knowledge = ref(0)
const hoverKnowledge = ref(0)
const demeanor = ref(0)
const hoverDemeanor = ref(0)

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
</script>