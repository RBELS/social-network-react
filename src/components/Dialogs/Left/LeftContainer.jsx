import React from 'react';
import { connect } from 'react-redux';
import Left from './Left';
import { getDialogsTC } from '../../../redux/dialogs-page-reducer';

let mapStateToProps = (state) => {
    return {
        dialogsEls:state.dialogsPage.dialogs
    };
}

class LeftContainer extends React.Component {

    componentDidMount() {
        this.props.getDialogs();
    }

    render() {
        return <Left dialogsEls={this.props.dialogsEls}/>;
    }
}



// const LeftContainer = connect(mapStateToProps)(Left);

export default connect(mapStateToProps, { getDialogs: getDialogsTC })(LeftContainer);