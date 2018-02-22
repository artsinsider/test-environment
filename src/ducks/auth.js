import firebase  from 'firebase'
import {Record}  from 'immutable'
import * as AC   from '../actions/auth'
import {all, take, put, call}     from 'redux-saga/effects'

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


export const signUpSaga = function * () {
    const auth = firebase.auth();

    while (true){
        const action = yield take(AC.SIGN_UP_REQUEST);

        try {
            const user = yield call(
                [auth, auth.createUserWithEmailAndPassword],
                action.data.email, action.data.password
            );

            yield put({
                type: AC.SIGN_UP_SUCCESS,
                user
            })
        } catch (error) {
            yield put({
                type: AC.SIGN_UP_ERROR,
                error
            })
        }
    }
};

export function signUp(email, password) {
    return {
        type: AC.SIGN_UP_REQUEST,
        data: {email, password}
    }
}

firebase.auth().onAuthStateChanged(user => {
    // console.log('user', user)
});


export const saga = function * () {
    yield all([
        signUpSaga()
    ])
}