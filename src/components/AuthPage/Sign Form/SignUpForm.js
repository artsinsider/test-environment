import React, { Component } from 'react';
import {reduxForm, Field}   from 'redux-form';
import EmailValidator       from 'email-validator';
import ErrorField           from '../../ErrorField/ErrorField'
import './SignForm.css'

class SignUpForm extends Component {
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

const validate = ({email, password}) => {
    const error = {};

    if(!email) error.email = 'Email is required';
    else if(!EmailValidator.validate(email)) error.email = 'Invalid email';

    if(!password) error.password = 'Password is required';
    else if (password.length < 8) error.password = 'Password short';

    return error;
};

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm);
