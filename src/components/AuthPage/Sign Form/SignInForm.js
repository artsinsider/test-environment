import React, { Component } from 'react';
import {reduxForm, Field}   from 'redux-form';
import './SignForm.css'

class SignInForm extends Component {
    render() {
        const {onSubmit, text} = this.props;
        return (
            <div className="form-auth">
                <h2>ЗАПИСЬ НА САММИТ</h2>
                <form onSubmit={onSubmit}>
                    <div className="login">
                        <title>Логин</title>
                        <Field id="login" name="login" placeholder="Email" type="text" component="input"/>
                    </div>
                    <div className="password">
                        <title>Пароль</title>

                        <Field id="password" name="password" placeholder="Password" type="password" component="input"/>
                    </div>
                    <div className="remember-me">
                        <Field id="remember" name="remember" type="checkbox" component="input"/>
                        <label>запомнить меня</label>
                    </div>
                    <button id="submit" type="submit">{text}</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm);
