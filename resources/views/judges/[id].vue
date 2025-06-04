<template>
  <div>
    <main>
      <header class="relative isolate pt-16">
          <div class="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div class="absolute inset-x-0 bottom-0 h-px bg-gray-900/5"></div>
          </div>

        <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div class="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
            <div class="flex items-center gap-x-6">
              <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="size-16 flex-none rounded-full ring-1 ring-gray-900/10">
              <h1>
                <div class="text-sm/6 text-gray-500">Judge <span class="text-gray-700">#12345</span></div>
                <div class="mt-1 text-base font-semibold text-gray-900">Hon. Sarah Johnson</div>
              </h1>
            </div>
            <div class="flex items-center gap-x-4 sm:gap-x-6">
              <button 
                type="button" 
                class="hidden text-sm/6 font-semibold text-gray-900 sm:block"
                @click="copyProfileLink"
              >
                {{ showCopiedFeedback ? 'Copied!' : 'Copy Profile Link' }}
              </button>
              <router-link to="/review/new" class="hidden text-sm/6 font-semibold text-gray-900 sm:block">Write Review</router-link>
              <a href="#" class="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Follow</a>

              <div class="relative sm:hidden">
                <button type="button" class="-m-3 block p-3" id="more-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">More</span>
                  <svg class="size-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
                  </svg>
                </button>

                <div class="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="more-menu-button" tabindex="-1">
                  <button type="button" class="block w-full px-3 py-1 text-left text-sm/6 text-gray-900" role="menuitem" tabindex="-1" id="more-menu-item-0">Share Profile</button>
                  <router-link to="/review/new" class="block px-3 py-1 text-sm/6 text-gray-900" role="menuitem" tabindex="-1" id="more-menu-item-1">Write Review</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div>
          <div class="grid grid-cols-1 sm:hidden">
            <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
            <select aria-label="Select a tab" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600">
              <option>Reviews</option>
              <option>Cases</option>
              <option selected>Profile</option>
            </select>
            <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-500" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="hidden sm:block">
            <div>
              <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                <router-link 
                  :to="`/judges/${route.params.id}/reviews`" 
                  class="whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                  :class="[$route.path.includes('/reviews') ? 'border-gray-500 text-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
                >
                  Reviews
                </router-link>
                <router-link 
                  :to="`/judges/${route.params.id}/cases`" 
                  class="whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                  :class="[$route.path.includes('/cases') ? 'border-gray-500 text-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
                >
                  Cases
                </router-link>
                <router-link 
                  :to="`/judges/${route.params.id}/profile`" 
                  class="whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium"
                  :class="[$route.path.includes('/profile') || !$route.path.includes('/reviews') && !$route.path.includes('/cases') ? 'border-gray-500 text-gray-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700']"
                >
                  Profile
                </router-link>
              </nav>
            </div>
          </div>
        </div>

        <div class="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <!-- Judge Summary -->
          <div class="lg:col-start-3 lg:row-end-1">
            <h2 class="sr-only">Summary</h2>
            <div class="rounded-lg bg-off-white shadow-sm ring-1 ring-gray-900/5 p-4">
              <dl class="flex flex-wrap">
                <div class="flex-auto">
                  <dt class="text-sm/6 font-semibold text-gray-900">Overall Rating</dt>
                  <dd class="mt-1 text-base font-semibold text-gray-900">4.8/5.0</dd>
                </div>
                <div class="flex-none self-end">
                  <dt class="sr-only">Status</dt>
                  <dd class="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600 ring-1 ring-inset ring-green-600/20">Active</dd>
                </div>
                <div class="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                  <dt class="flex-none">
                    <span class="sr-only">Court</span>
                    <svg class="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clip-rule="evenodd" />
                    </svg>
                  </dt>
                  <dd class="text-sm/6 font-medium text-gray-900">Superior Court of California</dd>
                </div>
                <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt class="flex-none">
                    <span class="sr-only">Appointed</span>
                    <svg class="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path d="M5.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75V12ZM6 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H6ZM7.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75V12ZM8 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H8ZM9.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V10ZM10 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H10ZM9.25 14a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H10a.75.75 0 0 1-.75-.75V14ZM12 9.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V10a.75.75 0 0 0-.75-.75H12ZM11.25 12a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75V12ZM12 13.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V14a.75.75 0 0 0-.75-.75H12ZM13.25 10a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75H14a.75.75 0 0 1-.75-.75V10ZM14 11.25a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 0 0 .75-.75V12a.75.75 0 0 0-.75-.75H14Z" />
                      <path fill-rule="evenodd" d="M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z" clip-rule="evenodd" />
                    </svg>
                  </dt>
                  <dd class="text-sm/6 text-gray-500">
                    <time datetime="2020-01-01">Appointed 2020</time>
                  </dd>
                </div>
                <div class="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt class="flex-none">
                    <span class="sr-only">Specialization</span>
                    <svg class="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path fill-rule="evenodd" d="M2.5 4A1.5 1.5 0 0 0 1 5.5V6h18v-.5A1.5 1.5 0 0 0 17.5 4h-15ZM19 8.5H1v6A1.5 1.5 0 0 0 2.5 16h15a1.5 1.5 0 0 0 1.5-1.5v-6ZM3 13.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4.75-.75a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5h-3.5Z" clip-rule="evenodd" />
                    </svg>
                  </dt>
                  <dd class="text-sm/6 text-gray-500">Criminal Law, Family Law</dd>
                </div>
              </dl>
             
            </div>
          </div>

          <!-- Dynamic Content -->
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showCopiedFeedback = ref(false)

const copyProfileLink = () => {
  const url = window.location.href
  navigator.clipboard.writeText(url)
  showCopiedFeedback.value = true
  setTimeout(() => {
    showCopiedFeedback.value = false
  }, 2000)
}
</script>

<style scoped>
/* Component styles here */
</style>