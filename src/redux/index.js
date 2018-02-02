import {createStore, applyMiddleware} from 'redux'
import reducer                        from './reducer'
import {logger}                       from 'redux-logger'
import thunk                          from 'redux-thunk'

const enhancer = applyMiddleware(logger, thunk);
const store = createStore(reducer, enhancer);

window.store = store;

export default store;