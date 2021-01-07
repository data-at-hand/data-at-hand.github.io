import React from 'react';
import logo from 'assets/logotype.svg';
import './Header.scss';

export const Header = () => {
    return <div id="header">
        <div className="container">
            <a href="/">
                <img id="logo" src={logo} />
            </a>

            <div className="flex-fill" />


            <a className="github" href="https://github.com/umdsquare/data-at-hand-mobile" target="_blank">
                <div>
                    <img src={require('../assets/github.svg')} />
                    <span>Source Code</span>
                </div>
            </a>
        </div>
    </div>
}