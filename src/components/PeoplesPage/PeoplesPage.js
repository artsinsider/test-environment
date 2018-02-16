import React, { Component }    from 'react';
import PeoplesForm             from './PeoplesForm/PeoplesForm'
import PeoplesList             from './PeopleList/PeopleList'
import {connect}               from 'react-redux'
import {addPeople}             from  '../../ducks/people'
import {moduleName}            from '../../actions/people'
import Loader                  from '../Loader/Loader'

class PeoplesPage extends Component {
    addNewPeople = (data) => {
        this.props.addPeople(data);
        return false;
    };

    render() {
        const {peoples} = this.props;
        return (
            <div className="peoples">
                <div className="peoples-page">
                    <PeoplesForm onSubmit={this.addNewPeople}/>
                </div>
                <div className="peoples-list">
                    <PeoplesList items={peoples}/>
                </div>
                <div className="empty-block">
                    <h3 style={{color: this.props.color}}>Дополнительные данные</h3>
                </div>
                <Loader isLoading={this.props.loading}/>
            </div>
        );
    }
}



export default connect(state => {
    return {
        peoples: state[moduleName].peoples,
        loading: state[moduleName].loading,
    }
}, {addPeople})(PeoplesPage)