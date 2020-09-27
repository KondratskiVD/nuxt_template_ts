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
          :href="$config.botT"
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
        <a
          :href="'tel:'+$config.phoneKS"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-uberem-turqouise focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-100 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="ml-4">
            {{ $config.phoneTitleKS }}
          </span>
        </a>
        <a
          :href="'tel:'+$config.phoneVF"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-uberem-turqouise focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-100 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="ml-4">
            {{ $config.phoneTitleVF }}
          </span>
        </a>
        <a
          :href="'tel:'+$config.phoneL"
          target="_blank"
          class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-uberem-turqouise focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150"
        >
          <svg
            class="h-6 w-6 text-teal-100 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="ml-4">
            {{ $config.phoneTitleL }}
          </span>
        </a>
        <div class="">
          <div class="flex">
            <div class="w-0 flex-1 flex ">
              <a
                :href="$config.connectLinkFB"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-teal-200 font-medium border border-transparent hover:bg-uberem-turqouise rounded-md hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-150"
                target="_blank"
                title="facebook"
              >
                <svg class="w-5 h-5" viewBox="0 0 7 12" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4 11.99H1.33V6.33H0V4.15H1.33V2.84C1.33 1.06 2.09 0 4.22 0H6V2.18H4.89C4.06 2.18 4 2.49 4 3.05V4.15H6.01L5.78 6.33H4V11.99Z"
                  />
                </svg>
              </a>
            </div>
            <div class="w-0 flex-1 flex">
              <a
                :href="$config.connectLinkT"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-teal-200 font-medium border border-transparent  hover:bg-uberem-turqouise rounded-md hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-150"
                target="_blank"
                title="Telegram"
              >
                <svg class="w-5 h-5" viewBox="-21 -51 682.66669 682" fill="currentColor">
                  <path
                    d="m640-1.667969-640 272.039063 167.777344 66.585937 59.726562 224.507813 109.976563-106.558594 178.917969 123.570312zm-403.78125 367.402344-6.457031 58.535156-24.800781-93.234375 435.039062-332.703125zm0 0"
                  />
                </svg>
              </a>
            </div>
            <div class="w-0 flex-1 flex">
              <a
                :href="$config.connectLinkV"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-teal-200 font-medium border border-transparent hover:bg-uberem-turqouise rounded-md hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-150"
                target="_blank"
                title="Viber"
              >
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939-13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s-2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016-4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 5.183-4.667 5.394-.271.09-2.786.737-5.944.526z"
                  />
                  <path
                    d="m12.222 4.297c-.385 0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c-.032-4.115-2.718-6.501-6.058-6.524z"
                  />
                  <path
                    d="m16.151 10.193c-.009.398.58.417.585.014.049-2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z"
                  />
                  <path
                    d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014-.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337-1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517 1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z"
                  />
                  <path
                    d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766-2.096-2.03-2.166-.385-.023-.421.582-.032.605z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
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
