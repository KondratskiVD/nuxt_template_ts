import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<RootState> = {}

export const actions: ActionTree<RootState, RootState> = {
  // eslint-disable-next-line no-empty-pattern
  fetchCleaningsBase ({}, { uuid, params }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`address/${uuid}/orders-base`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
        })
    })
  },
  // eslint-disable-next-line no-empty-pattern
  fetchCleaningsComplex ({}, { uuid, params }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`address/${uuid}/orders-complex`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
        })
    })
  },
  // eslint-disable-next-line no-empty-pattern
  fetchDryCleanings ({}, { uuid, params }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`address/${uuid}/orders-dry-cleaning`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
        })
    })
  },
  // eslint-disable-next-line no-empty-pattern
  fetchOrdersSubscriptions ({}, { uuid, params }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`address/${uuid}/orders-subscriptions`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
        })
    })
  },
  // eslint-disable-next-line no-empty-pattern
  fetchSubscriptionPayments ({}, { uuid, params }) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`address/${uuid}/subscription-payments`, { params })
        .then(response => resolve(response))
        .catch(error => reject(error))
        .finally(() => {
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
