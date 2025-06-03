<script setup lang="ts">
defineOptions({
  name: 'FeedPage',
})

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

useHead({
  // title: app.name,
  title: 'Feed - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'Feed.' },
  ],
})


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
    judge: {
      id: '123',
      name: 'Hon. Sarah Johnson',
      court: 'Superior Court',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    title: 'Topnotch!',
    content: `Judge Johnson handled my case with exceptional professionalism and fairness. Her attention to detail and clear communication made the process much smoother than expected. Throughout the proceedings,
      she demonstrated a deep understanding of the law while maintaining a balanced and impartial approach. Her ability to manage complex legal arguments and maintain courtroom decorum was impressive.
      The judge took the time to explain key decisions and ensured all parties were heard. Her written opinions were thorough and well-reasoned, providing clear guidance for future cases.
      I particularly appreciated how she managed to keep the proceedings moving efficiently without sacrificing thoroughness. Her commitment to justice and fairness was evident in every aspect of the case.`,
    date: '2h ago',
    dateTime: '2024-02-20T10:00',
    likes: 24,
    rating: 4,
    comments: 5,
    type: 'Criminal',
    status: 'Closed'
  },
  {
    id: 2,
    author: {
      id: 2,
      name: 'Sarah Williams',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    judge: {
      id: '456',
      name: 'Hon. Robert Davis',
      court: 'Appellate Court',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    title: 'Disappointed!',
    content: `Very impressed with the thoroughness of the proceedings. The judge maintained perfect decorum while ensuring all parties were heard. His approach to case management was exemplary,
    with clear timelines and expectations set from the beginning. The judge demonstrated exceptional knowledge of both procedural and substantive law,
    which helped streamline the process significantly. His written decisions were comprehensive and well-articulated, making complex legal concepts accessible to all parties.
    I was particularly struck by his ability to maintain a calm and professional atmosphere even during contentious moments. The judge\'s commitment to fairness and due process was evident throughout the proceedings.
    His management of the courtroom was efficient yet thorough, ensuring that no important issues were overlooked.`,
    date: '4h ago',
    dateTime: '2024-02-20T08:00',
    rating: 3.5,
    likes: 18,
    comments: 3,
    type: 'Civil',
    status: 'Pending'
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

