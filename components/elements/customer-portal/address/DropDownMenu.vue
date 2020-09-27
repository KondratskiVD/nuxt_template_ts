<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        id="options-menu"
        v-click-outside="() => {isOpenMenu = false}"
        class="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600"
        aria-label="Options"
        aria-haspopup="true"
        aria-expanded="true"
        @click="isOpenMenu = !isOpenMenu"
      >
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
          />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="isOpenMenu"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg z-10"
      >
        <div class="rounded-md bg-white shadow-xs">
          <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from '@vue/composition-api'
import Data from '@/interfaces/Data'

export default defineComponent({
  name: 'DropDownMenu',
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
    const isOpenMenu = ref(false)

    return { isOpenMenu }
  }
})
</script>

<style scoped>

</style>
