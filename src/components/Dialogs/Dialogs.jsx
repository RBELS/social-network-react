import React from 'react';
import s from "./Dialogs.module.css";
import Right from './Right/Right';
import LeftContainer from './Left/LeftContainer';



const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <LeftContainer />

            {props.match.params.username && <Right />}
        </div>
    );
}

export default Dialogs;