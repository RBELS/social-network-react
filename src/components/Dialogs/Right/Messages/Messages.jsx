import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';
import ShowMoreMsgsContainer from '../ShowMoreMsgsContainer/ShowMoreMsgsContainer';
import FetchingSign from '../../../FetchingSign/FetchingSign';



const Messages = props => {

    let messagesEls = props.messagesState.map(d => <Message imgSrc={d.imgSrc} name={d.name} text={d.msgText} key={d.pk} username={d.username}/>);
    return (
        <div className={s.msgs}>
            {messagesEls}
            {props.isFetching && <FetchingSign />}
            {!props.isFetching && props.messagesState.length != 0 && props.state.page < props.totalPages && <ShowMoreMsgsContainer lastPK={props.lastPK} {...props.state} totalPages={props.totalPages} appendMessages={props.appendMessages} changePage={props.changePage} />}
        </div>
    );
}


export default Messages;