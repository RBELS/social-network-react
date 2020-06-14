import { connect } from 'react-redux';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../AuthRedirect/withAuthRedirect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';



let mapStateToProps = state => {
    return {
        logged: state.auth.logged
    };
}


export default compose(
    connect(mapStateToProps),
    withAuthRedirect,
    withRouter
)(Dialogs);