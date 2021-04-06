export const state = () => ({
    data: [],
    selectedRecord: {}
})

export const getters = {
    getRecordById: (state) => (id) => {
        return state.data.find(item => item.id === id);
    }
}

export const mutations = {
    addRecord(state, data) {
        state.data.push(data);
    },
    deleteRecord(state, id) {
        state.data = state.data.filter(item => item.id !== id);
    },
    updateRecord(state, data) {
        const index = state.data.findIndex(item => item.id === data.id);
        state.data[index].title = data.title;
        state.data[index].description = data.description;
        state.data[index].addedBy = data.addedBy;
    },
    getRecord(state, id) {
        state.selectedRecord = state.data.find(item => item.id === id);
    }
}

export const actions =  {
    addRecord: (context, payload) => {
        context.commit('addRecord', payload);
    },
    deleteRecord: (context, payload) => {
        context.commit('deleteRecord', payload);
    },
    updateRecord: (context, payload) => {
        context.commit('updateRecord', payload);
    },
    getRecord: (context, payload) => {
        context.commit('getRecord', payload);
    }
}