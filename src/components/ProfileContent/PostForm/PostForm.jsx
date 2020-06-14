import React from 'react';
import s from "./PostForm.module.css";

const PostForm = (props) => {

    let onTextAreaChange = (event) => {
        props.updateNewPostText(event.target.value);
    }
    

    return (
            <div className={s.postForm}>
                <div className={s.postTitle}>My Posts</div>
                <form method="POST" action="server.php">
                    <textarea onChange={onTextAreaChange} value={props.newPostText} id={s.data} name="data" placeholder="your news...">

                    </textarea>
                    <br/>
                    <div className={s.bt} onClick={props.addPost} >Send</div>
                </form>
            </div> 
    );
}

export default PostForm;