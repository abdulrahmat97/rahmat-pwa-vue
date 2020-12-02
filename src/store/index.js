import Vue from 'vue'
import id from 'vuetify/es5/locale/id'
import Vuex from 'vuex'

Vue.use(Vuex)

import srvApi from '../services/api'

export default new Vuex.Store({
  state: {
    cart: [],
    bestFoods: [],
    foods: [],
    foodSearch: []
  },
  getters: {
    getCart: state => {
      return state.cart;
    },
    getBestFood: state => {
      return state.bestFoods;
    },
    getFoods: state => {
      return state.foods;
    },
    getFoodSearch: state => {
      return state.foodSearch;
    }
  },
  mutations: {
    SET_BEST_FOODS: (state, payload) => {
      state.bestFoods = payload;
    },
    SET_FOODS: (state, payload) => {
      state.foods = payload;
    },
    SET_FOOD_SEARCH: (state, payload) => {
      state.foodSearch = payload;
    },
    ADD_CART: (state, payload) => {
      state.cart.push(payload);
    },
    REMOVE_CART: (state, payload) => {
      state.cart.splice(state.cart.indexOf(payload), 1);
    },
    SET_CART: (state, payload) => {
      state.cart = payload;
    }
  },
  actions: {
    fetchBestFoods: async ({ commit }) => {
      try {
        let result = await srvApi.getBestFood();
        commit('SET_BEST_FOODS', result.data);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    fetchFoods: async ({ commit }) => {
      try {
        let result = await srvApi.getAllFoods();
        commit("SET_FOODS", result.data);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    fetchFoodSearch: async ({ commit }, query) => {
      try {
        let result = await srvApi.getSearchFood(query);
        commit("SET_FOOD_SEARCH", result.data);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);

      }
    },
    fetchFoodByID: async ({ commit }, slug) => {
      try {
        let result = await srvApi.getFood(slug);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    fetchCart: async ({ commit }) => {
      try {
        let result = await srvApi.getCart();
        commit("SET_CART", result.data);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    addToCart: async ({ commit }, payload) => {
      try {
        let result = await srvApi.addToCart(payload);
        commit("ADD_CART", result.data);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
    removeToCart: async ({commit}, payload) => {
      try {
        let result = await srvApi.removeCart(payload.id);
        commit("REMOVE_CART",payload);
        return Promise.resolve(result.data);
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
})
