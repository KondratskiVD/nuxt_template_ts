<template>
  <div
    class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
    :class="{
      'opacity-50': !order.is_cleaner_ok,
      'cursor-pointer': order.is_cleaner_ok && order.cleaner && order.cleaner.avatar
    }"
    @click="showCleanerProfile(order)"
  >
    <template
      v-if="order.is_cleaner_ok && order.cleaner && order.cleaner.avatar"
    >
      <div class="rounded-full w-6 h-6 overflow-hidden mr-1.5">
        <img
          class="w-full h-full object-cover"
          :src="$config.crmAppURL + '/storage/avatars/img/150x150/' + order.cleaner.avatar"
        >
      </div>
    </template>
    <svg
      v-else
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
    <span v-if="order.is_cleaner_ok && order.cleaner">
      {{ order.cleaner.name }}
    </span>
    <span v-else>
      {{ $t('cleaning.text.cleaner_not_assigned') }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@vue/composition-api'
import Data from '@/interfaces/Data'

export default defineComponent({
  name: 'CleanerTag',
  props: {
    order: {
      type: Object,
      required: true
    }
  },
  components: {},
  metaInfo: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    function showCleanerProfile (order: any) {
      if (order.is_cleaner_ok && order.cleaner && order.cleaner.avatar) {
        context.root.$store.dispatch('address/setCleanerProfile', order.cleaner)
      }
    }

    return { showCleanerProfile }
  }
})
</script>

<style scoped>

</style>
