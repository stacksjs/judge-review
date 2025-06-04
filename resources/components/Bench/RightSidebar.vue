<template>
  <div class="top-4">
    <!-- Trending Judges -->
    <div class="rounded-lg border">
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
    <div class="mt-6 rounded-lg border">
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
</template>

<script setup lang="ts">
interface Judge {
  id: number;
  name: string;
  court: string;
  imageUrl: string;
}

interface Activity {
  id: number;
  content: string;
  date: string;
  dateTime: string;
  icon: string;
}

defineProps<{
  trendingJudges: Judge[];
  recentActivity: Activity[];
}>();
</script> 