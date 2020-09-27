<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <img
        class="h-24 w-auto mx-auto"
        src="/images/site/logo-jh.svg"
      >
      <h2 class="mt-4 text-3xl leading-9 font-bold text-white text-center">
        {{ $t('auth.resetPasswordPage') }}
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
            </div>
          </div>

          <div class="mt-6">
            <label for="key" class="block text-sm font-medium leading-5 text-white">
              {{ $t('auth.key') }}
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="key"
                v-model="key"
                type="text"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-white">
              {{ $t('auth.newPassword') }}
            </label>
            <div class="mt-1 rounded-md shadow-sm">
              <input
                id="password"
                v-model="password"
                type="password"
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
                    class="font-medium text-uberem-purple focus:outline-none focus:underline transition ease-in-out duration-150"
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
                @click.prevent="resetPassword"
              >
                {{ $t('auth.resetButton') }}
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, SetupContext, onMounted } from '@vue/composition-api'
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
    const key = ref('')
    const password = ref('')
    const isLoading = ref(false)

    context.root.$store.dispatch('ui/setAuthImage', '/images/site/auth_hero3.jpg')

    async function resetPassword () {
      isLoading.value = true
      try {
        await context.root.$axios.put('reset-password', {
          phone: phone.value,
          key: key.value,
          password: password.value
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        }).then((response) => {
          phone.value = ''
          key.value = ''
          password.value = ''
          context.root.$toast.success(response.data.data.message)
          setTimeout(() => {
            context.root.$router.push({ path: '/auth/login', query: { reset: 'done' } })
          }, 2000)
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

    onMounted(() => {
      if (context.root.$route.query.key) {
        key.value = '' + context.root.$route.query.key
      }
      if (context.root.$route.query.p) {
        phone.value = ('+' + context.root.$route.query.p).substring(3)
      }
    })

    return { resetPassword, phone, key, password, isLoading }
  }
})
</script>
