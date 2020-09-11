import { GetterTree, ActionTree, MutationTree } from 'vuex'
import moment from 'moment'

export const state = () => ({
  isRefresh: 0,
  isRefreshStart: moment().toDate(),
  isDisabledRefresh: false,
  isSideOpen: false,
  authImage: '/images/site/auth_hero.jpg'
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isRefresh: (state: RootState) => state.isRefresh > 0,
  isDisabledRefresh: (state: RootState) => state.isDisabledRefresh,
  isSideOpen: (state: RootState) => state.isSideOpen,
  authImage: (state: RootState) => state.authImage
}

export const mutations: MutationTree<RootState> = {
  TOGGLE_REFRESH: (state: RootState, status: boolean) => {
    if (state.isRefresh > 0 && Math.abs(moment().diff(state.isRefreshStart, 'seconds')) > 60) {
      state.isRefresh = 0
    }
    if (status) {
      state.isRefresh++
      state.isRefreshStart = moment().toDate()
    } else if (state.isRefresh > 0) {
      state.isRefresh--
    }
  },
  TOGGLE_DISABLE_REFRESH: (state: RootState, status?: boolean) => (state.isDisabledRefresh = (status !== undefined) ? status : !state.isDisabledRefresh),
  TOGGLE_SIDE: (state, status?: boolean) => (state.isSideOpen = (status !== undefined) ? status : !state.isSideOpen),
  SET_AUTH_IMAGE: (state, image: string) => (state.authImage = image)
}

export const actions: ActionTree<RootState, RootState> = {
  refreshPage ({ commit }) {
    commit('TOGGLE_REFRESH', true)
    setTimeout(() => {
      commit('TOGGLE_REFRESH', false)
    }, 2000)
  },
  toggleRefresh ({ commit }, status: boolean = false) {
    commit('TOGGLE_REFRESH', status)
  },
  toggleDisableRefresh ({ commit }, status?: boolean) {
    commit('TOGGLE_DISABLE_REFRESH', status)
  },
  toggleSide ({ commit }, status?: boolean) {
    commit('TOGGLE_SIDE', status)
  },
  setAuthImage ({ commit }, status?: boolean) {
    commit('SET_AUTH_IMAGE', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
