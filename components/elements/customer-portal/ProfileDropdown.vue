<template>
  <!-- Profile dropdown -->
  <div class="ml-3 relative">
    <div>
      <button
        id="user-menu"
        class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-cool-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-cool-gray-100 transition-colors duration-500"
        aria-label="User menu"
        aria-haspopup="true"
        @click="isOpenProfileMenu = !isOpenProfileMenu"
      >
        <img
          class="h-8 w-8 rounded-full"
          src="/images/site/avatar.png"
          alt=""
        >
        <p class="hidden ml-3 text-gray-dark text-sm leading-5 font-medium lg:block">
          {{ user.name }}
        </p>
        <svg
          class="hidden flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400 lg:block"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
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
        v-show="isOpenProfileMenu"
        class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
      >
        <div
          class="py-1 rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <n-link
            v-slot="{ href, navigate }"
            to="/profile"
            @click.native="isOpenProfileMenu=false"
          >
            <a
              :href="href"
              class="group flex px-4 py-2 text-sm text-gray-dark hover:bg-gray-light transition-colors ease-in-out duration-150"
              role="menuitem"
              @click="navigate"
            >
              <svg
                class="h-5 w-5 text-gray-dark group-hover:text-red-dark transition ease-in-out duration-150 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Профиль
            </a>
          </n-link>
          <a
            href="#"
            class="group flex px-4 py-2 text-sm text-gray-dark hover:bg-gray-light transition-colors ease-in-out duration-150"
            role="menuitem"
            @click.prevent="isOpenProfileMenu=false; logout()"
          >
            <svg
              class="h-5 w-5 text-gray-dark group-hover:text-red-dark transition ease-in-out duration-150 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>{{ $t('adminPortal.general.logout') }}</span>
          </a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, SetupContext } from '@vue/composition-api'
import Data from '@/interfaces/Data'

export default defineComponent({
  name: 'ProfileDropdown',
  components: {},
  metaInfo: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const isOpenProfileMenu = ref(false)
    const user = computed(() => context.root.$store.getters.user)

    function logout () {
      context.root.$auth.logout()
        .then(() => {
          context.root.$store.dispatch('customer/clearFullProfile')
          context.root.$store.dispatch('ui/toggleSide', false)
          context.root.$store.dispatch('ui/toggleRefresh', false)
          window.location.reload()
        })
    }

    return { user, logout, isOpenProfileMenu }
  }
})
</script>

<style scoped>

</style>
