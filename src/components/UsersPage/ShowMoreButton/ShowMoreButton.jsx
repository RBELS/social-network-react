import React from 'react';
import s from "./ShowMoreButton.module.css";

const ShowMoreButton = (props) => {

    let showMore = () => {
        props.getUsers(props.page,props.els,props.mode);
        props.incrPage();
    }

    return (
        <div className={s.button} onClick={showMore}>
            Show more
        </div>
    );
}

export default ShowMoreButton;