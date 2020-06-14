import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginFormAPIContainer from './LoginForm/LoginFormAPIContainer';


const Header = () => {
    return (
        <header className={s.header}>
            
            <NavLink to="/profile">
                <img src="https://cdn0.iconfinder.com/data/icons/social-network-9/50/28-512.png" />
            </NavLink>

            <LoginFormAPIContainer />
        </header>
    );
}

export default Header;