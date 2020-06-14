import React from 'react';
import { connect } from 'react-redux';
import ProfileContent from './ProfileContent';
import { setProfileAC, getUserThunkCretor, setStatusTC, setStatusAC } from '../../redux/profile-page-reducer';
import { withRouter } from "react-router-dom";
import { compose } from 'redux';
import { followTC, unfollowTC } from '../../redux/users-page-reducer';
import FetchingSign from '../FetchingSign/FetchingSign';
import { withAuthRedirect } from '../AuthRedirect/withAuthRedirect';


class ProfileContentAPIContainer extends React.Component {

    componentDidMount = () => {
        let username = this.props.match.params.username;
        this.props.getUser(username);
    }

    componentWillReceiveProps(newProps) {


        if(newProps.match.params.username != this.props.match.params.username) {
            this.props.getUser("");
        }
    }

    follow = () => {
        let username = this.props.profile.username;
        if(this.props.blocked.some(u => u == username)) return;
        this.props.follow(username);
    }

    unfollow = () => {
        let username = this.props.profile.username;
        if(this.props.blocked.some(u => u == username)) return;
        this.props.unfollow(username);
    }

    render() {
        if(!this.props.logged) {
            return <FetchingSign />
        } else {
            return <ProfileContent myUsername={this.props.myUsername} followAction={this.props.profile.followed ? this.unfollow : this.follow} username={this.props.match.params.username} 
            sendStatus={this.props.sendStatus} setStatus={this.props.setStatus} profile={this.props.profile}/>;
        }
    }
}

let mapStateToProps = state => {
    return {
        profile: state.profilePage.profile,
        blocked: state.usersPage.followsToBlock,
        logged: state.auth.logged,
        myUsername: state.auth.username
    };
}


export default compose(
    connect(mapStateToProps, { setStatus: setStatusAC ,sendStatus: setStatusTC, setProfile:setProfileAC, getUser:getUserThunkCretor, follow:followTC, unfollow:unfollowTC }),
    withRouter,
    withAuthRedirect
)(ProfileContentAPIContainer)