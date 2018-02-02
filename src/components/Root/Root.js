import React, { Component } from 'react';
import AdminPage from '../AdminPage/AdminPage'
import './Root.css'

class Root extends Component {
    render() {
        return (
            <div className="Root">
                <AdminPage/>
            </div>
        );
    }
}

export default Root;
