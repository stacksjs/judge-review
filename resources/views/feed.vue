<template>
  <div class="min-h-screen mt-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
        <!-- Left Sidebar - Case Categories -->
        <div class="hidden lg:block lg:col-span-3">
          <CategoriesList :categories="categories" />
        </div>

        <!-- Main Feed -->
        <div class="col-span-1 lg:col-span-6">
          <ReviewsFeed :reviews="reviews" />
        </div>

        <!-- Right Sidebar -->
        <div class="hidden lg:block lg:col-span-3">
          <RightSidebar :trending-judges="trendingJudges" :recent-activity="recentActivity" />
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
      id: 1,
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
      id: 2,
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
