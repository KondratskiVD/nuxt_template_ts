<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-md">
    <div
      class="block sm:hidden bg-gray-dark px-4 py-4 flex items-center justify-between border-t border-gray-200 sm:px-6"
    >
      <div class="text-lg leading-5 text-white">
        {{ $t('cleaning.types.base') }}
      </div>
    </div>
    <ul>
      <li
        v-for="order in paginationList"
        :key="order.uuid"
        class="border-t border-gray-200"
      >
        <div
          class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
        >
          <div class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <div class="text-sm leading-5 font-medium text-red-dark truncate">
                <div class="flex">
                  <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>
                    <time :datetime="moment(order.datetime).format('YYYY-MM-DD HH:mm')">{{
                      moment(order.datetime).format('HH:mm DD/MM/YYYY')
                    }}</time>
                  </span>
                </div>
              </div>
              <div class="ml-2 flex-shrink-0 flex">
                <span
                  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                  :class="{
                    'bg-purple-100 text-purple-800': order.order_status === 'ordered',
                    'bg-teal-100 text-teal-800': order.order_status === 'done',
                    'bg-red-100 text-red-800': order.order_status === 'declined',
                  }"
                >
                  {{ $t(`cleaning.order_statuses.${order.order_status}`) }}
                </span>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <div class="mr-4 flex items-center text-sm leading-5 text-gray-500">
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
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                  {{ $t(`cleaning.order_base_types.${order.order_type}`) }}
                </div>
                <div
                  class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
                  :class="{
                    'opacity-50': !order.is_cleaner_ok
                  }"
                >
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
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span v-if="order.is_cleaner_ok">
                    Ольга Петровна
                  </span>
                  <span v-else>
                    {{ $t('cleaning.text.cleaner_not_assigned') }}
                  </span>
                </div>
              </div>
              <div
                class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0 transition-colors duration-500"
                :class="{
                  'opacity-25': !order.is_contact_ok,
                }"
              >
                <svg
                  class="flex-shrink-0 mr-1.5 h-5 w-5 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span v-if="order.is_contact_ok">
                  {{ $t('cleaning.text.time_approved') }}
                </span>
                <span v-else>
                  {{ $t('cleaning.text.time_not_approved') }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <nav class="bg-gray-dark px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div class="hidden sm:block">
        <p class="text-sm leading-5 text-white">
          Showing
          <span class="font-medium">1</span>
          to
          <span class="font-medium">10</span>
          of
          <span class="font-medium">20</span>
          results
        </p>
      </div>
      <div class="flex-1 flex justify-between sm:justify-end">
        <nav class="relative z-0 inline-flex shadow-sm">
          <a
            class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Previous"
            @click="movePage(-1)"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
            aria-label="Next"
            @click="movePage(1)"
          >
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { computed, defineComponent, onMounted, SetupContext, watch } from '@vue/composition-api'
import Data from '~/interfaces/Data'
import usePagination from '~/composables/listing/use-pagination'

interface CleaningBase {
  uuid: string
}

export default defineComponent({
  name: 'CleaningsBase',
  middleware: 'auth',
  layout () {
    return 'customer-portal'
  },
  components: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const isRefreshNow = computed(() => context.root.$store.getters['ui/isRefresh'])
    const { paginationList, movePage, fetchPaginatedData } = usePagination<CleaningBase>(
      context,
      {
        fetchRequest: (searchData: object) => {
          return context.root.$store.dispatch(
            'address/fetchCleaningsBase',
            {
              uuid: context.root.$route.params.uuid,
              params: searchData
            }
          )
        }
      }
    )

    watch(isRefreshNow, (newVal) => {
      if (newVal) {
        context.root.$store.dispatch('customer/fetchFullProfile', true)
          .catch(() => {
            context.root.$toast.error(context.root.$t('errors.request_error').toString())
          })
      }
    })

    watch(isRefreshNow, (newVal) => {
      if (newVal) {
        fetchPaginatedData()
      }
    })

    onMounted(() => {
      if (paginationList.value.length <= 0) {
        fetchPaginatedData()
      }
    })

    return { moment, movePage, paginationList }
  }
})
</script>

<style scoped>

</style>
