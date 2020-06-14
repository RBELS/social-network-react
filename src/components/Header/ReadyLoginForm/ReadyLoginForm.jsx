import React from 'react';
import s from "./ReadyLoginForm.module.css";


const ReadyLoginForm = (props) => {
    
    let onLogoutClick = () => {
        props.onLogoutClick();
    }

    return (
        <>
            <div onClick={onLogoutClick} className={s.bt}>
                Log Out
            </div>

            <div className={s.form}>
                Hello, {props.name}
            </div>
        </>
    );
}

export default ReadyLoginForm;