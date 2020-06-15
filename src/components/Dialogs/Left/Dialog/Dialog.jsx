import React from 'react';
import s from "./Dialog.module.css";
import { NavLink } from 'react-router-dom';


const Dialog = (props) => {
    return (
        <NavLink activeClassName={s.active} className={s.dialog} to={`/messages/${props.to}`}>
            <li>
                <div className={s.name}>{props.name}</div>
                <div className={s.unread}>{props.unread != 0 && props.unread}</div>
            </li>
        </NavLink>
    );
}

export default Dialog;