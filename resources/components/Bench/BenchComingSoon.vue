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
  <div class="relative isolate overflow-hidden bg-off-white h-screen">

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

        <p v-for="error in errors" :key="error" class="pt-2 text-xs text-red-500">
          {{ error.message }}
        </p>

        <p v-if="successMessage" class="pt-2 text-xs text-green-700">
          {{ successMessage }}
        </p>
      </div>
      <div class="mx-auto mt-16 flex lg:ml-10 lg:mr-0 lg:mt-0 sm:mt-24 xl:ml-32">
        <div class="max-w-3xl flex-none sm:max-w-5xl">
          <div class="rounded-xl p-2 lg:rounded-2xl lg:p-4">
            <img src="/images/bench/hero_image.png" alt="Bench Review Preview" class="w-[50rem] rounded-lg object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>