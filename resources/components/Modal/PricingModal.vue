<template>
  <BaseModal @close="close">
    <div class="bg-white rounded-lg">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Choose Your Plan</h2>
          <p class="mt-4 text-lg text-gray-600">Subscribe to see the full reviews and unlock premium features</p>
        </div>
        <div class="mx-auto mt-12 max-w-md">
          <div class="rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center justify-between">
              <h3 id="tier-hobby" class="text-2xl font-bold text-indigo-600">Hobby</h3>
              <span class="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">Popular</span>
            </div>
            <p class="mt-4 text-base text-gray-600">Perfect for those who need to review more judges and want advanced features.</p>
            <div class="mt-6">
              <div class="flex items-baseline gap-x-1">
                <span class="text-5xl font-bold tracking-tight text-gray-900">$5</span>
                <span class="text-lg font-semibold text-gray-600">/month</span>
              </div>
              <p class="mt-2 text-sm text-gray-500">Billed monthly. Cancel anytime.</p>
            </div>
            <router-link 
              to="/register" 
              aria-describedby="tier-hobby" 
              class="mt-8 block w-full rounded-md bg-indigo-600 px-4 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-200"
            >
              Get started today
            </router-link>
            <ul role="list" class="mt-8 space-y-4 text-base text-gray-600">
              <li class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                <span>Unlimited judge reviews</span>
              </li>
              <li class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                <span>Advanced analytics and insights</span>
              </li>
              <li class="flex gap-x-3">
                <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
                </svg>
                <span>Priority customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}
</script> 