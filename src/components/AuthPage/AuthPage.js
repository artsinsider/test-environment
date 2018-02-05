import React, { Component } from 'react';
import './AuthPage.css'

class AuthPage extends Component {
    render() {
        return (
            <div className="auth-page">
                <div className="form-auth">
                    <h2>ЗАПИСЬ НА САММИТ</h2>
                    <div className="login">
                        <title>Логин</title>
                        <input id="login" placeholder="Email" type="text"/>
                    </div>
                    <div className="password">
                        <title>Пароль</title>

                        <input id="password" placeholder="Password" type="password"/>
                    </div>
                    <div className="remember-me">
                        <input id="remember" type="checkbox"/>
                        <label>запомнить меня</label>
                    </div>

                    <input id="submit" type="submit"/>
                </div>
            </div>
        );
    }
}

export default AuthPage;
