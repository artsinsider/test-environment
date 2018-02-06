import React from 'react';
import logo from '../../logo.svg'
import './Loader.css'

export default function Loader(props) {
    const wrapper = !props.isLoading ? 'loader-wrapper-visible' : 'loader-wrapper';
    return <div className={wrapper}>
            <img src={logo} className="loader-logo" alt="logo" />
        </div>
}