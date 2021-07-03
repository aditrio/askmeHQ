// import { reject, resolve } from 'core-js/fn/promise';
import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listHadits: []
  },
  mutations: {
    setHadits(state, data) {
      state.listHadits = data;
    }
  },
  actions: {
    getHadits({commit},)  {
         axios.get('http://localhost:3000/search').then(
           (resp) => { 
             var data = [];
             resp.data.data.map(e => {
               if(["Shahih_Bukhari", "Shahih_Muslim", "Shahih_Ibnu_Hibban", "Shahih_Ibnu_Khuzaimah"].includes(e.kitab)){
                 
                 console.log(e);
                 data.push(e);
                }
              });
              commit('setHadits', data)
           }
         ).catch(err => {console.log(err);})
    }
  },
  getters : {
    getListHadits : (state) => {return state.listHadits}, 
  },
  modules: {
  }
})
