import { createStore } from 'vuex'
import {shopContext} from "./modules/shopContext/index";

const store = createStore({
    modules: {
        shopContext:shopContext,
    }
})

export default store