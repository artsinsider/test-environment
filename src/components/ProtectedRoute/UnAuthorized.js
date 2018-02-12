import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class UnAuthorized extends Component{

    render() {
        return (
            <div className="please-sign-in">
                <h3>Авторизуйтесь пожалуйста <Link to="/auth/signin">Авторизация</Link> </h3>
            </div>
        )
    }
}

export default UnAuthorized;