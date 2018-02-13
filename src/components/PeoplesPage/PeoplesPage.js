import React, { Component } from 'react';
import PeoplesForm          from './PeoplesForm/PeoplesForm'

class PeoplesPage extends Component {
    render() {
        return (
            <div className="peoples-page">
                <div>
                    <PeoplesForm/>
                </div>

            </div>
        );
    }
}

export default PeoplesPage;
