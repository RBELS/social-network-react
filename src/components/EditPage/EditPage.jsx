import React, { useState } from 'react';
import s from './EditPage.module.css'
import EditProfileForm from './EditProfileForm/EditProfileForm';
import EditUsernameForm from './EditUsernameForm/EditUsernameForm';
import EditPasswordForm from './EditPasswordForm/EditPasswordForm';



const EditPage = props => {
    const [state, setState] = useState(1);

    const submitProfile = formData => {
        console.log(formData);
    }

    return (
        <div>
            <h1>Здесь вы можете изменить свой профиль!</h1>
            {state == 1 && <EditProfileForm onSubmit={submitProfile} switchMode={setState}/>}
            {state == 2 && <EditUsernameForm />}
            {state == 3 && <EditPasswordForm />}
        </div>
    );
}

export default EditPage;