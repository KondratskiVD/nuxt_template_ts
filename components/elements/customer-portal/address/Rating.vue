<template>
  <div>
    <span v-if="order.review !== null" @click="showModal=true">
      <svg class="flex-shrink-0 inline mr-1 h-6 w-6 cursor-pointer text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    </span>
    <star-rating
      v-model="boundRating"
      :read-only="!!order.review"
      :star-size="20"
      :show-rating="false"
      inactive-color="#e9e9e9"
      class="float-right"
      @rating-selected="showModal=true"
    />
    <transition>
      <div v-if="showModal === true" class="modal-mask">
        <div v-if="!isLoading" class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div v-if="order.review == null" class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="sm:text-lg text-sm leading-6 font-medium text-gray-900">
                    Оставьте пожалуйста ваш отзыв
                    <span @click="showModal = false; boundRating = 0">
                      <svg class="cursor-pointer flex-shrink-0 float-right mr-1 h-6 w-6 text-gray-400 bg-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </h3>
                  <div class="mt-2">
                    <div class="rounded-md shadow-sm">
                      <textarea
                        v-model="comment"
                        rows="3"
                        class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                    </div>
                    <div class="flex justify-between mt-2 ">
                      <star-rating
                        v-model="boundRating"
                        :read-only="!!order.review"
                        :star-size="20"
                        :show-rating="false"
                        inactive-color="#e9e9e9"
                        class="float-left"
                      />
                      <span v-if="order.review === null" class="text-xs text-gray-500" :class="{'text-red-500': $v.comment.maxLength.$invalid }">
                        {{ comment.length }} / 3000
                      </span>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Мы учтем ваши пожелания.
                    </p>
                    <p v-if="$v.comment.required.$invalid" class="text-red-500">
                      Поле должно быть заполнено.
                    </p>
                    <p v-if="$v.comment.maxLength.$invalid" class="text-red-500">
                      Может быть не более 3000 символов.
                    </p>
                  </div>
                </div>

                <div v-else class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="sm:text-lg text-sm leading-6 font-medium text-gray-900">
                    Ваш комментарий
                    <span @click="showModal = false">
                      <svg class="cursor-pointer flex-shrink-0 float-right mr-1 h-6 w-6 text-gray-400 bg-gray-100" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                  </h3>
                  <div class="mt-2">
                    <div class="space-y-1">
                      <p class="text-sm leading-5 text-gray-500">
                        {{ order.review.comment }}
                      </p>
                    </div>
                    <div class="flex justify-between mt-2 ">
                      <star-rating
                        v-model="boundRating"
                        :read-only="!!order.review"
                        :star-size="20"
                        :show-rating="false"
                        inactive-color="#e9e9e9"
                        class="float-left"
                      />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Мы учтем ваши пожелания.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="order.review === null" class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <div class="mt-3 inline flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                  @click="sentRating"
                >
                  <svg class="flex-shrink-0 mr-1 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Отправить отзыв</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="isLoading"
          class="absolute w-full h-full top-0 left-0 bg-white bg-opacity-50 flex justify-center items-center"
        >
          <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import StarRating from 'vue-star-rating'
import useVuelidate from '@vuelidate/core'
import { maxLength, required } from '@vuelidate/validators'
import { defineComponent, ref, SetupContext } from '@vue/composition-api'

export default defineComponent({
  name: 'Rating',
  props: ['order', 'type'],
  components: {
    StarRating
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props, context: SetupContext) {
    const showModal = ref(false)
    const comment = ref('')
    const boundRating = ref(props.order.review === null ? 0 : props.order.review.rating)
    const isLoading = ref(false)
    const $v = useVuelidate({
      comment: {
        required,
        maxLength: maxLength(3000)
      }
    }, { comment })

    function sentRating () {
      $v.value.$touch()
      if (!$v.value.$invalid) {
        sendRating()
      }
    }
    async function sendRating () {
      isLoading.value = true
      try {
        await context.root.$axios.post('review', {
          reviewable_uuid: props.order.uuid,
          // eslint-disable camelcase
          reviewable_type: props.type,
          rating: boundRating.value,
          comment: comment.value
        }).then(() => {
          resetForm()
          context.root.$toast.success(context.root.$t('Ваш отзыв отправлен.').toString())
        }).catch(() => {
          resetForm()
          boundRating.value = 0
          context.root.$toast.error(context.root.$t('Ваш отзыв не отправился. \n Ошибка на сервере.').toString())
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message)
      } finally {
        isLoading.value = false
      }
    }
    function resetForm () {
      $v.value.$reset()
      comment.value = ''
      showModal.value = false
    }
    return { sentRating, showModal, comment, $v, boundRating, isLoading }
  }
})
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 1090;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.1s ease;
}
</style>
