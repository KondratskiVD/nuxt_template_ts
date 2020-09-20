<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div v-if="!profile" class="text-center p-8">
      {{ $t('errors.data_not_found') }}
      <br>
      {{ $t('errors.try_refresh') }}
    </div>
    <div
      v-else
      class="bg-white shadow overflow-hidden sm:rounded-md"
    >
      <ul v-if="profile.addresses.length">
        <li
          v-for="address in profile.addresses"
          :key="address.uuid"
          class="border-t border-gray-200"
        >
          <nuxt-link
            v-slot="{ href, route, navigate }"
            :to="{ path: 'address/' + address.uuid}"
          >
            <a
              :href="href"
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
              @click="navigate"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="text-sm leading-5 font-medium text-indigo-600 truncate">
                    {{ address.formatted }}
                  </div>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                    >
                      {{ $t('premises.' + address.premises_type) }}
                    </span>
                  </div>
                </div>
              <!--
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
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
                <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>
                    Closing on
                    <time datetime="2020-01-07">January 7, 2020</time>
                  </span>
                </div>
              </div>
              -->
              </div>
            </a>
          </nuxt-link>
        </li>
      </ul>
      <div
        v-else
        class="p-8 text-center text-gray-900"
      >
        {{ $t('customer.addressesNotFound') }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, SetupContext, watch } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  middleware: 'auth',
  layout () {
    return 'customer-portal'
  },
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const profile = computed(() => context.root.$store.getters['customer/fullProfile'])
    const isRefreshNow = computed(() => context.root.$store.getters['ui/isRefresh'])

    watch(isRefreshNow, (newVal) => {
      if (newVal) {
        context.root.$store.dispatch('customer/fetchFullProfile', true)
          .catch(() => {
            context.root.$toast.error(context.root.$t('errors.request_error').toString())
          })
      }
    })

    onMounted(() => {
      context.root.$store.dispatch('customer/fetchFullProfile')
    })

    return { profile }
  }
})
</script>
