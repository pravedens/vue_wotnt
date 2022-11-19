export default {
    state: {
        gospels: [
            {
                title: 'First ad',
                description: 'Hello i am description_1',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '123'
            },
            {
                title: 'Second ad',
                description: 'Hello i am description_2',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '1234'
            },
            {
                title: 'Third ad',
                description: 'Hello i am description_3',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '12345'
            },
            {
                title: 'For ad',
                description: 'Hello i am description_4',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '123456'
            },
        ],
    },
    mutations: {
        createGospel(state, payload) {
            state.gospels.push(payload)
        }
    },
    actions: {
        createGospel({commit}, payload) {
            payload.id = 'dfghjjyutr'

            commit('createGospel', payload)
        }
    },
    getters: {
        gospels (state) {
            return state.gospels
        },
        promoGospels (state) {
            return state.gospels.filter(gospel => {
                return gospel.promo
            })
        },
        myGospels (state) {
            return state.gospels
        },
        GospelById (state) {
            return gospelId => {
                return state.gospels.find(gospel => gospel.id === gospelId)
            }
        }
    }
}
