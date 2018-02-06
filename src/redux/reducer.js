import {combineReducers} from 'redux'
import {routerReducer}   from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer, {moduleName as authModule}       from '../ducks/auth'

export default combineReducers({
    routerReducer,
    form,
    [authModule]:authReducer
})