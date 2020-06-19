import React, { useState, useEffect } from 'react';
import s from './EditPage.module.css'
import EditProfileForm from './EditProfileForm/EditProfileForm';
import EditUsernameForm from './EditUsernameForm/EditUsernameForm';
import EditPasswordForm from './EditPasswordForm/EditPasswordForm';
import { getUserThunkCretor } from '../../redux/profile-page-reducer';
import { connect } from 'react-redux';



const EditPage = props => {
    const [mode, setMode] = useState(1);

    useEffect(() => {
        props.getProfile("");
    }, []);

    const submitProfile = formData => {
        console.log(formData);
    }

    const submitUsername = formData => {
        console.log(formData);
    }

    const submitPassword = formData => {
        console.log(formData);
    }


    return (
        <div>
            <h1>Здесь вы можете изменить свой профиль!</h1>
            <div className={s.container}>
                {mode == 1 && <EditProfileForm onSubmit={submitProfile}/>}
                {mode == 2 && <EditUsernameForm onSubmit={submitUsername} />}
                {mode == 3 && <EditPasswordForm onSubmit={submitPassword} />}


                {mode != 1 && <div className={s.changeOther} onClick={() => { setMode(1) }}>Изменить профиль</div>}
                {mode != 2 && <div className={s.changeOther} onClick={() => { setMode(2) } } >Изменить имя пользователя</div>}
                {mode != 3 && <div className={s.changeOther} onClick={() => { setMode(3) }}>Изменить пароль</div>}
                
                
            </div>
        </div>
    );
}

export default connect(state => ({}), { getProfile: getUserThunkCretor })(EditPage);