<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div v-if="!profile" class="text-center p-8">
      {{ $t('errors.data_not_found') }}
      <br>
      {{ $t('errors.try_refresh') }}
    </div>
    <div
      v-else
    >
      <div class="md:flex md:items-center md:justify-between mb-8">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
            {{ profile.name }}
          </h2>
        </div>
      </div>
      <section>
        <div>
          <!--
          class="group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
          -->
          <a
            v-if="profile.phone"
            v-clipboard:copy="profile.phone"
            v-clipboard:success="()=>{$toast.success($t('success.copied'))}"
            v-clipboard:error="()=>{$toast.error($t('errors.copy_error'))}"
            class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
          >
            <svg
              class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span class="truncate">
              {{ profile.phone }}
            </span>
          </a>
          <a
            v-if="profile.phone2"
            v-clipboard:copy="profile.phone2"
            v-clipboard:success="()=>{$toast.success($t('success.copied'))}"
            v-clipboard:error="()=>{$toast.error($t('errors.copy_error'))}"
            class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
          >
            <svg
              class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            <span class="truncate">
              {{ profile.phone2 }}
            </span>
          </a>
          <a
            v-if="profile.email"
            v-clipboard:copy="profile.email"
            v-clipboard:success="()=>{$toast.success($t('success.copied'))}"
            v-clipboard:error="()=>{$toast.error($t('errors.copy_error'))}"
            class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
          >
            <svg
              class="flex-shrink-0 -ml-1 mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span class="truncate">
              {{ profile.email }}
            </span>
          </a>
        </div>
        <div class="mt-8">
          <h3
            id="projects-headline"
            class="px-3 text-xs leading-4 font-semibold text-gray-500 uppercase tracking-wider"
          >
            {{ $t('customer.addresses') }}
          </h3>
          <div class="mt-1" role="group" aria-labelledby="projects-headline">
            <nuxt-link
              v-for="address in profile.addresses"
              v-slot="{ href, route, navigate }"
              :key="address.uuid"
              :to="{ path: 'address/' + address.uuid}"
            >
              <a
                :href="href"
                class="mt-1 group flex items-center px-3 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150 cursor-pointer"
                @click="navigate"
              >
                <svg
                  class="flex-shrink-0 -ml-1 mr-1 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="truncate">
                  {{ address.formatted }}
                </span>
              </a>
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, computed, watch, onMounted } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  middleware: 'auth',
  layout () {
    return 'customer-portal'
  },
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
