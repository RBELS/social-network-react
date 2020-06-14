import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { registerTC } from '../../redux/auth-reducer';
import s from './RegistrationPage.module.css';

class RegistrationPage extends React.Component {

    onRegistrationFormSubmit = formData => {
        this.props.register(formData);
        // console.log(formData);
    }

    

    render() {
        if(this.props.logged) {
            return <Redirect to="/profile"/>
        }

        return ( <div className={s.page}>
                <h1>У вас нет аккаунта? Так создайте его прямо сейчас!</h1>
                <RegistrationForm onSubmit={this.onRegistrationFormSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.auth.logged
    };
}

export default connect(mapStateToProps, { register: registerTC })(RegistrationPage);