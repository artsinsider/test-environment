import {combineReducers} from 'redux'
import {routerReducer}   from 'react-router-redux'
import {reducer as form} from 'redux-form'
import authReducer       from '../ducks/auth'
import peopleReducer      from '../ducks/people'
import {moduleName as peopleModule} from '../actions/people'
import {moduleName as authModule}   from '../actions/auth'

export default combineReducers({
    routerReducer,
    form,
    [authModule]:authReducer,
    [peopleModule]:peopleReducer
})