import React,{Component} from 'react';
import {Route}           from 'react-router-dom';
import AuthPage          from '../AuthPage/AuthPage';
import AdminPage         from '../AdminPage/AdminPage';

import './Root.css'

class Root extends Component {
    render() {
        return (
            <div className="Root">
                <Route path="/admin" component={AdminPage} />
                <Route path="/auth" component={AuthPage} />
            </div>
        );
    }
}

export default Root;
