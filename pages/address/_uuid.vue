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
        to: context.root.localePath({ name: 'address-uuid-cleanings-base', params: { uuid: context.root.$route.params.uuid } })
      },
      {
        slug: 'subscriptions',
        name: context.root.$t('cleaning.types.subscriptions').toString(),
        component: Cleaning2,
        to: context.root.localePath({ name: 'address-uuid-subscriptions', params: { uuid: context.root.$route.params.uuid } })
      },
      {
        slug: 'general',
        name: context.root.$t('cleaning.types.complex').toString(),
        component: Cleaning3,
        to: context.root.localePath({ name: 'address-uuid-cleanings-complex', params: { uuid: context.root.$route.params.uuid } })
      },
      {
        slug: 'dryCleaning',
        name: context.root.$t('cleaning.types.dryCleaning').toString(),
        component: Cleaning4,
        to: context.root.localePath({ name: 'address-uuid-dry-cleanings', params: { uuid: context.root.$route.params.uuid } })
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
