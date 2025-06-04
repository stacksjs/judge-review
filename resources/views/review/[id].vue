<template>
  <div class="min-h-screen">
    <!-- Article header -->
    <header class="relative">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {{ review.title }}
          </h1>
        </div>

        <!-- Author and Judge info -->
        <div class="mt-8 flex items-center justify-between border-t border-gray-200 pt-8">
          <div class="flex items-center">
            <img class="h-12 w-12 rounded-full" :src="review.author.imageUrl" :alt="review.author.name">
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">
                <a href="#" class="hover:underline">{{ review.author.name }}</a>
              </p>
              <div class="flex space-x-1 text-sm text-gray-500">
                <time :datetime="review.dateTime">{{ review.date }}</time>
                <span aria-hidden="true">&middot;</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="flex flex-col items-end">
              <span class="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 mb-2">
                {{ review.type }}
              </span>
              <h2 class="text-lg font-semibold text-gray-900">Reviewing</h2>
              <div class="mt-1 flex items-center justify-end">
                <img class="h-10 w-10 rounded-full" :src="review.judge.imageUrl" :alt="review.judge.name">
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">{{ review.judge.name }}</p>
                  <p class="text-sm text-gray-500">{{ review.judge.court }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Article content -->
    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto mt-6 text-gray-500">
        <div class="flex items-center mb-8">
          <div class="flex items-center">
            <svg v-for="star in 5" :key="star" 
              class="h-5 w-5" 
              :class="star <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <span class="ml-2 text-sm text-gray-500">({{ review.rating }})</span>
        </div>

        <div class="review-content relative">
          <div v-html="review.content" class="text-lg text-gray-700 space-y-6 line-clamp-10"></div>
          <div class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div class="absolute left-0 border-t-2 border-gray-400 right-0 bg-off-white py-16">
          <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div class="text-center">
              <h3 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Want to read more?</h3>
              <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Get unlimited access to detailed judge reviews, ratings, and insights from legal professionals.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="/register" class="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Article footer -->
        <div class="mt-[300px] border-t border-gray-200 pt-8">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-4">
              <button class="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                </svg>
                <span>{{ review.likes }}</span>
              </button>
              <button class="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902.848.137 1.705.248 2.57.331v3.443a.75.75 0 001.28.53l3.58-3.579a.78.78 0 01.527-.224 41.202 41.202 0 005.183-.5c1.437-.232 2.43-1.49 2.43-2.903V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zm0 7a1 1 0 100-2 1 1 0 000 2zM8 8a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                </svg>
                <span>{{ review.comments }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BenchReviews } from '@/types/bench';

defineOptions({
  name: 'ReviewDetailPage',
})

useHead({
  title: 'Review - A Masterclass in Judicial Excellence - The Chamber of Secrets',
  meta: [
    { name: 'description', content: 'A detailed review of Judge Sarah Johnson\'s judicial excellence and courtroom management.' },
  ],
})

const review: BenchReviews = {
  id: 1,
  title: 'A Masterclass in Judicial Excellence: My Experience with Judge Sarah Johnson',
  author: {
    id: 1,
    name: 'Michael Chen',
    imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  judge: {
    id: '123',
    name: 'Hon. Sarah Johnson',
    court: 'Superior Court, California',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  date: 'Mar 16, 2024',
  dateTime: '2024-03-16T10:00',
  rating: 5,
  status: 'Closed',
  likes: 256,
  comments: 48,
  type: 'Criminal Law',
  content: `
    <p class="text-xl leading-relaxed text-gray-700 mb-8">Having practiced law for over fifteen years, I've appeared before numerous judges, but my recent experience with Judge Sarah Johnson stands out as particularly noteworthy. This review aims to provide a comprehensive analysis of her judicial approach, courtroom management, and overall effectiveness in administering justice.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Courtroom Management and Efficiency</h2>
    <p class="text-lg text-gray-700 mb-6">Judge Johnson's courtroom runs like a well-oiled machine. From the moment proceedings begin, there's a palpable sense of organization and purpose. She maintains strict punctuality, respecting both the court's time and that of all parties involved. What particularly impressed me was her ability to keep proceedings moving efficiently without sacrificing thoroughness or due process.</p>
    <p class="text-lg text-gray-700 mb-6">Her pre-trial management is exemplary. Case management conferences are focused and productive, with clear deadlines and expectations set from the outset. She demonstrates remarkable skill in identifying key issues early, helping to streamline proceedings and avoid unnecessary delays.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Legal Knowledge and Decision-Making</h2>
    <p class="text-lg text-gray-700 mb-6">Perhaps most impressive is Judge Johnson's command of complex legal issues. During our three-week trial, she showed an exceptional ability to grasp intricate technical evidence while maintaining focus on the core legal principles at stake. Her rulings on evidentiary matters were swift and well-reasoned, demonstrating both deep knowledge of the rules of evidence and practical understanding of trial dynamics.</p>
    <p class="text-lg text-gray-700 mb-6">Her written opinions deserve special mention. They are clear, comprehensive, and well-structured, providing detailed analysis while remaining accessible to all parties. She takes particular care to address all key arguments raised by counsel, ensuring that her reasoning is transparent and her conclusions well-supported.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Temperament and Professionalism</h2>
    <p class="text-lg text-gray-700 mb-6">Throughout the proceedings, Judge Johnson maintained an ideal judicial temperament. She remained patient and attentive during lengthy testimony, while showing appropriate firmness when necessary to maintain order and decorum. Her treatment of all parties - attorneys, witnesses, and support staff - was uniformly professional and respectful.</p>
    <p class="text-lg text-gray-700 mb-6">What stands out is her ability to maintain control of the courtroom without being overbearing. Even in heated moments during cross-examination, she managed to keep proceedings civil and focused on the issues at hand.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Commitment to Justice</h2>
    <p class="text-lg text-gray-700 mb-6">Beyond her technical competence, Judge Johnson demonstrates a genuine commitment to ensuring justice is served. She takes great care to ensure that all parties have a fair opportunity to present their cases. In our case, she showed particular sensitivity to pro se litigants, providing appropriate guidance without compromising her neutrality.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Areas for Consideration</h2>
    <p class="text-lg text-gray-700 mb-6">While my overall experience was extremely positive, it's worth noting that Judge Johnson maintains very strict scheduling requirements. While this contributes to the efficiency of her courtroom, attorneys should be prepared for limited flexibility in scheduling matters. This is not necessarily a criticism, but rather a characteristic that counsel should be aware of when appearing before her.</p>

    <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
    <p class="text-lg text-gray-700 mb-6">Judge Johnson represents the highest standards of judicial excellence. Her combination of legal acumen, efficient management, and professional demeanor makes appearing in her courtroom both challenging and rewarding. For attorneys preparing to appear before her, I would emphasize the importance of thorough preparation, punctuality, and professional conduct.</p>
    <p class="text-lg text-gray-700 mb-6">This review is based on my experience in a complex civil litigation matter, but I believe these observations would hold true across different types of proceedings. Judge Johnson's approach to judicial administration serves as a model for how our courts should function.</p>
  `
}
</script>

<style>
.line-clamp-3 {
  display: -webkit-box;
  line-clamp: 10;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.review-content {
  position: relative;
  margin-bottom: 2rem;
}
</style>
