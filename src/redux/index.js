import {createStore, applyMiddleware} from 'redux'
import reducer                        from './reducer'
import {logger}                       from 'redux-logger'
import thunk                          from 'redux-thunk'
import {routerMiddleware}             from 'react-router-redux'
import history                        from '../config/history'

const enhancer = applyMiddleware(routerMiddleware(history) ,logger, thunk);
const store = createStore(reducer, enhancer);

window.store = store;

export default store;