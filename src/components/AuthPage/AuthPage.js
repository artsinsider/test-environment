import React, { Component } from 'react';
import {Route, NavLink}     from 'react-router-dom';
import {connect}            from 'react-redux'
import SignInForm           from './Sign Form/SignInForm'
import SignUpForm           from './Sign Form/SignUpForm'
import Loader               from '../Loader/Loader'
import {signUp, moduleName} from  '../../ducks/auth'

class AuthPage extends Component {

    handelSignIn = (e) => {
        console.log('handelSignIn')
        e.preventDefault();
    };

    handelSignUp = ({email, password}) => {

        this.props.signUp(email, password);
        return false
    };

    signIn = () => <SignInForm text="Вход" onSubmit={this.handelSignIn} />

    signUp = () => <SignUpForm text="Зарегестирроваться" onSubmit={this.handelSignUp} />

    render() {
        return (
            <div>
                <div className="home">
                    <div className="links">
                        <NavLink activeClassName="selected" to="/auth/signin">Вход</NavLink>
                        <NavLink activeClassName="selected" to="/auth/signup">Зарегестирроваться</NavLink>
                    </div>

                    <div className="auth-page">
                        <Route path="/auth/signin" render={this.signIn} />
                        <Route path="/auth/signup" render={this.signUp} />
                    </div>
                </div>
               <Loader isLoading={this.props.loading}/>
            </div>

        );
    }
}

export default connect(state => {
    return {
        user: state[moduleName].user,
        loading: state[moduleName].loading
    }
}, {signUp})(AuthPage)
