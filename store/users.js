const users = {
  state() {
    return {
      pending: true,
      error: false,
      usersList: [],
      todos: [],
      posts: [],
      comments: [],
    };
  },
  mutations: {
    SET_LOADING_STATE(state, { isLoading }) {
      state.pending = isLoading;
    },
    SET_ERROR_STATE(state, payload) {
      state.error = payload;
    },
    GET_USERS(state, payload) {
      state.usersList = payload;
    },
  },
  actions: {
    async getUsers({ commit }) {
      commit('SET_LOADING_STATE', { isLoading: true });

      try {
        const users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
        commit('GET_USERS', users);
      } catch (err) {
        // Catch Errors For Log Monitoring
        commit('SET_ERROR_STATE', err.message);
      } finally {
        commit('SET_LOADING_STATE', { isLoading: false });
      }
    },
  },
};

export default users;
