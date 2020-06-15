import React from 'react';
import s from "./Left.module.css";
import Dialog from './Dialog/Dialog';


const Left = (props) => {
    
    let dialogs = props.dialogsEls.map(d => <Dialog to={d.written} key={d.pk} name={d.name} unread={d.unread}/>);

    return (
        <div className={s.left}>
            {dialogs}
        </div>
    );
}

export default Left;