import React, {Component} from 'react';
import {Route}            from 'react-router-dom';
import {connect}          from 'react-redux';
import {moduleName}       from '../../ducks/auth';
import UnAuthorized       from './UnAuthorized'

class ProtectedRoute extends Component {

    renderProtected = (routeProps) => {
        const {component: ProtectedComponent, authorized} = this.props;

        return authorized ? <ProtectedComponent {...routeProps}/> : <UnAuthorized/>

    };

    render() {
        const {...rest} = this.props;
        console.log('props', this.props)
        return (
            <div>
                <Route {...rest} component={this.renderProtected}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        authorized: !!state[moduleName].user,
        user: state[moduleName].user,
    }), null, null, {pure: false}
)(ProtectedRoute)