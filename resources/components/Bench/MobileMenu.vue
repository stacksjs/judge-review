<template>
  <div class="lg:hidden" v-if="isOpen" role="dialog" aria-modal="true">
    <!-- Background backdrop, show/hide based on slide-over state. -->
    <div class="fixed inset-0 z-50"></div>
    <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <router-link to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">Judge Review</span>
          <img class="h-8 w-auto" src="/images/bench/logo.png" alt="">
        </router-link>
        <button @click="$emit('close')" type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            <router-link 
              to="/judges" 
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold border-b-2 transition-colors duration-200"
              :class="[
                $route.path === '/judges' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent hover:border-blue-500 text-gray-900'
              ]"
            >
              Find Judges
            </router-link>
            <router-link
              to="/review/new"
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold border-b-2 transition-colors duration-200"
              :class="[
                $route.path === '/review/new' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent hover:border-blue-500 text-gray-900'
              ]"
            >
              Write Review
            </router-link>
            <router-link 
              v-if="isAuthenticated" 
              to="/feed" 
              class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold border-b-2 transition-colors duration-200"
              :class="[
                $route.path === '/feed' 
                  ? 'border-blue-500 text-blue-600' 
                  : 'border-transparent hover:border-blue-500 text-gray-900'
              ]"
            >
              Feed
            </router-link>
          </div>
          <div class="py-6">
            <div v-if="!isAuthenticated">
              <router-link to="/register" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Register</router-link>
              <router-link to="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</router-link>
            </div>
            <div v-else>
              <router-link to="/logout" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log out</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isOpen: boolean;
  isAuthenticated: boolean;
}>();

defineEmits<{
  (e: 'close'): void;
}>();
</script> 