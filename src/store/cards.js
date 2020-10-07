import axios from 'axios';

export default {
    state: {
        deckId: null,
        drawnCards: [],
    },
    getters: {
        getDeckId: state => state.deckId,
        getDrawnCardsImages: state => state.drawnCards.map(card => card.image),
    },
    mutations: {
        setDeckId(state, deckId) {
            state.deckId = deckId;
        },
        setDrawnCards(state, cards) {
            state.drawnCards = cards;
        },
        pushToDrawnCards(state, cards) {
            state.drawnCards.push(...cards);
        }
    },
    actions: {
        async fetchNewDeck({ commit }) {
            await axios.get(`${process.env.VUE_APP_API}/deck/new/`)
                .then(response => {
                    commit('setDeckId', response.data.deck_id);
                });
        },
        async drawCards({ commit, getters }, count = 1) {
            await axios.get(`${process.env.VUE_APP_API}/deck/${getters.getDeckId}/draw/?count=${count}`)
                .then(response => {
                    commit('pushToDrawnCards', response.data.cards);
                });
        },
        async shuffleDeck({ commit, getters }) {
            await axios.get(`${process.env.VUE_APP_API}/deck/${getters.getDeckId}/shuffle/`);
            commit('setDrawnCards', []);
        }
    },
}
