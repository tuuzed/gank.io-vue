
export default {
    namespaced: true,
    state: () => ({
        tabIndex: 0
    }),
    mutations: {
        updateTabIndex(state, newTabIndex) {
            state.tabIndex = newTabIndex
        }
    },

}