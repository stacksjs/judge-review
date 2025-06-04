<template>
  <main>
    <div class="relative isolate">
      <div class="overflow-hidden">
        <div class="pb-32 pt-36 sm:pt-60 lg:pt-32">
          <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center lg:justify-between">
            <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 class="text-pretty text-5xl font-semibold tracking-tight text-gray-800 sm:text-7xl">Transparency in the Judiciary Starts Here</h1>
              <p class="mt-8 text-pretty text-lg font-medium text-gray-600 sm:max-w-md sm:text-xl/8 lg:max-w-none">The first-ever platform dedicated to judicial transparency. Read and share experiences with judges across the country. Like Glassdoor for the judiciary, we're empowering citizens to make informed decisions about their legal representatives.</p>
              <div class="mt-10 flex items-center gap-x-6">
                <router-link to="/judges" class="rounded-sm bg-gray-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Find a Judge</router-link>
                <router-link to="/review" class="text-sm/6 font-semibold text-gray-700">Write a Review <span aria-hidden="true">→</span></router-link>
              </div>
            </div>
            <div class="mx-auto mt-16 flex lg:ml-10 lg:mr-0 lg:mt-0 sm:mt-24 xl:ml-28">
              <div class="max-w-3xl flex-none sm:max-w-5xl">
                <div class="rounded-xl lg:rounded-2xl">
                  <img src="/images/bench/hero_image.png" alt="Bench Review Preview" class="w-[50rem] rounded-lg object-cover">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
  
  <script setup lang="ts">
  
  </script>