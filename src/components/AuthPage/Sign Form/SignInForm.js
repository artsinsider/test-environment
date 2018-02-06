import React, { Component } from 'react';
import {reduxForm, Field}   from 'redux-form';
import ErrorField           from '../../ErrorField/ErrorField'
import './SignForm.css'

class SignInForm extends Component {
    render() {
        const {onSubmit, text} = this.props;
        return (
            <div className="form-auth">
                <h2>ЗАПИСЬ НА САММИТ</h2>
                <form onSubmit={onSubmit}>
                    <div className="login">
                        <Field id="login" name="email" placeholder="Email" type="text" component={ErrorField}/>
                    </div>
                    <div className="password">
                        <Field id="password" name="password" placeholder="Password" type="password" component={ErrorField}/>
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
