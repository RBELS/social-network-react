import React, { useEffect } from 'react';
import s from './EditProfileForm.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../../common/Forms/Forms';
import { maxLength, minLength, requiredField } from '../../../utils/validators/validators';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserThunkCretor } from '../../../redux/profile-page-reducer';
import { withAuthRedirect } from '../../AuthRedirect/withAuthRedirect';

const maxLength16 = maxLength(16);
const maxLength20 = maxLength(20);
const minLength3 = minLength(3);
const minLength8 = minLength(8);

const EditProfileForm = props => {
    return (
        <form onSubmit={props.handleSubmit} className={s.form}>

            <label htmlFor="">Ваше имя и фамилия:</label>
            <Field validate={[requiredField, maxLength16]} component={Input} placeholder="name" name="name"/><br/>

            <label htmlFor="">Аватар:</label>
            <Field validate={[requiredField]} component={Input} placeholder="img url" name="imgSrc"/><br/>

            <label htmlFor="">Шапка:</label>
            <Field validate={[requiredField]} component={Input} placeholder="head url" name="headSrc"/><br/>
            
            <label htmlFor="">Страна:</label>
            <Field validate={[requiredField, maxLength20, minLength3]} component={Input} placeholder="country" name="country"/><br/>

            <label htmlFor="">Город:</label>
            <Field validate={[requiredField, maxLength20, minLength3]} component={Input} placeholder="city" name="city"/><br/>

            <label htmlFor="">Дата рождения:</label>
            <Field validate={[requiredField, minLength3, maxLength16]} component={Input} placeholder="date of birth" name="dob"/><br/>

            <label htmlFor="">Образование:</label>
            <Field validate={[requiredField, minLength3, maxLength20]} component={Input} placeholder="education" name="edu"/><br/>

            <label htmlFor="">Вебсайт:</label>
            <Field validate={[requiredField]} component={Input} placeholder="website" name="website"/><br/>

            <button>Изменить профиль</button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        initialValues: state.profilePage.profile,
        logged: state.auth.logged
    }
}


export default compose(
    connect(mapStateToProps),
    reduxForm({form:"profileUpdate", enableReinitialize: true}),
    withAuthRedirect
)(EditProfileForm);