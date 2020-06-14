import React from "react";
import User from "./User/User";
import FetchingSign from "../../FetchingSign/FetchingSign";

const Users = (props) => {
    
    return (
        <div>
            {props.usersList.map(u => <User addToBlocked={props.addToBlocked} deleteFromBlocked={props.deleteFromBlocked}  followAction={u.followed ? props.unfollow : props.follow} id={u.id} username={u.username} followText={u.followed ? "Unfollow" : "Follow"} name={u.name} 
            country={u.country} city={u.city} status={u.status} imgSrc={u.imgSrc} toggleFollow={props.toggleFollow}/> )}


            
            {props.isFetching ? <FetchingSign /> : null}   
        </div>
    );
}

export default Users;