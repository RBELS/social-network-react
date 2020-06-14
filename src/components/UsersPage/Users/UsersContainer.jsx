import { connect } from "react-redux";
import { toggleFetchingAC, getUsersTC, followTC, unfollowTC, deleteUsersAC, setPageAC } from "../../../redux/users-page-reducer";
import UsersAPIComponent from "./UsersAPIComponent";
import { withAuthRedirect } from "../../AuthRedirect/withAuthRedirect";
import ShowMoreButtonContainer from "../ShowMoreButton/ShowMoreButtonContainer";
import React from 'react';


let mapStateToProps = (state) => {
    
    return {
        usersList: state.usersPage.users,
        // currentPage: state.usersPage.currentPage,
        // usersPageEls: state.usersPage.usersPageEls,
        isFetching: state.usersPage.isFetching,
        blocked: state.usersPage.followsToBlock,
        logged: state.auth.logged,
        first: state.usersPage.first,
        myUsername: state.auth.username
    };
}


const UsersContainer = connect(mapStateToProps, {
    getUsers: getUsersTC,
    toggleFetching: toggleFetchingAC,
    follow: followTC,
    unfollow: unfollowTC,
    deleteUsers: deleteUsersAC,
    setPage: setPageAC
})(withAuthRedirect(UsersAPIComponent));

export default class extends React.Component {

    state = {
        page: 1,
        els: 5,
        mode: this.props.mode
    }

    componentWillReceiveProps(newProps) {
        this.setState({ mode: newProps.mode });
    }

    incrPage = () => {
        this.setState({ page: this.state.page + 1 });
    }

    updPage = () => {
        this.setState({ ...this.state, page: 1 });
    }

    render() {
        
        return (<>
            <UsersContainer myUsername={this.props.myUsername} updPage={this.updPage} incrPage={this.incrPage} {...this.state}/>
            <ShowMoreButtonContainer incrPage={this.incrPage} {...this.state}/>
        </>);
    }
} ;