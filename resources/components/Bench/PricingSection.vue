<template>
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-800 sm:text-6xl">Simple, transparent pricing</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">Choose the plan that best fits your needs. Start with our free tier and upgrade when you're ready for more.</p>
      <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2">
        <div class="rounded-3xl p-8 ring-1 ring-gray-200">
          <h3 id="tier-free" class="text-lg/8 font-semibold text-gray-800">Free</h3>
          <p class="mt-4 text-sm/6 text-gray-600">Perfect for getting started with judge reviews.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-semibold tracking-tight text-gray-800">$0</span>
            <span class="text-sm/6 font-semibold text-gray-600">/month</span>
          </p>
          <router-link to="/register" aria-describedby="tier-free" class="mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-gray-600 ring-1 ring-inset ring-gray-200 hover:ring-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Get started</router-link>
          <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
              </svg>
              Review up to 10 judges
            </li>
            <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
              </svg>
              Basic analytics
            </li>
          </ul>
        </div>
        <div class="rounded-3xl p-8 ring-2 ring-gray-600">
          <h3 id="tier-hobby" class="text-lg/8 font-semibold text-gray-600">Hobby</h3>
          <p class="mt-4 text-sm/6 text-gray-600">For those who need to review more judges.</p>
          <p class="mt-6 flex items-baseline gap-x-1">
            <span class="text-4xl font-semibold tracking-tight text-gray-800">$5</span>
            <span class="text-sm/6 font-semibold text-gray-600">/month</span>
          </p>
          <router-link to="/register" aria-describedby="tier-hobby" class="mt-6 block rounded-md bg-gray-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Get started</router-link>
          <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">
            <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
              </svg>
              Unlimited judge reviews
            </li>
            <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
              </svg>
              Advanced analytics
            </li>
            <li class="flex gap-x-3">
              <svg class="h-6 w-5 flex-none text-gray-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" />
              </svg>
              Priority support
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>