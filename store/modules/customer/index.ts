import { GetterTree, ActionTree, MutationTree } from 'vuex'
import moment from 'moment'

interface FullProfile {
  uuid: string,
  name?: string,
  phone?: string,
  email?: string,
}

export const state = () => ({
  requestingFullProfile: false,
  fullProfile: {},
  fullProfileLastFetch: moment().subtract(1, 'months').toDate()
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  fullProfile: (state: RootState) => state.fullProfile
}

export const mutations: MutationTree<RootState> = {
  SET_FULL_PROFILE: (state, fullProfile?: FullProfile) => {
    if (fullProfile) {
      state.fullProfile = fullProfile
      state.fullProfileLastFetch = new Date()
    } else {
      state.fullProfile = {}
      state.fullProfileLastFetch = moment().subtract(1, 'months').toDate()
    }
  },
  REQUESTING_FULL_PROFILE: (state, status: boolean) => {
    state.requestingFullProfile = status
  }
}

export const actions: ActionTree<RootState, RootState> = {
  clearFullProfile ({ commit }) {
    commit('SET_FULL_PROFILE', null)
  },
  fetchFullProfile ({ commit, dispatch }/*, isForce = false */) {
    return new Promise((resolve, reject) => {
      // if (!state.requestingFullProfile && Math.abs(moment().diff(state.fullProfileLastFetch, 'seconds')) > (isForce ? 30 : 600)) {
      dispatch('ui/toggleRefresh', true, { root: true })
      commit('REQUESTING_FULL_PROFILE', true)
      this.$axios.get('profile-full')
        .then((response) => {
          commit('SET_FULL_PROFILE', response.data.data)
          resolve(response)
        })
        .catch(error => reject(error))
        .finally(() => {
          dispatch('ui/toggleRefresh', false, { root: true })
          commit('REQUESTING_FULL_PROFILE', false)
        })
      // }
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
