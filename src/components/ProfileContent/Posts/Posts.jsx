import React from 'react';
import s from "./Posts.module.css";
import Post from './Post/Post';



const Posts = (props) => {

    let postsEls = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} avaSrc={p.avaSrc} key={p.id} id={p.id}/>);

    return (
        
        <div className={s.posts}>
            {postsEls}
        </div>

            
    );
}

export default Posts;