import React from 'react';
import { connect } from 'react-redux';
import { amLoggedTC, loginTC, getNameTC, logoutTC } from '../../../redux/auth-reducer';
import LoginFormAPISendContainer from './LoginFormAPISendContainer';
import ReadyLoginFormAPIContainer from '../ReadyLoginForm/ReadyLoginFormAPIContainer';

class LoginFormAPIContainer extends React.Component {

    // componentDidMount = () => {
    //     this.props.amLogged(this.props.logged);
    // }


    render() {
        
        if(!this.props.logged) {
            return (
                <LoginFormAPISendContainer {...this.props}/>
            );
        }
        else {
            return (
                <ReadyLoginFormAPIContainer getName={this.props.getName} name={this.props.name} logout={this.props.logout} />
            );
        }
        
    }
}

let mapStateToProps = state => {
    return {
        logged: state.auth.logged,
        name: state.auth.name
    };
}



export default connect(mapStateToProps,{
    login: loginTC,
    getName: getNameTC,
    amLogged: amLoggedTC,
    logout: logoutTC
})(LoginFormAPIContainer);