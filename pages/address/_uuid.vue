<template>
  <div v-if="address" class="px-4 sm:px-6 lg:px-8">
    <div class="lg:flex lg:items-center lg:justify-between mb-8">
      <div class="flex-1 min-w-0">
        <h2 class="text-base font-bold leading-7 text-gray-900 sm:text-lg sm:leading-9 ">
          {{ address.formatted }}
        </h2>
        <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
          <div class="mt-1 p-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-4">
            <svg
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
            {{ $t('premises.' + address.premises_type) }}
          </div>
          <div
            v-if="address.is_hoover"
            class="mt-1 p-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-4"
          >
            <svg
              viewBox="0 0 469.333 469.333"
              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              fill="currentColor"
              stroke="none"
            >
              <g>
                <path
                  d="M416,394.667V163.84c0-33.707-24.107-57.173-58.667-57.173H326.72c-21.333,0-38.72-18.987-38.72-42.347v-2.56C288,28.267,259.093,0,224.96,0H123.093c-32.96,0-69.76,26.56-69.76,62.08v87.787C21.973,153.28,0,175.253,0,204.587V352
c0,22.72,16.107,34.667,32,34.667c6.613,0,13.013-2.133,18.347-5.973c18.667,40,66.24,57.173,106.24,38.507
c19.733-9.28,34.88-26.133,41.813-46.827c1.387,0.64,2.773,0.96,4.267,0.96h113.92c16.853,0,35.413-19.093,35.413-36.373v-26.667
c0-17.28-9.387-35.093-25.067-47.893L195.947,160c-11.52-9.387-26.027-10.667-39.893-10.667H74.667V62.08
c0-22.613,26.453-40.747,48.427-40.747h101.76c22.613,0,41.707,18.56,41.707,40.427v2.56c0,35.093,26.987,63.68,60.053,63.68
h30.72c22.72,0,37.333,14.08,37.333,35.84v230.827c-35.413,0-53.333,18.24-53.333,54.187v9.813c0,5.867,4.8,10.667,10.667,10.667
h106.667c5.867,0,10.667-4.8,10.667-10.667v-9.813C469.333,412.907,451.413,394.667,416,394.667z M122.667,405.333
C90.24,405.333,64,379.093,64,346.667C64,314.24,90.24,288,122.667,288c32.427,0,58.667,26.24,58.667,58.667
C181.333,379.093,155.093,405.333,122.667,405.333z M155.947,170.667c11.627,0,20.48,0.96,26.667,5.973L313.6,279.04
c10.667,8.64,17.067,20.373,17.067,31.253v26.667c0,5.44-8.96,15.04-14.08,15.04h-113.92c-0.107,0-0.213,0-0.32,0
c0.107-1.813,0.32-3.627,0.32-5.333c0-44.16-35.84-80-80-80s-80,35.84-80,80c0,1.493,0.107,2.88,0.213,4.267
c-0.107,0.32-0.213,0.747-0.213,1.067c0,9.813-5.547,13.333-10.667,13.333S21.333,361.813,21.333,352V204.587
c0-23.467,20.48-33.92,40.64-33.92H155.947z M362.667,448c0.213-23.573,8.64-32,32-32H416c23.36,0,31.787,8.427,32,32H362.667z"
                />
              </g>
            </svg>
            {{ $t('cleaning.text.need_hoover') }}
          </div>
          <div
            class="mt-1 p-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-4 hover:bg-gray-200 transition-colors duration-500 rounded"
          >
            <a
              class="flex"
              :href="address.map_link"
              target="_blank"
            >
              <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              Google Map
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-4">
      <div class="">
        <div class="border-b border-gray-200">
          <nav class="flex -mb-px w-full">
            <nuxt-link
              v-for="cleaningPage in cleaningPages"
              :key="cleaningPage.slug"
              v-slot="{ href, route, navigate, isExactActive }"
              :to="cleaningPage.to"
            >
              <a
                :href="href"
                :style="{'max-width': (100/cleaningPages.length)+'%'}"
                class="group inline-flex items-center py-4 px-4 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 transition-colors duration-500 cursor-pointer"
                :class="{
                  'hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300': !isExactActive,
                  'border-gray-dark text-gray-dark  focus:text-gray-dark focus:border-gray-dark': isExactActive,
                }"
                @click="navigate"
              >
                <component
                  :is="cleaningPage.component"
                  class="-ml-0.5 mr-2 h-8 w-8 sm:h-5 sm:w-5 md:h-8 md:w-8   transition-colors duration-500"
                  :class="{
                    'text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600': !isExactActive,
                    'text-gray-dark group-hover:text-gray-dark group-focus:text-gray-dark': isExactActive,
                  }"
                />
                <span class="hidden sm:inline-block truncate">{{ cleaningPage.name }}</span>
              </a>
            </nuxt-link>
          </nav>
        </div>
      </div>
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onMounted, SetupContext, watch } from '@vue/composition-api'
import Data from '~/interfaces/Data'
import { Address } from '~/interfaces/Models/Profile'
import Cleaning1 from '~/components/elements/customer-portal/icons/Cleaning1.vue'
import Cleaning2 from '~/components/elements/customer-portal/icons/Cleaning2.vue'
import Cleaning3 from '~/components/elements/customer-portal/icons/Cleaning3.vue'
import Cleaning4 from '~/components/elements/customer-portal/icons/Cleaning4.vue'

export default defineComponent({
  name: 'AddressShow',
  middleware: 'auth',
  layout () {
    return 'customer-portal'
  },
  components: {
    Cleaning1,
    Cleaning2,
    Cleaning3,
    Cleaning4
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const isRefreshNow = computed(() => context.root.$store.getters['ui/isRefresh'])
    const address: ComputedRef<Address | null> = computed(() => {
      const profile = context.root.$store.getters['customer/fullProfile']
      if (profile.addresses && profile.addresses.length) {
        return profile.addresses.find((address: Address) => address.uuid === context.root.$route.params.uuid)
      }
      return null
    })
    const cleaningPages = [
      {
        slug: 'base',
        name: context.root.$t('cleaning.types.base').toString(),
        component: Cleaning1,
        to: context.root.localePath({
          name: 'address-uuid-cleanings-base',
          params: { uuid: context.root.$route.params.uuid }
        })
      },
      {
        slug: 'subscriptions',
        name: context.root.$t('cleaning.types.subscriptions').toString(),
        component: Cleaning2,
        to: context.root.localePath({
          name: 'address-uuid-subscriptions',
          params: { uuid: context.root.$route.params.uuid }
        })
      },
      {
        slug: 'general',
        name: context.root.$t('cleaning.types.complex').toString(),
        component: Cleaning3,
        to: context.root.localePath({
          name: 'address-uuid-cleanings-complex',
          params: { uuid: context.root.$route.params.uuid }
        })
      },
      {
        slug: 'dryCleaning',
        name: context.root.$t('cleaning.types.dryCleaning').toString(),
        component: Cleaning4,
        to: context.root.localePath({
          name: 'address-uuid-dry-cleanings',
          params: { uuid: context.root.$route.params.uuid }
        })
      }
    ]

    watch(isRefreshNow, (newVal) => {
      if (newVal) {
        context.root.$store.dispatch('customer/fetchFullProfile', true)
          .catch(() => {
            context.root.$toast.error(context.root.$t('errors.request_error').toString())
          })
      }
    })

    onMounted(() => {
      // context.root.$store.dispatch('customer/fetchFullProfile')
    })

    return { address, cleaningPages }
  }
})
</script>
