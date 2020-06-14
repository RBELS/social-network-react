import React from 'react';
import s from "./Friend.module.css";



const Friend = (props) => {
    return (
            <div className={s.user}>
                <img className={s.ava} src={props.avaSrc}/>
                <div className={s.name}>{props.name}</div>
            </div>
    );
}

export default Friend;