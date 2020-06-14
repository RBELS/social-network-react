import React from 'react';
import ReadyLoginForm from './ReadyLoginForm';

class ReadyLoginFormAPIContainer extends React.Component {

    componentDidMount = () => {
        this.props.getName();
    } 

    render() {
        return (
            <ReadyLoginForm onLogoutClick={this.props.onLogoutClick} name={this.props.name}/>
        );
    }
}




let ContContainer = props => {

    let onLogoutClick = () => {
        props.logout();
    }

    return (
        <ReadyLoginFormAPIContainer {...props} onLogoutClick={onLogoutClick} />
    );
}

export default ContContainer;