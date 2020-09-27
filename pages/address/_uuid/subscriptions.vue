<template>
  <div>
    <paginated-table
      :pagination="pagination"
      :is-requesting="isFetchingRequest"
      :title="$t('cleaning.types.subscriptions')"
      @move-page="movePage($event)"
    >
      <template v-slot:default>
        <ul>
          <li
            v-for="order in paginationList"
            :key="order.uuid"
            class="border-t border-gray-200"
          >
            <div
              class="block bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="text-sm leading-5 font-medium text-uberem-purple truncate">
                    <div class="flex">
                      <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>
                        <time :datetime="moment(order.datetime).utc().format('YYYY-MM-DD HH:mm')">{{
                          moment(order.datetime).utc().format('HH:mm DD/MM/YYYY')
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
                    <cleaner-tag :order="order" />
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
      </template>
    </paginated-table>
    <div class="mb-4 pt-4 mx-8 border-b-2 border-gray-900" />
    <paginated-table
      :pagination="paginationPayment"
      :is-requesting="isFetchingRequestPayment"
      :title="$t('cleaning.types.subscriptionPayments')"
      head-additional-classes=""
      @move-page="movePagePayment($event)"
    >
      <template v-slot:default>
        <ul>
          <li
            v-for="payment in paginationListPayment"
            :key="payment.uuid"
            class="border-t border-gray-200"
          >
            <div
              class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <div class="px-4 py-4 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="text-sm leading-5 font-medium text-uberem-purple truncate">
                    <div class="flex">
                      <svg
                        class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        {{ payment.sum }}&nbsp;{{ $t(`cleaning.text.currency`) }}
                      </span>
                    </div>
                  </div>
                  <div class="ml-2 flex-shrink-0 flex">
                    <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-900 text-gray-100"
                    >
                      {{ $t(`cleaning.payment_types.${payment.type}`) }},&nbsp;
                      <time :datetime="moment(payment.datetime).utc().format('YYYY-MM-DD')">{{
                        moment(payment.datetime).utc().format('DD/MM/YYYY')
                      }}</time>
                    </span>
                  </div>
                </div>
                <template
                  v-if="payment.meta"
                >
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <template v-if="payment.meta.sub_calculator_type === 'apartment'">
                        <div
                          v-if="payment.meta.sub_additional_services"
                          class="mt-2 mr-4 flex items-center text-sm leading-5 text-gray-500"
                        >
                          <span
                            v-tooltip="$t(`cleaning.text.sub_additional_services`)"
                            class="whitespace-no-wrap flex"
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
                                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {{ payment.meta.sub_additional_services }}
                          </span>
                        </div>
                        <div
                          v-if="payment.meta.sub_basic"
                          class="mt-2 mr-4 flex items-center text-sm leading-5 text-gray-500"
                        >
                          <span
                            v-tooltip="$t(`cleaning.text.sub_basic`)"
                            class="whitespace-no-wrap flex"
                          >
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 1000 1000"
                              stroke="none"
                            >
                              <g>
                                <path
                                  d="M599,755.5c-5.6,22.3-34.1,71.1-79.5,136.9c12.4,2.9,24.3,6.1,36.4,8.3c22,4,44.1,7.1,66.1,11.1c7.2,1.3,10.9-1.3,14.7-7c44.2-65.8,79.9-136.1,109.8-209.3c11.7-28.7,21.7-58,32.5-87c1.1-3,2.2-5.9,3.5-9.4c23.7,8.2,46.9,16.2,71.1,24.5c-4.3,12.7-8.3,24.8-12.6,36.7c-36.4,101.1-81.7,197.8-142.1,287c-5,7.4-10.7,14.4-15.6,21.8c-11.4,17.1-27.3,22.4-47.2,20.5c-76.8-7.3-151.3-24.8-223.4-51.9c-131.2-49.4-244.2-125-333.7-234c-10.7-13.1-13.8-27.5-6.8-42.9c6.8-14.8,19.7-21.5,35.6-21.7c68.2-0.9,133.9-14.6,197.5-38.6c57.5-21.7,109.9-51.9,150.3-99.5c11.7-13.8,21.2-29.4,32.3-45c20.8,11.7,42.2,23.8,65.7,37c-12.2,17.6-23,35.3-35.8,51.4c-31.2,39.5-70.6,69.4-114.2,93.7c-65.8,36.6-136.9,57.7-210.9,69.7c-1.5,0.2-2.9,0.5-6.5,1.2c10.6,9.7,19.5,18.8,29.3,26.7c18.4,14.9,37.1,29.4,56.2,43.4c3.7,2.7,10.2,3.9,14.8,2.9c38-8.6,72.8-23.8,102-50.8c-2.5,13.3-26.5,47-60.2,84.6c21.2,10.5,42.5,19.8,62.5,31.5c25.8,15.2,50.5,11,75.8,0.1c42.8-18.5,79.5-46.1,114.6-76.2C586.8,766.4,592.3,761.4,599,755.5L599,755.5L599,755.5z M876.3,560.4C756.2,507,637,453.9,516.9,400.5c9.9-23.1,25.5-40.6,46.6-53c35.2-20.7,72-23.1,109.3-6.8c48,20.9,96,42,143.5,64c55.8,25.9,82.1,84,65.1,141.7C880,550.9,878.2,555.2,876.3,560.4L876.3,560.4L876.3,560.4z M823,351.1c-37.8-16.8-75.2-33.5-112.5-50.1c-0.8-0.4-1.3-1.2-2.4-2.2c1.4-2.8,2.7-5.7,4.2-8.4c46.8-87.7,93.5-175.3,140.3-263c7.8-14.7,16.9-19.1,33.8-16.6c15.5,2.3,28.6,8.9,38.7,21c6.6,8,8.3,16.7,4.6,26.8c-34.9,96-69.6,192.2-104.4,288.2C824.8,347.8,824.1,348.9,823,351.1L823,351.1L823,351.1z"
                                />
                              </g>
                            </svg>
                            {{ payment.meta.sub_basic }}
                          </span>
                        </div>
                        <div
                          v-if="payment.meta.sub_maintain"
                          class="mt-2 mr-4 flex items-center text-sm leading-5 text-gray-500"
                        >
                          <span
                            v-tooltip="$t(`cleaning.text.sub_maintain`)"
                            class="whitespace-no-wrap flex"
                          >
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="currentColor"
                              viewBox="0 0 463 463"
                              stroke="none"
                            >
                              <path
                                d="m355.256,145.405c-34.083-19.724-60.085-50.573-73.704-87.254 4.229-2.018 8.958-3.151 13.947-3.151h15.971c0.008,0 0.015,0.002 0.023,0.002 0.051,0 0.102-0.008 0.153-0.009 0.234-0.005 0.465-0.017 0.693-0.042 0.079-0.009 0.157-0.025 0.236-0.036 0.216-0.031 0.43-0.07 0.639-0.119 0.034-0.008 0.069-0.011 0.103-0.019l25.941-6.485c6.912-1.729 11.74-7.912 11.74-15.037v-11.509c0-7.125-4.828-13.309-11.741-15.037l-25.94-6.485c-0.04-0.01-0.081-0.014-0.121-0.024-0.146-0.034-0.293-0.062-0.442-0.087-0.11-0.019-0.221-0.037-0.331-0.051-0.124-0.015-0.25-0.026-0.376-0.035-0.136-0.01-0.271-0.018-0.406-0.021-0.047,2.45463e-15-0.093-0.006-0.142-0.006h-98.745c-10.551,0-20.471,4.109-27.931,11.569l-56.97,56.971c-4.449,4.449-5.768,11.079-3.36,16.892s8.028,9.568 14.32,9.568h29.187v9h-0.5c-8.547,0-15.5,6.953-15.5,15.5v22.273c0,10.239-2.784,20.291-8.052,29.069l-20.639,34.398c-12.632,21.054-19.31,45.161-19.31,69.714v132.546c0,30.603 24.897,55.5 55.5,55.5h96c30.603,0 55.5-24.897 55.5-55.5v-132.546c0-24.553-6.677-48.66-19.31-69.714l-20.639-34.398c-5.268-8.778-8.052-18.83-8.052-29.069v-22.273c0-8.547-6.953-15.5-15.5-15.5h-0.5v-9h8.5c4.142,0 7.5-3.358 7.5-7.5 0-7.219 2.369-13.893 6.365-19.292 15.273,37.82 42.778,69.577 78.378,90.18 1.183,0.685 2.475,1.01 3.75,1.01 2.589,0 5.108-1.343 6.498-3.745 2.076-3.586 0.852-8.174-2.733-10.248zm-19.257-123.659v11.508c0,0.23-0.156,0.43-0.378,0.485l-16.622,4.155v-20.788l16.621,4.155c0.224,0.055 0.379,0.255 0.379,0.485zm-199.828,191.212l20.639-34.398c5.073-8.455 8.32-17.844 9.585-27.56h33.604v144.037c-1.835-0.565-3.396-1.343-5.197-2.244-4.268-2.135-9.579-4.792-19.346-4.792-9.765,0-15.076,2.658-19.343,4.793-3.721,1.862-6.409,3.207-12.631,3.207-6.225,0-8.914-1.345-12.636-3.208-3.02-1.511-6.572-3.279-11.847-4.186v-13.652c-4.26326e-14-21.836 5.938-43.274 17.172-61.997zm71.328,186.042c4.687,0 8.5,3.813 8.5,8.5v8.5h-17v-8.5c0-4.687 3.813-8.5 8.5-8.5zm48,49h-96c-22.332,0-40.5-18.168-40.5-40.5v-103.517c1.808,0.564 3.356,1.334 5.136,2.225 4.268,2.135 9.58,4.792 19.347,4.792 9.766,0 15.076-2.658 19.344-4.793 3.721-1.862 6.409-3.207 12.63-3.207 6.224,0 8.912,1.345 12.634,3.208 3.032,1.517 6.6,3.293 11.909,4.196v73.096c0,0.575 0.071,1.132 0.193,1.669-9.39,3.081-16.193,11.924-16.193,22.331v16c0,4.142 3.358,7.5 7.5,7.5h32c4.142,0 7.5-3.358 7.5-7.5v-16c0-10.407-6.803-19.25-16.193-22.331 0.122-0.537 0.193-1.094 0.193-1.669v-73.117c5.241-0.91 8.776-2.671 11.785-4.176 3.723-1.862 6.413-3.208 12.639-3.208 6.241,0 8.937,1.346 12.668,3.21 4.273,2.134 9.592,4.79 19.37,4.79s15.097-2.656 19.371-4.79c1.791-0.895 3.347-1.668 5.168-2.233v103.524c-0.001,22.332-18.169,40.5-40.501,40.5zm23.329-235.042c11.234,18.724 17.172,40.162 17.172,61.997v13.65c-5.286,0.906-8.844,2.674-11.87,4.185-3.731,1.864-6.427,3.21-12.668,3.21-6.241,0-8.937-1.346-12.668-3.21-4.273-2.134-9.592-4.79-19.37-4.79-9.768,0-15.081,2.657-19.349,4.792-1.76,0.881-3.293,1.643-5.074,2.205v-143.997h33.604c1.265,9.715 4.512,19.104 9.585,27.56l20.638,34.398zm-30.829-93.458v16.5h-81v-16.5c0-0.276 0.224-0.5 0.5-0.5h80c0.276,0 0.5,0.224 0.5,0.5zm-16-15.5h-49v-9h49v9zm16.592-24h-109.778c-0.179,0-0.334,0-0.462-0.309-0.127-0.309-0.018-0.418 0.108-0.545l56.971-56.971c4.628-4.627 10.78-7.175 17.324-7.175h91.245v25h-8.5c-23.64,0-43.302,17.359-46.908,40z"
                              />
                            </svg>
                            {{ payment.meta.sub_maintain }}
                          </span>
                        </div>
                      </template>
                      <template v-else-if="payment.meta.sub_calculator_type === 'home'">
                        <div class="mr-4 flex items-center text-sm leading-5 text-gray-500">
                          <span
                            v-tooltip="$t(`cleaning.text.sub_hours`)"
                            class="whitespace-no-wrap flex"
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {{ payment.meta.sub_hours }}{{ $t(`cleaning.text.hours`) }}
                          </span>
                        </div>
                      </template>
                    </div>
                    <div
                      class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0 transition-colors duration-500"
                      :class="{
                      }"
                    >
                      <span
                        v-tooltip="$t(`cleaning.text.sub_end`)"
                        class="whitespace-no-wrap flex"
                      >
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span v-if="moment(payment.meta.end_date, 'YYYY-MM-DD hh:mm:ss').isValid()">
                          <time :datetime="moment(payment.meta.end_date, 'YYYY-MM-DD hh:mm:ss').format('YYYY-MM-DD')">{{
                            moment(payment.meta.end_date, 'YYYY-MM-DD hh:mm:ss').format('DD/MM/YYYY')
                          }}</time>
                        </span>
                      </span>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </li>
        </ul>
      </template>
    </paginated-table>
  </div>
</template>

<script lang="ts">
import moment from 'moment'
import { computed, defineComponent, onMounted, SetupContext, watch } from '@vue/composition-api'
import Data from '~/interfaces/Data'
import usePagination from '~/composables/listing/use-pagination'
import PaginatedTable from '~/components/elements/customer-portal/PaginatedTable.vue'
import CleanerTag from '~/components/elements/customer-portal/address/CleanerTag.vue'

interface CleaningBase {
  uuid: string
}

export default defineComponent({
  name: 'CleaningsSubscriptions',
  middleware: 'auth',
  components: {
    PaginatedTable,
    CleanerTag
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const isRefreshNow = computed(() => context.root.$store.getters['ui/isRefresh'])
    const {
      isFetchingRequest,
      paginationList,
      pagination,
      movePage,
      fetchPaginatedData
    } = usePagination<CleaningBase>(
      context,
      {
        fetchRequest: (searchData: object) => {
          return context.root.$store.dispatch(
            'address/fetchOrdersSubscriptions',
            {
              uuid: context.root.$route.params.uuid,
              params: searchData
            }
          )
        }
      }
    )
    const paymentPagination = usePagination<CleaningBase>(
      context,
      {
        fetchRequest: (searchData: object) => {
          return context.root.$store.dispatch(
            'address/fetchSubscriptionPayments',
            {
              uuid: context.root.$route.params.uuid,
              params: searchData
            }
          )
        }
      }
    )
    const isFetchingRequestPayment = paymentPagination.isFetchingRequest
    const paginationListPayment = paymentPagination.paginationList
    const paginationPayment = paymentPagination.pagination
    const movePagePayment = paymentPagination.movePage
    const fetchPaginatedDataPayment = paymentPagination.fetchPaginatedData

    watch(isRefreshNow, (newVal) => {
      if (newVal) {
        fetchPaginatedData()
        fetchPaginatedDataPayment()
      }
    })

    onMounted(() => {
      if (paginationList.value.length <= 0) {
        fetchPaginatedData()
        fetchPaginatedDataPayment()
      }
    })

    return {
      moment,
      movePage,
      isFetchingRequest,
      paginationList,
      pagination,
      movePagePayment,
      isFetchingRequestPayment,
      paginationListPayment,
      paginationPayment
    }
  }
})
</script>

<style scoped>

</style>
