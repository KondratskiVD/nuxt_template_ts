<template>
  <div class="min-h-screen flex overflow-hidden bg-cool-gray-100">
    <!-- Off-canvas menu for mobile -->
    <div
      v-show="$store.getters['ui/isSideOpen']"
      class="lg:hidden"
    >
      <div class="fixed inset-0 flex z-40">
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-show="$store.getters['ui/isSideOpen']"
            class="fixed inset-0"
          >
            <div class="absolute inset-0 bg-cool-gray-600 opacity-75" />
          </div>
        </transition>
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-show="$store.getters['ui/isSideOpen']"
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-dark"
          >
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button
                class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-cool-gray-600"
                aria-label="Close sidebar"
                @click="$store.dispatch('ui/toggleSide', false)"
              >
                <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <customer-portal-menu />
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:flex-shrink-0">
      <div class="flex flex-col w-64">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex flex-col flex-grow bg-gray-dark pt-5 pb-4 overflow-y-auto">
          <customer-portal-menu />
        </div>
      </div>
    </div>
    <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
      <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
        <button
          class="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600 lg:hidden"
          aria-label="Open sidebar"
          @click="$store.dispatch('ui/toggleSide', true)"
        >
          <svg
            class="h-6 w-6 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <!-- Search bar -->
        <div class="flex-1 px-4 flex justify-between sm:px-6 lg:mx-auto lg:px-8">
          <div class="flex-1 flex">
            <!--<form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search</label>
              <div class="relative w-full text-gray-dark">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    />
                  </svg>
                </div>
                <input
                  id="search_field"
                  class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-dark placeholder-gray focus:outline-none sm:text-sm"
                  placeholder="Search"
                  type="search"
                >
              </div>
            </form>-->
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <!--
            <button
              class="p-1 text-gray-dark rounded-full focus:outline-none focus:shadow-outline"
              aria-label="Notifications"
            >
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            -->

            <profile-dropdown />
            <div>
              <svg
                class="cursor-pointer flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400 hover:text-cool-gray-600 transition-colors duration-500 refresh-indicator"
                :class="{
                  'opacity-50': ($store.getters['ui/isSideOpen'] || $store.getters['ui/isDisabledRefresh']),
                  animated: $store.getters['ui/isRefresh']
                }"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                @click.prevent="!($store.getters['ui/isSideOpen'] || $store.getters['ui/isDisabledRefresh'])?$store.dispatch('ui/refreshPage'):false"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
        <div class="py-2 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-dark" />
        <nuxt />
      </main>
    </div>
    <div
      class="z-40 fixed bottom-0 fixed-loader pb-4"
      :class="{open: $store.getters['ui/isRefresh']}"
    >
      <div class="px-4 rounded-l-lg bg-gray-dark bg-opacity-75 flex items-center">
        <div class="lds-facebook m-0">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, SetupContext } from '@vue/composition-api'
import Data from '@/interfaces/Data'
import CustomerPortalMenu from '@/components/elements/customer-portal/Menu.vue'
import ProfileDropdown from '@/components/elements/customer-portal/ProfileDropdown.vue'

export default defineComponent({
  components: {
    ProfileDropdown,
    CustomerPortalMenu
  },
  metaInfo () {
    return {
      title: 'Личный кабинет',
      script: [
        // eslint-disable-next-line no-undef
        { src: `//code-ya.jivosite.com/widget/${this.$config.jivositeID}`, async: true }
      ]
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const user = computed(() => context.root.$store.getters.user)

    onMounted(() => {
    })

    return { user }
  }
})
</script>
