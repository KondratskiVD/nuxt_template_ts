<template>
  <div class="relative flex-1 flex flex-col">
    <div class="flex-shrink-0 flex items-center justify-center px-4">
      <img
        class="h-8 w-auto"
        src="/images/site/UBEREM.svg"
      >
    </div>
    <div class="mt-5 overflow-y-auto">
      <nav class="px-2 space-y-1 mt-4">
        <nuxt-link
          v-slot="{ href, route, navigate, isActive, isExactActive }"
          to="/"
          @click.native="$store.dispatch('ui/toggleSide', false)"
        >
          <a
            :href="href"
            class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md  focus:outline-none focus:bg-teal-500  transition duration-500 "
            :class="{
              'text-white bg-teal-700 hover:bg-teal-700': isExactActive,
              'text-teal-100 hover:bg-teal-600': !isExactActive,
              'duration-150': isActive,
            }"
            @click="navigate"
          >
            <svg
              class="mr-4 h-6 w-6 text-teal-300 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {{ $t('customer.addresses') }}
          </a>
        </nuxt-link>
      </nav>
    </div>
    <hr class="h-px mt-6 bg-teal-700 border-none">
    <div class="mt-6 flex-1 h-0 overflow-y-auto">
      <nav class="px-2 space-y-1">
        <a
          href="https://t.me/uberemua"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-300 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="ml-4">
            Написать менеджеру
          </span>
        </a>
        <a
          href="https://t.me/uberem_bot"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-300 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150 transform rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          <span class="ml-4">
            Telegram Бот
          </span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>

</style>
