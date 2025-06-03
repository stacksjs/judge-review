<script setup>
// Reactive state for the email input
const email = ref('')
const loading = ref(false)
const errors = ref([])
const successMessage = ref('')

// Method to handle email submission
async function submitEmail() {
  const body = {
    email: email.value,
  }

  errors.value = []
  successMessage.value = ''

  const url = 'http://localhost:3008/api/email/subscribe'

  loading.value = true

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errs = await response.json()

    errors.value = errs.errors
  }
  else {
    successMessage.value = 'Thanks! Stay tune for more updates.'
  }

  email.value = ''
  loading.value = false
}
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white">
    <svg class="[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] absolute inset-0 h-full w-full stroke-gray-200 -z-10" aria-hidden="true">
      <defs>
        <pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
    </svg>

    <div class="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:flex lg:px-8 lg:py-20 sm:pb-32">
      <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-40">
        <!-- <img class="h-11" src="https://tailwindui.com/img/logos/mark.svg?color=blue&amp;shade=600" alt="Your Company"> -->
        <Logo class="h-11 w-auto" />

        <div class="mt-24 lg:mt-16 sm:mt-32">
          <a href="#" class="inline-flex space-x-6">
            <span class="rounded-full bg-gray-600/10 px-3 py-1 text-sm text-gray-600 font-semibold leading-6 ring-1 ring-gray-600/10 ring-inset">Coming soon</span>
          </a>
        </div>

        <h1 class="mt-10 text-4xl text-gray-900 font-bold tracking-tight sm:text-6xl">
          Transparency in the Judiciary Starts Here
        </h1>

        <p class="mt-6 text-lg text-gray-600 leading-8">
          The first-ever platform dedicated to judicial transparency. Read and share experiences with judges across the country. Like Glassdoor for the judiciary, we're empowering citizens to make informed decisions about their legal representatives.
        </p>

        <p class="mt-3 text-gray-600 leading-8 italic">
          Enter your email below to be notified when we launch.
        </p>

        <div class="mt-10 flex items-center gap-x-6">
          <div>
            <div class="w-380px flex rounded-md shadow-sm">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <div class="i-hugeicons-envelope h-5 w-5 text-gray-400" />
                </div>

                <input id="email" v-model="email" type="email" name="email" class="block w-full border-0 rounded-none rounded-l-md py-1.5 pl-10 text-gray-900 ring-1 ring-gray-300 ring-inset sm:text-sm placeholder:text-gray-400 sm:leading-6 focus:ring-2 focus:ring-gray-600 focus:ring-inset" placeholder="your@email.com">
              </div>

              <BaseButton button-text="Notify Me" class-string="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-120px" :loading="loading" @click="submitEmail" />
            </div>
          </div>
        </div>

        <p v-for="error in errors" :key="error" class="pt-2 text-xs text-red-500">
          {{ error.message }}
        </p>

        <p v-if="successMessage" class="pt-2 text-xs text-green-700">
          {{ successMessage }}
        </p>
      </div>
      <div class="mx-auto mt-16 flex lg:ml-10 lg:mr-0 lg:mt-0 sm:mt-24 xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl">
          <div class="-m-2 rounded-xl bg-white p-2 ring-1 ring-gray-900/5 lg:-m-4 lg:rounded-2xl lg:p-4">
            <img src="/images/bench/hero_image.png" alt="Bench Review Preview" class="w-[50rem] rounded-lg object-cover shadow-md">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
  meta:
    layout: soon
</route>