import React from 'react';
import s from "./Right.module.css";
import MsgFormContainer from './MsgForm/MsgFormContainer';
import MessagesContainer from './Messages/MessagesContainer';
import { withRouter } from 'react-router-dom';


const Right = (props) => {

    

 

    return (
        <div className={s.right}>
            <MessagesContainer/>
            
            {props.match.params.username && <MsgFormContainer />}
        </div>
    );
}

export default withRouter(Right);