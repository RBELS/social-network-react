import React from 'react';
import LoginForm from './LoginForm';


const LoginFormAPISendContainer = (props) => {

    let login = (formData) => {
        console.log(formData);
        props.login(formData.username,formData.password);
    }

    

    return (
        <LoginForm onSubmit={login} {...props}/>
    );
}

export default LoginFormAPISendContainer;