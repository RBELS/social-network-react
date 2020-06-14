import React from 'react';
import Users from './Users';

class UsersApiComponent extends React.Component {

    constructor(props) {
        super(props);
    }
    

    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.els, this.props.mode);
        this.props.incrPage();
    }
    
    componentWillUnmount() {
        this.props.updPage();
        this.props.deleteUsers();
    }

    componentWillReceiveProps(newProps) {
        if(this.props.mode != newProps.mode) {
            this.props.updPage();
            this.props.deleteUsers();
        }
        if(newProps.page == 1) {
            this.props.getUsers(newProps.page, this.props.els, newProps.mode);
            this.props.incrPage();
        }
    }

    

    follow = username => {
        if(this.props.blocked.some(u => u == username)) return;
        this.props.follow(username);
    }

    unfollow = username => {
        if(this.props.blocked.some(u => u == username)) return;
        this.props.unfollow(username);
    }



    

    render() {
        return(
            <Users myUsername={this.props.myUsername} addToBlocked={this.props.addToBlocked} deleteFromBlocked={this.props.deleteFromBlocked} unfollow={this.unfollow} follow={this.follow} isFetching={this.props.isFetching} usersList={this.props.usersList} />
        ); 
    }
}

export default UsersApiComponent;