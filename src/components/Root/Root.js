import React,{Component} from 'react';
import {Route}           from 'react-router-dom';
import AuthPage          from '../AuthPage/AuthPage';
import AdminPage         from '../AdminPage/AdminPage';
import ProtectedRoute    from '../ProtectedRoute/ProtectedRoute'
import PeoplesForm       from '../PeoplesForm/PeoplesForm'
import './Root.scss'

class Root extends Component {
    render() {
        return (
            <div className="root">
                <ProtectedRoute path="/admin" component={AdminPage} />
                <Route path="/auth" component={AuthPage} />
                <Route path="/people" component={PeoplesForm} />
            </div>
        );
    }
}

export default Root;
