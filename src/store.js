import { crateStore, applyMiddleware, compose } from 'redux';
import thunk from 'readux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from './reducers'

const middleware = [thunk];
const initialState = {};

const store = createStore(rootReducer, initialState, middleware, composeWithDevTools(applyMiddleware(...middleware)));

export default store;