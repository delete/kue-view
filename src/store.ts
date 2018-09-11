import Vue from 'vue';
import Vuex from 'vuex';
import { KueApi } from './KueApi';

Vue.use(Vuex);

const kueApiService = new KueApi();

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
      const { data } = await kueApiService.getAll(0, 50, 'asc');
      commit('SET_JOBS', data);
    },
    RESTART_JOB({}, { id, state }) {
      return kueApiService.restartJob(id, state);
    },
    DELETE_JOB({}, { id }) {
      return kueApiService.deleteJob(id);
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
      return state.jobs.filter((j: any) => j.state === 'inactive');
    },
  },
});
