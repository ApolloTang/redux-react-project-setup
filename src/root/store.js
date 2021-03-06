import {createStore, applyMiddleware, compose} from 'redux';
import {combineReducers} from 'redux';
import rootReducer from './reducers';
import middleware from  './middleware';

import config from './config';
import { loadState as loadPersistedState } from './local-storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const PROD = (process && process.env && process.env.PROD) ? true : false;
const preloadedState = loadPersistedState();


let store;
if (PROD) {
    if (config.shouldPersistStoreState && preloadedState) {
        store = createStore(
            rootReducer,
            preloadedState,
            applyMiddleware(...middleware)
        );
    } else {
        store = createStore(
            rootReducer,
            applyMiddleware(...middleware)
        );
    }
} else {
    if (config.shouldPersistStoreState && preloadedState) {
        store = createStore(
            rootReducer,
            preloadedState,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );
    } else {
        store = createStore(
            rootReducer,
            composeEnhancers(
                applyMiddleware(...middleware)
            )
        );
    }
}


export default store;

