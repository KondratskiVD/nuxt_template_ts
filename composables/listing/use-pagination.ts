import Vue from 'vue'
import { ref, computed, SetupContext } from '@vue/composition-api'
import Pagination from '~/interfaces/Pagination'

interface PaginationStore<Item> {
  [key: number]: {
    items: Item[],
    pagination: Pagination,
  }
}

interface PaginationOptions {
  fetchRequest: Function,
  perPage: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const usePagination = function <Item> (context: SetupContext, options: Partial<PaginationOptions>) {
  const isFetchingRequest = ref(false)
  const currentPage = ref(1)
  const nextPage = ref(1)
  const paginationStore = ref<PaginationStore<Item>>({})
  const paginationList = computed(() => {
    const data = paginationStore.value[currentPage.value]
    return !data ? [] : data.items
  })
  const pagination = computed<Pagination>(() => {
    const data = paginationStore.value[currentPage.value]
    return !data ? ({} as Pagination) : data.pagination
  })

  function fetchPaginatedData () {
    if (isFetchingRequest.value) {
      return
    }
    const searchData = {
      page: nextPage.value,
      per_page: options.perPage || 30
    }

    isFetchingRequest.value = true

    if (options.fetchRequest) {
      options.fetchRequest(searchData)
        .then((response: any) => {
          Vue.set(paginationStore.value, nextPage.value, {
            items: response.data.data,
            pagination: response.data.meta.pagination
          })
          currentPage.value = nextPage.value
        })
        .catch(() => {
          context.root.$toast.error(context.root.$t('errors.request_error').toString())
        })
        .finally(() => {
          context.root.$store.dispatch('ui/toggleRefresh', false)
          isFetchingRequest.value = false
        })
    }
  }

  function movePage (number = 1) {
    const page = currentPage.value + number
    if (page < 1 || page > pagination.value.last_page) {
      return
    }
    nextPage.value = page
    if (!paginationStore.value[nextPage.value]) {
      fetchPaginatedData()
    } else {
      currentPage.value = nextPage.value
    }
  }

  return {
    paginationList,
    movePage,
    fetchPaginatedData
  }
}

export default usePagination
