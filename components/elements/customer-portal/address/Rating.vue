<template>
  <div>
    <star-rating
      v-model="boundRating"
      :read-only="false"
      :star-size="20"
      :show-rating="false"
      inactive-color="#e9e9e9"
      class="float-right"
      @rating-selected="showModal=true"
    />
    <transition>
      <div v-if="showModal === true" class="modal-mask">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
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
                        v-if="order.review === null"
                        v-model="comment"
                        rows="3"
                        class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      />
                      <p v-else>
                        {{ order.review.comment }}
                      </p>
                    </div>
                    <p class="mt-2 text-sm text-gray-500 flex justify-between">
                      Мы учтем ваши пожелания.
                      <span class="text-xs" :class="{'text-red-500': $v.comment.maxLength.$invalid }">
                        {{ comment.length }} / 3000
                      </span>
                    </p>
                    <p v-if="$v.comment.required.$invalid" class="text-red-500">
                      Поле должно быть заполнено.
                    </p>
                    <p v-if="$v.comment.maxLength.$invalid" class="text-red-500">
                      Может быть не более 3000 символов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                <button
                  type="button"
                  class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  <svg class="flex-shrink-0 mr-1 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span @click="sentRating">Отправить отзыв</span>
                </button>
              </span>
            </div>
          </div>
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
import { defineComponent, ref, SetupContext, toRefs } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  name: 'Rating',
  props: {
    order: Object
  },
  components: {
    StarRating
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const { uuid, order_type: type } = toRefs(props)
    const showModal = ref(false)
    const comment = ref('')
    const boundRating = ref(0)
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
      try {
        await context.root.$axios.post('review', {
          reviewable_id: uuid.value,
          // eslint-disable camelcase
          reviewable_type: type.value,
          rating: boundRating.value,
          comment: comment.value
        }).then(() => {
          $v.value.$reset()
          comment.value = ''
          showModal.value = false
        }).catch(() => {
        })
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e.message)
      } finally {
      }
    }

    return { sentRating, showModal, comment, $v, boundRating }
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
