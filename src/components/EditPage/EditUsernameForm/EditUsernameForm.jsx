import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/Forms/Forms';
import s from './EditUsernameForm.module.css';
import { requiredField, maxLength, minLength } from '../../../utils/validators/validators';
import { connect } from 'react-redux';
import { compose } from 'redux';

const maxLength20 = maxLength(20), 
    minLength8 = minLength(8),
    maxLength16 = maxLength(16),
    minLength3 = minLength(3);

const EditUsernameForm = props => {

    
    console.log(props);
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            
            <label htmlFor="">Имя пользователя:</label>
            <Field validate={[ requiredField, minLength3, maxLength16 ]} component={Input} placeholder="name" name="username"/><br/>

            <label htmlFor="">Пароль:</label>
            <Field validate={[ requiredField, minLength8, maxLength20 ]} component={Input} placeholder="password" name="password" type="password"/><br/>

            <button>Изменить имя пользователя</button>
        </form>
    );
}

const mapStateToProps = state => ({ initialValues: state.profilePage.profile });

export default compose(
    connect(mapStateToProps),
    reduxForm({ form: "EditUsername", enableReinitialize: true })
)(EditUsernameForm)