import React from 'react';
import s from './EditPasswordForm.module.css'
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/Forms/Forms';
import { requiredField, maxLength, minLength } from '../../../utils/validators/validators';

//minLength8, maxLength20,

const validatorsArray = [ requiredField, minLength(8), maxLength(20) ];

const EditPasswordForm = props => {

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label htmlFor="">Старый пароль:</label>
            <Field validate={validatorsArray} component={Input} placeholder="old password" name="prevPassword"/><br/>

            <label htmlFor="">Новый пароль:</label>
            <Field validate={validatorsArray} component={Input} placeholder="new password" name="password"/><br/>

            <label htmlFor="">Подтвердите новый пароль:</label>
            <Field validate={validatorsArray} component={Input} placeholder="repeat new password" name="repeatPassword"/><br/>

            <button>Изменить пароль</button>
        </form>
    );
}

export default reduxForm({ form: "EditPassword" })(EditPasswordForm);