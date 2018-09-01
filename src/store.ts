import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import jobs from '../jobs.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jobs: [],
  },
  mutations: {
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
  },
  actions: {
    async FETCH_JOBS({ commit }) {
      const js = await Promise.resolve(jobs);
      commit('SET_JOBS', js);
    },
  },
  getters: {
    GET_COMPLETED(state) {
      return state.jobs.filter((j: any) => j.state === 'complete');
    },

    GET_FAILED(state) {
      return state.jobs.filter((j: any) => j.state === 'failed');
    },

    GET_ACTIVED(state) {
      return state.jobs.filter((j: any) => j.state === 'active');
    },

    GET_QUEUED(state) {
      return state.jobs.filter((j: any) => j.state === 'queued');
    },
  },
});
