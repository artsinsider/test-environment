import React, { Component } from 'react';
import {reduxForm, Field}   from 'redux-form';
import ErrorField           from '../../ErrorField/ErrorField'

class SignInForm extends Component {
    render() {
        const {onSubmit, text} = this.props;
        return (
            <div className="form-auth">
                <div className="title-auth-form">Запись на саммит</div>
                <form onSubmit={onSubmit}>
                    <div className="login">
                        <Field id="login" name="email" placeholder="Email" type="text" component={ErrorField}/>
                    </div>
                    <div className="password">
                        <Field id="password" name="password" placeholder="Password" type="password" component={ErrorField}/>
                    </div>
                    <div className="remember-me">
                        <Field className="remember" id="remember" name="remember" type="checkbox" component="input"/>
                        <label className="remember-label">Запомнить меня</label>
                    </div>
                    <button className="btn-auth" id="submit" type="submit">{text}</button>
                    <div className="forgot-auth-data" >Забыли пароль или логин ?</div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm);
