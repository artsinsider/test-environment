import firebase  from 'firebase'
import {Record}  from 'immutable'
import * as AC   from '../actions/auth'

const ReducerRecord = Record({
    user:null,
    error: null,
    loading: false
});

export default function authReducer(state = new ReducerRecord, action) {
    const {type} = action;

    switch (type) {
        case AC.SIGN_UP_REQUEST:
            return state.set('loading', true);

        case AC.SIGN_UP_SUCCESS:
            return state.set('user', action.user)
                        .set('loading', false)
                        .set('error', null);

        case AC.SIGN_UP_ERROR:
            return state.set('error', action.error)
                        .set('loading', false);

        default: return state;
    }
}

export function signUp(email, password) {
    return (dispatch) => {
       dispatch({
           type: AC.SIGN_UP_REQUEST
       })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: AC.SIGN_UP_SUCCESS,
                user
            }))
            .catch(error => dispatch({
                type: AC.SIGN_UP_ERROR,
                error
            }))

    }
}

firebase.auth().onAuthStateChanged(user => {
    // console.log('user', user)
});
