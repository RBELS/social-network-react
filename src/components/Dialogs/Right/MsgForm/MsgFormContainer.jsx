import React from 'react';
import { sendMessageActionCreator, onNewMessageTextChangeActionCreator, sendMessageTC } from '../../../../redux/dialogs-page-reducer';
import MsgForm from './MsgForm';
import { connect } from "react-redux";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.right.newMessageText
    };
}




export default compose(withRouter,
    connect(mapStateToProps, { sendMessage: sendMessageTC, onNewMessageTextChange: onNewMessageTextChangeActionCreator })
    )(MsgForm);