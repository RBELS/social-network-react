import React from 'react';
import s from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={s.msg}>
            <div className={s.user}>
                <img src={props.imgSrc} />
                <div>
                    {props.name}
                </div>
            </div>

            <div className={s.userText}>
                {props.text}
            </div>
        </div>
    );
}

export default Message;