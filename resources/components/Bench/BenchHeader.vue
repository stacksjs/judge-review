<template>
    <header class="absolute inset-x-0 top-0 z-50">
      <nav class="mx-auto flex items-center justify-between p-6 lg:px-8 border-b bg-brown-header" aria-label="Global">
        <div class="flex lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Judge Review</span>
            <img class="h-12" src="/images/bench/logo.png" alt="">
          </router-link>
        </div>
        <div class="flex lg:hidden">
          <button @click="mobileMenu = true" type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span class="sr-only">Open main menu</span>
            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <router-link 
            to="/judges" 
            class="text-sm/6 font-semibold text-gray-900 border-b-2 transition-colors duration-200"
            :class="[
              $route.path === '/judges' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent hover:border-blue-500'
            ]"
          >
            Find Judges
          </router-link>
          <router-link 
            to="/review" 
            class="text-sm/6 font-semibold text-gray-900 border-b-2 transition-colors duration-200"
            :class="[
              $route.path === '/review' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent hover:border-blue-500'
            ]"
          >
            Write Review
          </router-link>
          <router-link 
            v-if="isAuthenticated" 
            to="/feed" 
            class="text-sm/6 font-semibold text-gray-900 border-b-2 transition-colors duration-200"
            :class="[
              $route.path === '/feed' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent hover:border-blue-500'
            ]"
          >
            Feed
          </router-link>
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <router-link v-if="!isAuthenticated" to="/login" class="text-sm/6 font-semibold text-gray-900 mr-6">Log in </router-link>
          <router-link v-if="!isAuthenticated" to="/register" class="text-sm/6 font-semibold text-gray-900"> Sign up </router-link>
          <div v-else class="flex items-center gap-x-4">
            <div class="relative">
              <button 
                type="button" 
                class="text-gray-400 hover:text-gray-500"
                @click="isNotificationMenuOpen = !isNotificationMenuOpen"
              >
                <span class="sr-only">View notifications</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                <span v-if="unreadNotifications > 0" class="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                  {{ unreadNotifications }}
                </span>
              </button>
              <div 
                v-if="isNotificationMenuOpen" 
                class="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="notification-menu-button"
                tabindex="-1"
              >
                <div class="px-4 py-2 border-b border-gray-100">
                  <h3 class="text-sm font-semibold text-gray-900">Notifications</h3>
                </div>
                <div class="max-h-96 overflow-y-auto">
                  <a v-for="notification in notifications" :key="notification.id" 
                    href="#" 
                    class="block px-4 py-3 hover:bg-gray-50"
                    :class="{ 'bg-gray-50': notification.unread }"
                  >
                    <div class="flex items-start">
                      <div class="flex-shrink-0">
                        <img class="h-8 w-8 rounded-full" :src="notification.user.imageUrl" :alt="notification.user.name" />
                      </div>
                      <div class="ml-3 w-0 flex-1">
                        <p class="text-sm text-gray-900">{{ notification.message }}</p>
                        <p class="mt-1 text-xs text-gray-500">{{ notification.time }}</p>
                      </div>
                    </div>
                  </a>
                  <div v-if="notifications.length === 0" class="px-4 py-3 text-sm text-gray-500 text-center">
                    No notifications
                  </div>
                </div>
                <div class="border-t border-gray-100 px-4 py-2">
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">View all notifications</a>
                </div>
              </div>
            </div>
            <div class="relative">
              <button 
                type="button" 
                class="flex rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                @click="isProfileMenuOpen = !isProfileMenuOpen"
              >
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
              </button>
              <div 
                v-if="isProfileMenuOpen" 
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <router-link to="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Your Profile</router-link>
                <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Settings</router-link>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1">Sign out</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu :is-open="mobileMenu" :is-authenticated="isAuthenticated" @close="mobileMenu = false" />
    </header>
  </template>
  
  <script setup lang="ts">

  interface NotificationUser {
    name: string
    imageUrl: string
  }

  interface Notification {
    id: number
    user: NotificationUser
    message: string
    time: string
    unread: boolean
  }

  // This would typically come from your auth store
  const isAuthenticated = ref(true)
  const isProfileMenuOpen = ref(false)
  const isNotificationMenuOpen = ref(false)
  const mobileMenu = ref(false)

  const notifications = ref<Notification[]>([
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      message: 'Sarah Johnson liked your review',
      time: '2 minutes ago',
      unread: true
    },
    {
      id: 2,
      user: {
        name: 'Michael Chen',
        imageUrl: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      message: 'Michael Chen commented on your review',
      time: '1 hour ago',
      unread: true
    },
    {
      id: 3,
      user: {
        name: 'Robert Davis',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      message: 'Robert Davis followed you',
      time: '3 hours ago',
      unread: false
    }
  ])

  const unreadNotifications = ref(notifications.value.filter(n => n.unread).length)
  </script>