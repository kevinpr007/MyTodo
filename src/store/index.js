import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()

const store = createStore(
    rootReducer,
    devTools
)

export default store


