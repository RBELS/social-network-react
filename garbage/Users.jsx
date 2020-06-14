import React from 'react';
import User from './User/User';
import * as Axios from "axios";

const Users = (props) => {

    

    let getUsers = () => {
        if(props.usersList.length == 0) {
    
            Axios.get("http://socialnetwork.home/users.php?page=1").then(response => {

                props.setUsers(response.data);
            });
        }
    }

    getUsers();


    let usersEls = props.usersList.map(u => <User id={u.id} followText={u.followed ? "Unfollow" : "Follow"} name={u.name} 
                                            country={u.country} city={u.city} profileInfo={u.profileInfo} imgSrc={u.imgSrc} toggleFollow={props.toggleFollow}/> );

    return ( 
        <div>
            {usersEls}
        </div>
    );
}

export default Users;