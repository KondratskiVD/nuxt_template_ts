<template>
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="md:flex md:items-center md:justify-between mb-8">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {{ $t('adminPortal.password.title') }}
        </h2>
      </div>
    </div>
    <div
      class="bg-white py-8 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24"
      :class="{
        'opacity-75': isLoading
      }"
    >
      <div class="relative max-w-xl mx-auto">
        <svg
          class="absolute left-full transform translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <svg
          class="absolute right-full bottom-0 transform -translate-x-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
        >
          <defs>
            <pattern
              id="85737c0e-0916-41d7-917f-596dc7edfa27"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
        <div>
          <form
            action="#"
            method="POST"
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            @submit.prevent="submitForm"
          >
            <div>
              <label for="newPassword" class="block text-sm font-medium leading-5 text-gray-700">
                {{ $t('adminPortal.password.newPassword') }}
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="newPassword"
                  v-model="newPassword"
                  type="password"
                  class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                >
              </div>
            </div>
            <div>
              <label for="repeatPassword" class="block text-sm font-medium leading-5 text-gray-700">
                {{ $t('adminPortal.password.repeatPassword') }}
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="repeatPassword"
                  v-model="repeatPassword"
                  type="password"
                  class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                >
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="oldPassword" class="block text-sm font-medium leading-5 text-gray-700">{{
                $t('adminPortal.password.oldPassword')
              }}</label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="oldPassword"
                  v-model="oldPassword"
                  type="password"
                  class="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                >
              </div>
            </div>
            <div class="sm:col-span-2">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <span
                    role="checkbox"
                    tabindex="0"
                    aria-checked="false"
                    class=" relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline"
                    :class="{
                      'bg-red-dark':removeSessions,
                      'bg-gray-200':!removeSessions,
                    }"
                    @click="removeSessions = !removeSessions"
                  >
                    <span
                      aria-hidden="true"
                      class="inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
                      :class="{
                        'translate-x-5':removeSessions,
                        'translate-x-0':!removeSessions,
                      }"
                    />
                  </span>
                </div>
                <div class="ml-3">
                  <p
                    class="text-base leading-6 text-gray-500 cursor-pointer"
                    @click="removeSessions = !removeSessions"
                  >
                    {{ $t('adminPortal.password.logoutFromOthers') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="sm:col-span-2">
              <span class="w-full inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-dark hover:shadow-lg focus:outline-none focus:shadow-outline-indigo transition-all ease-in-out duration-500"
                >
                  {{ $t('adminPortal.password.change') }}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext, ref } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  middleware: 'auth',
  name: 'PasswordChange',
  layout () {
    return 'customer-portal'
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const newPassword = ref('')
    const repeatPassword = ref('')
    const oldPassword = ref('')
    const removeSessions = ref(true)
    const isLoading = ref(false)

    async function submitForm () {
      let error = false

      if (newPassword.value === '' ||
        repeatPassword.value === '' ||
        oldPassword.value === ''
      ) {
        context.root.$toast.error(context.root.$t('adminPortal.password.fieldsEmpty').toString())
        return
      }

      if (newPassword.value !== repeatPassword.value) {
        error = true
        context.root.$toast.error(context.root.$t('adminPortal.password.passwordsChangeNotMatch').toString())
      }

      if (error) {
        return
      }
      isLoading.value = true
      try {
        await context.root.$axios.post('change-password', {
          new_password: newPassword.value,
          password: oldPassword.value,
          remove_sessions: removeSessions.value ? 1 : 0
        }).then(() => {
          context.root.$toast.success(context.root.$t('adminPortal.password.successChange').toString())
          newPassword.value = ''
          repeatPassword.value = ''
          oldPassword.value = ''
          removeSessions.value = true
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

    return { newPassword, repeatPassword, oldPassword, removeSessions, isLoading, submitForm }
  }
})
</script>
