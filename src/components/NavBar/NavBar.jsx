import React from 'react';
import s from "./NavBar.module.css";
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';


const NavBar = (props) => {
    return (
        <nav className={s.nav}>
            
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            

            
            <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
            

            
            <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            

            
            <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            

            
            <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>


            <NavLink to="/users" activeClassName={s.active}>Users</NavLink>
            
            {/* <FriendsContainer store={props.store}/> */}
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
        </nav>
        
    );
}

export default NavBar;