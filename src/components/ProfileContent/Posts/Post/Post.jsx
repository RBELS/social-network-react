import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
        
        <div className={s.post}>
            <div className={s.avaPText}>
                <img src={props.avaSrc} className={s.avatar}></img>
                <div className={s.text}>{props.message}</div>
            </div>
            <div className={s.likes}>
                <img className={s.likeImg} src="https://cdn3.iconfinder.com/data/icons/faticons/32/heart-01-512.png"/>
                <div className={s.likesCount}>{props.likesCount}</div>
            </div>
        </div>

            
    );
}

export default Post;