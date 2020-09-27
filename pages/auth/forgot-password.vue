<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <img
        class="h-24 w-auto mx-auto"
        src="/images/site/logo-jh.svg"
      >
      <h2 class="mt-4 text-3xl leading-9 font-bold text-white text-center">
        {{ $t('auth.forgotPasswordPage') }}
      </h2>
    </div>

    <div
      class="mt-8"
      :class="{'loading opacity-50': isLoading}"
    >
      <div class="mt-6">
        <form action="#" method="POST">
          <div>
            <label for="phone" class="block text-sm font-medium leading-5 text-white">
              {{ $t('auth.login') }}
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="phone"
                v-model="phone"
                v-mask="'+380 (##) ###-##-##'"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
              <div class="text-right text-sm">
                <n-link
                  v-slot="{ href, route, navigate }"
                  to="/auth/login"
                >
                  <a
                    :href="href"
                    class="font-medium text-uberem-purple-light focus:outline-none focus:underline transition ease-in-out duration-150"
                    @click="navigate"
                  >
                    {{ $t('auth.loginLink') }}
                  </a>
                </n-link>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <span class="block w-full rounded-md shadow-sm">
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-uberem-purple focus:outline-none focus:shadow-uberem-purple active:bg-uberem-purple transition duration-150 ease-in-out"
                @click.prevent="sendKey"
              >
                {{ $t('auth.forgotButton') }}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext } from '@vue/composition-api'
import { mask } from 'vue-the-mask'
import Data from '~/interfaces/Data'

export default defineComponent({
  layout () {
    return 'auth'
  },
  directives: { mask },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const phone = ref('+380 (')
    const isLoading = ref(false)

    context.root.$store.dispatch('ui/setAuthImage', '/images/site/auth_hero2.jpg')

    async function sendKey () {
      isLoading.value = true
      try {
        await context.root.$axios.post('reset-password', {
          phone: phone.value
        }).then(() => {
          context.root.$router.push({ path: '/auth/reset-password', query: { p: phone.value } })
          context.root.$toast.success(context.root.$t('auth.resetText').toString())
          phone.value = ''
        }).catch((error) => {
          if (error.response &&
            error.response.data &&
            error.response.data.errors &&
            Object.values(error.response.data.errors).length > 0) {
            const errors: Array<string> = Object.values(error.response.data.errors)
            context.root.$toast.error(errors[0])
          } else {
            context.root.$toast.error(context.root.$t('errors.request_error').toString())
          }
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message)
      } finally {
        isLoading.value = false
      }
    }

    return { sendKey, phone, isLoading }
  }
})
</script>
