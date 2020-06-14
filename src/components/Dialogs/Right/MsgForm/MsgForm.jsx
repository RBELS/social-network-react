import React from 'react';
import s from "./MsgForm.module.css";

const MsgForm = (props) => {

    let sendMessage = () => {
        props.sendMessage(props.match.params.username,props.newMessageText);
    }

    return (
        <div className={s.msgForm}>
            <textarea onChange={(event) => {
                props.onNewMessageTextChange(event.target.value);
            }} value={props.newMessageText} className={s.text} placeholder="message...">

            </textarea>
            <div onClick={sendMessage} className={s.sendBt}>Send</div>
        </div>
    );
}

export default MsgForm;