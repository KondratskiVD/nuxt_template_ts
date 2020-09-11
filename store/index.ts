import VuexPersistence from 'vuex-persist'
import createLogger from 'vuex/dist/logger'
import { GetterTree, ActionTree, MutationTree } from 'vuex'
import Profile from '~/interfaces/Models/Profile'

// modules
import uiModule from '~/store/modules/ui/index'
import customerModule from '~/store/modules/customer/index'
import addressModule from '~/store/modules/address/index'

const debug = process.env.NODE_ENV !== 'production'

export const state = () => ({
  auth: {
    loggedIn: false,
    user: null as (Profile | null)
  }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  user: (state: RootState) => state.auth.user,
  loggedIn: (state: RootState) => state.auth.loggedIn
}

export const mutations: MutationTree<RootState> = {

}

export const actions: ActionTree<RootState, RootState> = {
  setUser ({ commit }, payload) {
    commit('auth/SET', payload)
  },
  nuxtServerInit (/* { commit } */) {
    // eslint-disable-next-line no-console
    console.log('nuxtServerInit')
  }
}

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
  modules: ['ui', 'customer']
})

export default {
  /**
   * Assign the modules to the store.
   */
  modules: {
    ui: uiModule,
    customer: customerModule,
    address: addressModule
  },

  state,
  mutations,
  actions,
  getters,

  /**
   * If strict mode should be enabled.
   */
  strict: debug,

  /**
   * Plugins used in the store.
   */
  plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin]
}
