<template>
  <div class="relative flex-1 flex flex-col">
    <div class="flex-shrink-0 flex items-center justify-center px-4 svg-animated-avatar">
      <svg
        class="h-8 w-auto"
        xmlns="http://www.w3.org/2000/svg"
        width="202"
        height="41"
        viewBox="0 0 202 41"
        fill="currentColor"
      >
        <g>
          <g>
            <path
              d="M111.7 17.927l-.112.34c-2.385 0-7.838 1.478-9.086 3.294v16.016h-8.52V12.02h4.658c.68 1.137 1.704 2.499 2.044 3.748h.34s5.453-4.657 10.792-4.657zm28.51 17.15c-2.27 1.932-7.382 3.182-10.79 3.182-8.972 0-14.765-5.452-14.765-13.63 0-8.066 6.702-13.518 14.539-13.518 7.269 0 10.109 4.772 10.109 8.974 0 5.11-4.316 7.838-9.314 7.838-2.385 0-4.884-.682-6.702-2.158.228 3.179 3.748 5.792 7.61 5.792 1.704 0 4.658-.455 5.793-1.022zm-16.468-14.083c.68 1.362 3.293 2.385 4.998 2.385 1.817 0 3.066-1.023 3.066-2.727 0-1.703-1.25-2.725-2.953-2.725-1.818 0-4.657 1.476-5.111 3.067zM13.568 38.259c-7.951 0-13.29-3.976-13.29-12.61V12.249h8.52v13.289c0 3.976 2.612 4.998 4.77 4.998 2.158 0 4.77-1.022 4.77-4.998v-13.29h8.519V25.65c0 8.633-5.338 12.609-13.29 12.609zM40.37 24.288c.455 2.499 3.408 6.588 6.702 6.588s4.77-2.953 4.77-6.588c0-3.636-1.476-6.588-4.77-6.588-3.408 0-6.247 4.089-6.702 6.588zM186.36 22.81v14.767h-8.52V23.834c0-3.977-2.045-4.772-4.202-4.772-2.044 0-4.09.683-4.316 4.203v14.312h-7.383V23.834c0-3.977-2.045-4.772-4.203-4.772-2.158 0-4.316.795-4.316 4.772v13.743h-8.52v-25.33h4.658c.455 1.022 1.022 2.386 1.022 3.636 1.59-2.84 4.543-4.544 8.519-4.544 2.499 0 4.77.568 6.588 2.045l.909.795c1.477-1.25 3.86-2.84 8.064-2.84 5.793 0 11.7 2.84 11.7 11.47zM40.712.549v14.879h.34s3.068-4.203 8.86-4.203c5.225 0 10.45 4.543 10.45 13.176 0 8.519-6.588 13.858-13.516 13.858-8.405 0-15.107-6.93-15.107-15.334V.549zM89.44 35.078c-2.272 1.93-7.383 3.18-10.791 3.18-8.973 0-14.766-5.451-14.766-13.63 0-8.065 6.702-13.517 14.539-13.517 7.269 0 10.109 4.772 10.109 8.974 0 5.11-4.316 7.838-9.314 7.838-2.385 0-4.884-.682-6.701-2.158.227 3.179 3.748 5.792 7.61 5.792 1.704 0 4.657-.455 5.793-1.022zM72.97 20.994c.682 1.362 3.294 2.385 4.998 2.385 1.817 0 3.066-1.023 3.066-2.727 0-1.703-1.25-2.725-2.953-2.725-1.817 0-4.657 1.476-5.111 3.067z"
            />
          </g>
          <g>
            <path
              d="M197.286 28.794c.229 0 .447.016.655.048 2.4.365 3.486 2.766 3.486 5.666 0 2.647-.904 4.878-2.887 5.524a4.014 4.014 0 0 1-1.254.19c-2.957 0-5.421-3.548-5.816-5.715.395-2.166 2.958-5.713 5.816-5.713z"
            />
          </g>
        </g>
      </svg>
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
            class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md  focus:outline-none focus:bg-uberem-turqouise  transition duration-500 "
            :class="{
              'text-white bg-teal-700 hover:bg-teal-700 hover:text-white': isExactActive,
              'text-teal-100 hover:bg-uberem-turqouise hover:text-white': !isExactActive,
              'duration-150': isActive,
            }"
            @click="navigate"
          >
            <svg
              class="mr-4 h-6 w-6 text-teal-100 transition ease-in-out duration-150"
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
    <hr class="h-px mt-6 bg-uberem-turqouise border-none">
    <div class="mt-6 flex-1 h-0 overflow-y-auto">
      <nav class="px-2 space-y-1">
        <a
          href="https://t.me/uberemua"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-uberem-turqouise focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
          @click.prevent="chatWithManager"
        >
          <svg
            class="h-6 w-6 text-teal-100 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150"
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
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-uberem-turqouise focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-100 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150 transform rotate-90"
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
            Заказать через бот?
          </span>
        </a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    chatWithManager () {
      let redirect = false
      try {
        if (window.jivo_api) {
          window.jivo_api.open()
        } else {
          redirect = true
        }
      } catch (err) {
        redirect = true
      }

      if (redirect) {
        window.open('https://t.me/uberemua', '_blank').focus()
      }
    }
  }

}
</script>

<style scoped>

</style>
