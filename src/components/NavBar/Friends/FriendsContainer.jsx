import React from 'react';
import Friends from './Friends';
import { connect } from "react-redux";



class FriendsClass extends React.Component {
    

    render() {
        return <Friends friends={this.props.friends} />;
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.navBar.friends
    };
}



const FriendsContainer = connect(mapStateToProps)(FriendsClass);

export default FriendsContainer;