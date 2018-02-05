import React, { Component } from 'react';
import {Route, NavLink}     from 'react-router-dom';
import SignInForm          from './Sign Form/SignInForm'
import SignUpForm          from './Sign Form/SignUpForm'

import './AuthPage.css'

class AuthPage extends Component {

    handelSignIn = (e) => {
        console.log('handelSignIn')
        e.preventDefault();
    };

    handelSignUp = (e) => {
        console.log('handelSignUp')
        e.preventDefault();
    };

    signIn = () => <SignInForm text="Вход" onSubmit={this.handelSignIn} />

    signUp = () => <SignUpForm text="Зарегестирроваться" onSubmit={this.handelSignUp} />

    render() {
        return (
            <div className="home">
                 <NavLink activeClassName="selected" to="/auth/signin">Вход</NavLink>
                 <NavLink activeClassName="selected" to="/auth/signup">Зарегестирроваться</NavLink>
                <div className="auth-page">
                    <Route path="/auth/signin" render={this.signIn} />
                    <Route path="/auth/signup" render={this.signUp} />
                </div>

            </div>
        );
    }
}

export default AuthPage;
