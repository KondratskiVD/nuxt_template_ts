<template>
  <div class="mx-auto w-full max-w-sm">
    <div>
      <img
        class="h-24 w-auto mx-auto"
        src="/images/site/logo-jh.svg"
      >
      <h2 class="mt-4 text-3xl leading-9 font-bold text-white">
        {{ $t('auth.loginPage') }}
      </h2>
      <p class="mt-2 text-sm leading-5 text-gray-600 max-w">
        {{ $t('auth.orRegistrationLink') }}
        <n-link
          v-slot="{ href, route, navigate }"
          to="/auth/register"
        >
          <a
            :href="href"
            class="font-medium text-uberem-purple focus:outline-none focus:underline transition ease-in-out duration-150"
            @click="navigate"
          >
            {{ $t('auth.registrationLink') }}
          </a>
        </n-link>
      </p>
      <div
        v-if="$route.query.reset === 'done'"
        class="mt-3 text-center text-white"
      >
        {{ $t('auth.loginNewPassword') }}
      </div>
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
                type="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              >
            </div>
          </div>

          <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5 text-white">
              {{ $t('auth.password') }}
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
                  to="/auth/forgot-password"
                >
                  <a
                    :href="href"
                    class="font-medium text-uberem-purple focus:outline-none focus:underline transition ease-in-out duration-150"
                    @click="navigate"
                  >
                    {{ $t('auth.forgotLink') }}
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
                @click.prevent="login"
              >
                {{ $t('auth.loginButton') }}
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
    const password = ref('')
    const isLoading = ref(false)

    context.root.$store.dispatch('ui/setAuthImage', '/images/site/auth_hero.jpg')

    async function login () {
      isLoading.value = true
      try {
        await context.root.$axios.get(context.root.$config.baseURL + '/sanctum/csrf-cookie').then(() => {
          context.root.$auth.loginWith('local', {
            data: {
              device_name: 'account',
              phone: phone.value,
              password: password.value
            }
          })
            .catch((error) => {
              if (error.response &&
                error.response.data &&
                error.response.data.errors &&
                Object.values(error.response.data.errors).length > 0) {
                const errors: Array<string> = Object.values(error.response.data.errors)
                context.root.$toast.error(errors[0])
              } else {
                context.root.$toast.error(context.root.$t('errors.login_error').toString())
              }
            })
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message)
      } finally {
        isLoading.value = false
      }
    }

    return { login, phone, password, isLoading }
  }
})
</script>
