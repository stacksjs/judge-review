<template>
  <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Write a Review</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Your review will help others understand the judge's performance and conduct in court.</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <label for="case-type" class="block text-sm/6 font-medium text-gray-900">Case Type</label>
              <div class="mt-2">
                <select id="case-type" name="case-type" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>Criminal</option>
                  <option>Civil</option>
                  <option>Family Law</option>
                  <option>Probate</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="case-outcome" class="block text-sm/6 font-medium text-gray-900">Case Outcome</label>
              <div class="mt-2">
                <select id="case-outcome" name="case-outcome" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>Favorable</option>
                  <option>Unfavorable</option>
                  <option>Mixed</option>
                  <option>Pending</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <label for="rating" class="block text-sm/6 font-medium text-gray-900">Overall Rating</label>
              <div class="mt-2">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center">
                    <input type="radio" id="rating-5" name="rating" value="5" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <label for="rating-5" class="ml-2 text-sm/6 text-gray-900">5 - Excellent</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" id="rating-4" name="rating" value="4" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <label for="rating-4" class="ml-2 text-sm/6 text-gray-900">4 - Very Good</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" id="rating-3" name="rating" value="3" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <label for="rating-3" class="ml-2 text-sm/6 text-gray-900">3 - Good</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" id="rating-2" name="rating" value="2" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <label for="rating-2" class="ml-2 text-sm/6 text-gray-900">2 - Fair</label>
                  </div>
                  <div class="flex items-center">
                    <input type="radio" id="rating-1" name="rating" value="1" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <label for="rating-1" class="ml-2 text-sm/6 text-gray-900">1 - Poor</label>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <label for="review" class="block text-sm/6 font-medium text-gray-900">Your Review</label>
              <div class="mt-2">
                <textarea name="review" id="review" rows="6" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Share your experience with this judge..."></textarea>
              </div>
              <p class="mt-3 text-sm/6 text-gray-600">Please be specific about your experience and maintain a professional tone.</p>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Judge's Performance</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Rate the judge's performance in different aspects.</p>

          <div class="mt-10 space-y-10">
            <div class="space-y-6">
              <div class="flex items-center justify-between">
                <label for="fairness" class="text-sm/6 font-medium text-gray-900">Fairness & Impartiality</label>
                <div class="flex items-center space-x-4">
                  <input type="radio" id="fairness-5" name="fairness" value="5" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="fairness-4" name="fairness" value="4" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="fairness-3" name="fairness" value="3" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="fairness-2" name="fairness" value="2" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="fairness-1" name="fairness" value="1" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                </div>
              </div>

              <div class="flex items-center justify-between">
                <label for="knowledge" class="text-sm/6 font-medium text-gray-900">Legal Knowledge</label>
                <div class="flex items-center space-x-4">
                  <input type="radio" id="knowledge-5" name="knowledge" value="5" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="knowledge-4" name="knowledge" value="4" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="knowledge-3" name="knowledge" value="3" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="knowledge-2" name="knowledge" value="2" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="knowledge-1" name="knowledge" value="1" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                </div>
              </div>

              <div class="flex items-center justify-between">
                <label for="demeanor" class="text-sm/6 font-medium text-gray-900">Professional Demeanor</label>
                <div class="flex items-center space-x-4">
                  <input type="radio" id="demeanor-5" name="demeanor" value="5" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="demeanor-4" name="demeanor" value="4" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="demeanor-3" name="demeanor" value="3" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="demeanor-2" name="demeanor" value="2" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <input type="radio" id="demeanor-1" name="demeanor" value="1" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12">
          <h2 class="text-base/7 font-semibold text-gray-900">Additional Information</h2>
          <p class="mt-1 text-sm/6 text-gray-600">Optional information to provide context for your review.</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="case-number" class="block text-sm/6 font-medium text-gray-900">Case Number (Optional)</label>
              <div class="mt-2">
                <input type="text" name="case-number" id="case-number" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="case-date" class="block text-sm/6 font-medium text-gray-900">Case Date (Optional)</label>
              <div class="mt-2">
                <input type="date" name="case-date" id="case-date" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              </div>
            </div>

            <div class="col-span-full">
              <label for="role" class="block text-sm/6 font-medium text-gray-900">Your Role in the Case</label>
              <div class="mt-2">
                <select id="role" name="role" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                  <option>Attorney</option>
                  <option>Party to the Case</option>
                  <option>Court Staff</option>
                  <option>Observer</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
        <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit Review</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
/* Component styles here */
</style>

