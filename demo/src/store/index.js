import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
    muisclist:[]
}
const mutations={
    getmuisclist(state,data){
        state.muisclist=data
    },
    addmuisclist(state,data){
        state.muisclist.push(data)
    },
    removelits(state,index){
        state.muisclist.splice(index,1)
        console.log(state)
    }
}
const actions={

}


export default new Vuex.Store({
    state,
    mutations,
    actions
})