import {addPeopleSaga, } from '../ducks/people';
import * as AC   from '../actions/people';
import {call} from 'redux-saga/effects';

it('should dispatch people with id ', () => {
    const person = {
        name: 'Roman',
        lastName: 'Yakobchuk',
        age: 32,
    }

    const saga = addPeopleSaga({
        type: AC.ADD_PEOPLE_REQUEST,
        data: person
    });

    expect(saga.next().value).toEqual(call())

});
