<template>
  <div class="min-h-screen bg-gray-dark flex">
    <div class="lg:w-1/2 2xl:w-1/3 3xl:w-1/4 flex-1 flex flex-col lg:flex-none">
      <div class="flex-grow flex justify-center items-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <nuxt class="" />
      </div>
      <div class="border-t border-gray-200">
        <div class="flex">
          <div class="w-0 flex-1 flex border-r border-gray-200">
            <a
              :href="$config.connectLinkFB"
              class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-400 font-medium border border-transparent hover:bg-uberem-purple hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-500"
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
          <!--
          <div class="w-0 flex-1 flex border-r border-gray-200">
            <a
              :href="$config.connectLinkW"
              class="relative  w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5  text-gray-400 font-medium border border-transparent hover:bg-uberem-purple hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-500"
              target="_blank"
              title="whatsapp"
            >
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="m17.507 14.307-.009.075c-2.199-1.096-2.429-1.242-2.713-.816-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.293-.506.32-.578.878-1.634.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.576-.05-.997-.042-1.368.344-1.614 1.774-1.207 3.604.174 5.55 2.714 3.552 4.16 4.206 6.804 5.114.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345z"
                />
                <path
                  d="m20.52 3.449c-7.689-7.433-20.414-2.042-20.419 8.444 0 2.096.549 4.14 1.595 5.945l-1.696 6.162 6.335-1.652c7.905 4.27 17.661-1.4 17.665-10.449 0-3.176-1.24-6.165-3.495-8.411zm1.482 8.417c-.006 7.633-8.385 12.4-15.012 8.504l-.36-.214-3.75.975 1.005-3.645-.239-.375c-4.124-6.565.614-15.145 8.426-15.145 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99z"
                />
              </svg>
            </a>
          </div>-->
          <div class="w-0 flex-1 flex border-r border-gray-200">
            <a
              :href="$config.connectLinkT"
              class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-400 font-medium border border-transparent  hover:bg-uberem-purple hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-500"
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
          <div class="w-0 flex-1 flex border-r border-gray-200">
            <a
              :href="$config.connectLinkV"
              class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-400 font-medium border border-transparent hover:bg-uberem-purple hover:text-white focus:outline-none focus:shadow-outline-blue focus:z-10 transition ease-in-out duration-500"
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
          <div class="w-0 flex-1 flex relative">
            <a
              v-click-outside="()=>{showPhones = false}"
              class="cursor-pointer relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-400 font-medium border border-transparent hover:bg-uberem-purple hover:text-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-500"
              :class="{
                'bg-uberem-purple text-white': showPhones
              }"
              @click.prevent="showPhones = !showPhones"
            >
              <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
            </a>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div
                v-show="showPhones"
                class="absolute right-0 bottom-full transform mt-3 w-auto max-w-md px-0">
                <div class="shadow-lg">
                  <div class=" shadow-xs overflow-hidden">
                    <div class="z-20 relative grid gap-3 bg-white px-4 py-4 sm:gap-4 sm:p-4">
                      <a
                        :href="'tel:'+$config.phoneKS"
                        class="group -m-3 p-3 flex items-start space-x-2 rounded-lg hover:bg-gray-50 transition ease-in-out duration-500 whitespace-no-wrap text-gray-600"
                      >
                        <div class="space-y-1">
                          <p class="text-base leading-6 font-medium">
                            {{ $config.phoneTitleKS }}
                          </p>
                        </div>
                      </a>
                      <a
                        :href="'tel:'+$config.phoneVF"
                        class="group -m-3 p-3 flex items-start space-x-2 rounded-lg hover:bg-gray-50 transition ease-in-out duration-500 whitespace-no-wrap text-gray-600"
                      >
                        <div class="space-y-1">
                          <p class="text-base leading-6 font-medium">
                            {{ $config.phoneTitleVF }}
                          </p>
                        </div>
                      </a>
                      <a
                        :href="'tel:'+$config.phoneL"
                        class="group -m-3 p-3 flex items-start space-x-2 rounded-lg hover:bg-gray-50 transition ease-in-out duration-500 whitespace-no-wrap text-gray-600"
                      >
                        <div class="space-y-1">
                          <p class="text-base leading-6 font-medium">
                            {{ $config.phoneTitleL }}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="image"
        alt=""
      >
      <div class="made-by">
        Powered by <a target="_blank" href="https://uberem.com.ua/">Uberem</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext, ref } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  metaInfo: {
    title: 'My Uberem'
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const showPhones = ref(false)
    const image = computed(() => context.root.$store.getters['ui/authImage'])

    /* computed(() => {
      if (context.root.$route.meta.image) {
        return context.root.$route.meta.image
      }
      return '/images/site/auth_hero.jpg'
    }) */
    return { image, showPhones }
  }
})
</script>

<style lang="scss" scoped>
.made-by {
  // color: #323A45;
  color: #fff;
  padding: 8px 16px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;

  a {
    color: #C72825;
  }
}
</style>
