import React from 'react';
import s from "./LoginForm.module.css";
import { Field, reduxForm } from "redux-form";


const LoginForm = (props) => {

    return (
        
        <form onSubmit={props.handleSubmit} className={s.form}>
            <div className={s.error}>{props.error}</div>
            <Field name="username" placeholder="username" className={s.username} type="text" component="input"/>
            <Field name="password" placeholder="password" className={s.pw} type="password" component="input"/>
            {/* <div onClick={() => {
                props.login(props.uText,props.pText);
            }} className={s.login}> Log In</div> */}
            <button className={s.login}> Log In</button>
        </form>
    );
}

export default reduxForm({ form: "login" })(LoginForm);