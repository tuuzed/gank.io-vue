import { banners } from '../../api/Banner'

export default {
    namespaced: true,
    state: () => ({
        list: []
    }),
    mutations: {
        update(state, newlist) {
            state.list = newlist
        }
    },
    actions: {
        fetch({ commit }) {
            banners()
                .then(res => commit("update", res.data))
                .catch(error => console.log("ERROR", error));
        }
    },
}