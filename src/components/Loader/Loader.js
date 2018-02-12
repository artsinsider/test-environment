import React from 'react';
import logo from '../../media/preloader.svg'
// import './Loader.scss'

export default function Loader(props) {
    const wrapper = !props.isLoading ? 'loader-wrapper-visible' : 'loader-wrapper';
    return <div className={wrapper}>
            <img src={logo} className="loader-logo" alt="logo" />
        </div>
}