import React from 'react';
import Hat from './Hat/Hat';
import Avatar from './Avatar/Avatar';
import Desc from './Desc/Desc';
import s from "./ProfileContent.module.css"
import PostFormContainer from './PostForm/PostFormContainer';
import PostsContainer from './Posts/PostsContainer';
import FetchingSign from '../FetchingSign/FetchingSign';
import { withAuthRedirect } from '../AuthRedirect/withAuthRedirect';




const ProfileContent = (props) => {
    if(!props.profile) {
        return <FetchingSign />
    }
    
    return (
        
        <div>
            <Hat hatSrc={props.profile.headSrc}/>
            
            <div className={s.flex}>
                <Avatar imgSrc={props.profile.imgSrc}/>
                <Desc followAction={props.followAction} username={props.username} sendStatus={props.sendStatus} setStatus={props.setStatus} profile={props.profile}/>
            </div>

            <PostFormContainer />

            <PostsContainer />

            
        </div>
    );
}

export default ProfileContent;