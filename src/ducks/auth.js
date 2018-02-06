import {appName} from '../firebase'
import firebase  from 'firebase'
import {Record} from 'immutable'

export const moduleName  = 'auth';

export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`;
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`;
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`;

const ReducerRecord = Record({
    user:null,
    error: null,
    loading: false
});

export default function authReducer(state = new ReducerRecord, action) {
    const {type} = action;

    switch (type) {
        case SIGN_UP_REQUEST:
            return state.set('loading', true);

        case SIGN_UP_SUCCESS:
            return state.set('user', action.user)
                        .set('loading', false)
                        .set('error', null);

        case SIGN_UP_ERROR:
            return state.set('error', action.error)
                        .set('loading', false);

        default: return state;
    }
}

export function signUp(email, password) {
    return (dispatch) => {
       dispatch({
           type: SIGN_UP_REQUEST
       })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_UP_SUCCESS,
                user
            }))
            .catch(error => dispatch({
                type: SIGN_UP_ERROR,
                error
            }))

    }
}
