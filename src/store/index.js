import Vuex from 'vuex'
import gospel from "@/store/gospel"
import user from '@/store/user'

export default new Vuex.Store({
    modules: {
        gospel, user
    }
})
