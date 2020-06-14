import React from 'react';
import s from './ShowMoreMsgs.module.css';

const ShowMoreMsgs = props => {

    let onBtClick = () => {
        // if(props.page > props.totalPages-1) return;
        props.appendMessages(props.page+1,props.pageNum,props.recipient,props.lastPK);
        props.changePage(props.page+1);
    }

    return (
        <div onClick={onBtClick} className={s.button}>
            Show More
        </div>
    );
}

export default ShowMoreMsgs;