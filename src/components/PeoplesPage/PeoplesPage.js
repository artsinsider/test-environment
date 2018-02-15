import React, { Component } from 'react';
import PeoplesForm          from './PeoplesForm/PeoplesForm'
import PeoplesList          from './PeopleList/PeopleList'
import {connect}            from 'react-redux'
import {addPeople, moduleName} from  '../../ducks/people'

class PeoplesPage extends Component {
    addNewPeople = (data) => {
        this.props.addPeople(data);
        return false;
    };

    render() {
        const {peoples} = this.props;
        console.log('peoples',peoples)
        return (
            <div className="peoples">
                <div className="peoples-page">
                    <PeoplesForm onSubmit={this.addNewPeople}/>
                </div>
                <div className="peoples-list">
                    <PeoplesList items={peoples}/>
                </div>
            </div>
        );
    }
}



export default connect(state => {
    return {
        peoples: state[moduleName].peoples,
    }
}, {addPeople})(PeoplesPage)