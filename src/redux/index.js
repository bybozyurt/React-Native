import { persistReducer } from "redux-persist";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import {rootReducer} from './reducer'
import AsyncStorage from "@react-native-async-storage/async-storage";


const persistConfig = {
    key:'proje',
    storage:AsyncStorage,
};

const pReducer = persistReducer(persistConfig,rootReducer);

const middleware = [promise, thunk];

const store = createStore(
    pReducer,
    undefined,
    compose(applyMiddleware(...middleware)),

);

export default store;