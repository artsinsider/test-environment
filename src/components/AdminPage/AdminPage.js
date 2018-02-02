import React, { Component } from 'react';
import './AdminPage.css'

class AdminPage extends Component {
    render() {
        return (
            <div className="AdminPage">
                <h2>ЗАПИСЬ НА САММИТ</h2>
                <div className="login">
                    <title>Логин</title>
                    <input type="text"/>
                </div>
                <div className="password">
                    <title>Пароль</title>
                    <input type="password"/>
                </div>
                <input type="submit"/>
            </div>
        );
    }
}

export default AdminPage;
