import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './RegistrationForm.module.css'
import { requiredField, maxLength, minLength, passwordMatch, usernameMustNotExist, fieldUsernameMustNotExist } from '../../../utils/validators/validators';
import { Input } from '../../common/Forms/Forms';

const maxLength16 = maxLength(16);
const maxLength20 = maxLength(20);
const minLength3 = minLength(3);
const minLength8 = minLength(8);

const RegistrationForm = props => {
    

    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <label>Имя пользователя: </label>
            <Field validate={[requiredField, maxLength16, minLength3]} name="username" placeholder="username" component={Input} /><br />

            <label>Ваше имя:    </label>
            <Field validate={ [requiredField, maxLength16] } name="name" placeholder="name" component={Input} /><br />

            <label>Ваша фамилия:    </label>
            <Field validate={ [requiredField, maxLength16, minLength3] } name="surname" placeholder="surname" component={Input} /><br />

            <label>Образование: </label>
            <Field validate={ [requiredField, minLength3, maxLength20] } name="edu" placeholder="education" component={Input} /><br />
                
            <label>Дата рождения:   </label>
            <Field validate={ [requiredField, minLength3, maxLength16] } name="dob" placeholder="date of birth" component={Input} /><br />

            <label>Вебсайт: </label>
            <Field validate={ [requiredField] } name="website" placeholder="website" component={Input} /><br />

            <label>Страна:  </label>
            <Field validate={ [requiredField, maxLength20, minLength3] } name="country" placeholder="country" component={Input} /><br />

            <label>Город:   </label>
            <Field validate={ [requiredField, maxLength20, minLength3] } name="city" placeholder="city" component={Input} /><br />
                
            <label>Аватар:   </label>
            <Field validate={ [requiredField] } name="imgSrc" placeholder="img url" component={Input} /><br />

            <label>Пароль:   </label>
            <Field validate={ [requiredField, minLength8, maxLength20, passwordMatch] } name="password" placeholder="password" type="password" component={Input} /><br />

            <label>Повторите пароль:   </label>
            <Field validate={ [requiredField, minLength8, maxLength20, passwordMatch] } name="repeatPassword" placeholder="repeat password" type="password" component={Input} /><br />

            <button>Зарегистрироваться</button>

        </form>
    );
    
}

export default reduxForm({ form: "registration",
    asyncValidate:usernameMustNotExist,
    asyncBlurFields: ['username']

})(RegistrationForm);