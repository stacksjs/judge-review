<template>
  <div class="bg-gray-50 pt-6">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
        <!-- Left Sidebar - Case Categories -->
        <div class="lg:col-span-3">
          <div class="sticky top-20">
            <h2 class="text-base font-semibold text-gray-900">Explore Cases</h2>
            <nav class="mt-4 space-y-1">
              <a v-for="category in categories" :key="category.name" href="#" 
                class="group flex items-center rounded-md px-3 py-2 text-sm font-medium"
                :class="[category.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900']">
                <component :is="category.icon" 
                  class="mr-3 h-5 w-5 flex-shrink-0"
                  :class="[category.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" 
                  aria-hidden="true" />
                {{ category.name }}
                <span class="ml-auto inline-block rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
                  {{ category.count }}
                </span>
              </a>
            </nav>
          </div>
        </div>

        <!-- Main Feed -->
        <div class="lg:col-span-6">
          <!-- Create Review -->
          <div class="mb-6 rounded-lg bg-white shadow">
            <div class="p-4">
              <div class="flex items-start space-x-4">
                <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <div class="min-w-0 flex-1">
                  <form action="#">
                    <div class="border-b border-gray-200 focus-within:border-indigo-600">
                      <textarea rows="3" name="comment" id="comment" class="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 focus:ring-0 sm:text-sm" placeholder="Write your review..."></textarea>
                    </div>
                    <div class="mt-2 flex justify-end">
                      <button type="submit" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Post</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <!-- Reviews Feed -->
          <div class="space-y-6">
            <div v-for="review in reviews" :key="review.id" class="rounded-lg bg-white shadow">
              <div class="p-4">
                <div class="flex items-start space-x-4">
                  <img class="h-10 w-10 rounded-full" :src="review.author.imageUrl" :alt="review.author.name" />
                  <div class="min-w-0 flex-1">
                    <div class="flex items-center justify-between">
                      <p class="text-sm font-medium text-gray-900">
                        <a href="#" class="hover:underline">{{ review.author.name }}</a>
                      </p>
                      <p class="text-sm text-gray-500">
                        <time :datetime="review.dateTime">{{ review.date }}</time>
                      </p>
                    </div>
                    <p class="mt-2 text-sm text-gray-700">{{ review.content }}</p>
                    <div class="mt-4 flex items-center space-x-4">
                      <button type="button" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                        <svg class="mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z" clip-rule="evenodd" />
                        </svg>
                        {{ review.likes }}
                      </button>
                      <button type="button" class="inline-flex items-center text-sm text-gray-500 hover:text-gray-700">
                        <svg class="mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M3.43 2.524A41.29 41.29 0 0110 2c2.236 0 4.43.18 6.57.524 1.437.231 2.43 1.49 2.43 2.902v5.148c0 1.413-.993 2.67-2.43 2.902a41.102 41.102 0 01-3.55.414c-.28.02-.521.18-.643.413l-1.712 3.293a.75.75 0 01-1.33 0l-1.713-3.293a.783.783 0 00-.642-.413 41.108 41.108 0 01-3.55-.414C1.993 13.245 1 11.986 1 10.574V5.426c0-1.413.993-2.67 2.43-2.902z" clip-rule="evenodd" />
                        </svg>
                        {{ review.comments }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="lg:col-span-3">
          <div class="sticky top-20">
            <!-- Trending Judges -->
            <div class="rounded-lg bg-white shadow">
              <div class="p-4">
                <h2 class="text-base font-semibold text-gray-900">Trending Judges</h2>
                <div class="mt-4 space-y-4">
                  <div v-for="judge in trendingJudges" :key="judge.id" class="flex items-center space-x-3">
                    <img class="h-8 w-8 rounded-full" :src="judge.imageUrl" :alt="judge.name" />
                    <div class="min-w-0 flex-1">
                      <p class="text-sm font-medium text-gray-900">{{ judge.name }}</p>
                      <p class="text-sm text-gray-500">{{ judge.court }}</p>
                    </div>
                    <button type="button" class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Follow</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recent Activity -->
            <div class="mt-6 rounded-lg bg-white shadow">
              <div class="p-4">
                <h2 class="text-base font-semibold text-gray-900">Recent Activity</h2>
                <div class="mt-4 flow-root">
                  <ul role="list" class="-mb-8">
                    <li v-for="(activity, activityIdx) in recentActivity" :key="activity.id">
                      <div class="relative pb-8">
                        <span v-if="activityIdx !== recentActivity.length - 1" class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                        <div class="relative flex space-x-3">
                          <div>
                            <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                              <component :is="activity.icon" class="h-5 w-5 text-white" aria-hidden="true" />
                            </span>
                          </div>
                          <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                            <div>
                              <p class="text-sm text-gray-500">{{ activity.content }}</p>
                            </div>
                            <div class="whitespace-nowrap text-right text-sm text-gray-500">
                              <time :datetime="activity.dateTime">{{ activity.date }}</time>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  { name: 'Criminal', count: 428, current: true, icon: 'ScaleIcon' },
  { name: 'Civil', count: 312, current: false, icon: 'DocumentTextIcon' },
  { name: 'Family', count: 256, current: false, icon: 'HomeIcon' },
  { name: 'Probate', count: 252, current: false, icon: 'DocumentDuplicateIcon' },
  { name: 'Appellate', count: 198, current: false, icon: 'ArrowPathIcon' },
  { name: 'Bankruptcy', count: 156, current: false, icon: 'BanknotesIcon' }
]

const reviews = [
  {
    id: 1,
    author: {
      name: 'Michael Chen',
      imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'Judge Johnson handled my case with exceptional professionalism and fairness. Her attention to detail and clear communication made the process much smoother than expected.',
    date: '2h ago',
    dateTime: '2024-02-20T10:00',
    likes: 24,
    comments: 5
  },
  {
    id: 2,
    author: {
      name: 'Sarah Williams',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'Very impressed with the thoroughness of the proceedings. The judge maintained perfect decorum while ensuring all parties were heard.',
    date: '4h ago',
    dateTime: '2024-02-20T08:00',
    likes: 18,
    comments: 3
  }
]

const trendingJudges = [
  {
    id: 1,
    name: 'Hon. Sarah Johnson',
    court: 'Superior Court',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 2,
    name: 'Hon. Robert Davis',
    court: 'Appellate Court',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    id: 3,
    name: 'Hon. Maria Garcia',
    court: 'Family Court',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

const recentActivity = [
  {
    id: 1,
    content: 'New review posted for Hon. Sarah Johnson',
    date: '1h ago',
    dateTime: '2024-02-20T11:00',
    icon: 'ChatBubbleLeftIcon'
  },
  {
    id: 2,
    content: 'Case CR-2024-001 updated',
    date: '2h ago',
    dateTime: '2024-02-20T10:00',
    icon: 'DocumentTextIcon'
  },
  {
    id: 3,
    content: 'New judge profile added',
    date: '3h ago',
    dateTime: '2024-02-20T09:00',
    icon: 'UserPlusIcon'
  }
]
</script>
