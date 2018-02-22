import React,{Component} from 'react';
import * as ROUTING      from 'react-router-dom';
import {connect}         from 'react-redux'
import SignInForm        from './Sign Form/SignInForm'
import SignUpForm        from './Sign Form/SignUpForm'
import Loader            from '../Loader/Loader'
import { signUp }        from  '../../ducks/auth'
import { moduleName }    from '../../actions/auth'

class AuthPage extends Component {

    handelSignIn = (e) => {
        e.preventDefault();
    };

    handelSignUp = ({email, password}) => {
        this.props.signUp(email, password);
        return false
    };

    signIn = () => <SignInForm text="Вход" onSubmit={this.handelSignIn} />;

    signUp = () => <SignUpForm text="Зарегестирроваться" authError={this.props.authError} onSubmit={this.handelSignUp} />;


    render() {
        console.log('authError', this.props.authError)
        return (
            <div>
                <div className="home">
                    <div className="links">
                        <ROUTING.NavLink activeClassName="selected" to="/auth/signin">Авторизоваться</ROUTING.NavLink>
                        <ROUTING.NavLink activeClassName="selected" to="/auth/signup">Зарегестирроваться</ROUTING.NavLink>
                    </div>

                    <div className="auth-page">
                        <ROUTING.Route path="/auth/signin" render={this.signIn} />
                        <ROUTING.Route path="/auth/signup" render={() => ( !!this.props.user ? (<ROUTING.Redirect to="/people"/>) : this.signUp())} />
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
        authError: state[moduleName].error,
        loading: state[moduleName].loading
    }
}, {signUp},null, {pure: false})(AuthPage)
