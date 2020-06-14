import React from 'react';
import s from "./Hat.module.css";

const Hat = (props) => {
    return (
        
        <div>
            <img src={props.hatSrc} className={s.hat}/>
        </div>

            
    );
}

export default Hat;