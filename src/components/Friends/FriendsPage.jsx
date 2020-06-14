import React from 'react';
import s from './FriendsPage.module.css';
import UsersContainer from '../UsersPage/Users/UsersContainer';



class FriendsPage extends React.Component {

    state = {
        switch: "2"
    }

    onFollowersClick() {
        this.setState({ switch: "2" });
    }

    onFollowsClick() {
        this.setState({ switch: "3" });
    }

    render() {
        return <>
            <div className={s.head}>
                <div onClick={this.onFollowersClick.bind(this)} className={this.state.switch == "2" ? s.active : s.notActive}>Followers</div>
                <div onClick={this.onFollowsClick.bind(this)} className={this.state.switch == "3" ? s.active : s.notActive}>Follows</div>
            </div>

            <div className={s.list}>
                <UsersContainer mode={this.state.switch}/>
            </div>
        </>
    }
    
    
}

export default FriendsPage;