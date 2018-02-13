import React,{Component} from 'react';
import {Route}           from 'react-router-dom';
import AuthPage          from '../AuthPage/AuthPage';
import AdminPage         from '../AdminPage/AdminPage';
import ProtectedRoute    from '../ProtectedRoute/ProtectedRoute'
import PeoplesPage       from '../PeoplesPage/PeoplesPage'
import './Root.scss'

class Root extends Component {
    render() {
        return (
            <div className="root">
                <ProtectedRoute path="/admin" component={AdminPage} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/people" component={PeoplesPage} />
            </div>
        );
    }
}

export default Root;
