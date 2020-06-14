import React from "react";
import s from './FetchingSign.module.css';
import loadingImg from '../../res/gifs/Spinner-1s-200px.gif';

const FetchingSign = (props) => {
    
    return (
        <div>   
            <img src={loadingImg} className={s.loadingImg} />
        </div>
    );
}

export default FetchingSign;