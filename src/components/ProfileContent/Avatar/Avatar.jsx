import React from 'react';
import s from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div className={s.avatar}>
            <img src={props.imgSrc} />
        </div>
        
    );
}

export default Avatar;