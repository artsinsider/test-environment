import React, { Component } from 'react';
import {reduxForm, Field}   from 'redux-form';
import EmailValidator       from 'email-validator';
import ErrorField           from '../../ErrorField/ErrorField'
import Button               from '../../LibraryComponent/Button/Button'

class SignUpForm extends Component {
    render() {
        const {handleSubmit, text} = this.props;
        return (
            <div className="form-auth">
                <div className="title-auth-form">Запись на саммит</div>
                <form onSubmit={handleSubmit}>
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
                    <Button type="submit" text={text}/>
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
    else if (password.length <= 3) error.password = 'Password short';

    return error;
};

export default reduxForm({
    form: 'auth',
    validate
})(SignUpForm);
