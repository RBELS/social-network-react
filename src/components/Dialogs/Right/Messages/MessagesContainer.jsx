import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { setMessagesTC, appendMessagesTC } from '../../../../redux/dialogs-page-reducer';
import Messages from "./Messages";

let mapStateToProps = (state) => {
    return {
        messagesState:state.dialogsPage.right.messages,
        totalPages:state.dialogsPage.right.totalPages,
        isFetching: state.dialogsPage.right.isFetching,
        lastPK: state.dialogsPage.right.lastPK
    };
}

class MessagesClass extends React.Component {

    state = {
        page:1,
        pageNum:8,
        recipient: this.props.match.params.username == undefined ? undefined : this.props.match.params.username
    }

    componentDidMount() {  
        this.props.getMessages(this.state.page,this.state.pageNum,this.state.recipient);
    }

    componentWillReceiveProps(newProps) {
        
        

        if(newProps.match.params.username != this.state.recipient) {
            this.setState({ recipient: newProps.match.params.username, page:1 });
            this.props.getMessages(1,this.state.pageNum,newProps.match.params.username);
        }
    }

    changePage = (page) => {
        this.setState({ page });
    }

    appendMessages = (page, pageNum, recipient) => {
        this.props.appendMessages(page, pageNum, recipient);
    }

    render() {
        return (
            <Messages changePage={this.changePage} appendMessages={this.appendMessages} state={this.state} {...this.props}/>
        );
    }
}


export default compose(connect(mapStateToProps, { getMessages: setMessagesTC, appendMessages: appendMessagesTC }),
    withRouter
)(MessagesClass);