<template>
  <div class="min-h-screen bg-gray-dark flex">
    <div class="lg:w-1/2 2xl:w-1/3 3xl:w-1/4 flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <nuxt class="" />
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        :src="image"
        alt=""
      >
      <div class="made-by">
        Powered by <a target="_blank" href="https://uberem.com.ua/">Uberem</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from '@vue/composition-api'
import Data from '~/interfaces/Data'

export default defineComponent({
  metaInfo: {
    title: 'My Uberem'
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setup (props: Data, context: SetupContext) {
    const image = computed(() => context.root.$store.getters['ui/authImage'])

    /* computed(() => {
      if (context.root.$route.meta.image) {
        return context.root.$route.meta.image
      }
      return '/images/site/auth_hero.jpg'
    }) */
    return { image }
  }
})
</script>

<style lang="scss" scoped>
.made-by {
  // color: #323A45;
  color: #fff;
  padding: 8px 16px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: right;

  a {
    color: #C72825;
  }
}
</style>
