<template>
  <div class="relative bg-white shadow  sm:rounded-md">
    <div
      class="block bg-gray-dark px-4 py-4 flex items-center justify-between border-t border-gray-200 sm:px-6"
      :class="[headAdditionalClasses]"
    >
      <div class="text-lg leading-5 text-white">
        {{ title }}
      </div>
    </div>
    <div
      v-if="isRequesting && !pagination.total"
      class="px-4 py-8 flex justify-center items-center"
    >
      <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16" />
    </div>
    <template v-else>
      <slot v-if="pagination.total && pagination.total>0" />
      <div
        v-else
        class="flex justify-center items-center px-4 py-8"
      >
        <span>{{ $t('cleaning.text.records_not_found') }}</span>
      </div>
      <nav class="bg-gray-dark px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="block">
          <p
            class="text-sm leading-5 text-white"
            v-html="$t('pagination.fromTo', {
              from: pagination.from,
              to: pagination.to,
              total: pagination.total
            })"
          />
        </div>
        <div class="flex-1 flex justify-end">
          <nav class="relative z-0 inline-flex shadow-sm">
            <button
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium transition ease-in-out duration-150 focus:outline-none"
              :class="{
                'cursor-pointer text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500' : pagination.from > 1,
                'cursor-not-allowed text-gray-200' : pagination.from <= 1,
              }"
              aria-label="Previous"
              :disabled="pagination.from <= 1"
              @click="movePage(-1)"
            >
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <button
              class="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium transition ease-in-out duration-150 focus:outline-none"
              :class="{
                'cursor-pointer text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500' : pagination.to < pagination.total,
                'cursor-not-allowed text-gray-200' : pagination.to >= pagination.total,
              }"
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
            </button>
          </nav>
        </div>
      </nav>
      <div
        v-if="isRequesting"
        class="absolute w-full h-full top-0 left-0 bg-white bg-opacity-50 flex justify-center items-center"
      >
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16" />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import Data from '@/interfaces/Data'

export default defineComponent({
  name: 'PaginatedTable',
  components: {},
  metaInfo: {},
  props: {
    title: String,
    isRequesting: Boolean,
    pagination: Object,
    headAdditionalClasses: {
      type: String,
      default: 'sm:hidden'
    }
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    function movePage (page: number) {
      context.emit('move-page', page)
    }

    return { movePage }
  }
})
</script>

<style scoped>

</style>
