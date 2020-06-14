import React from 'react';
import {addPostActionCreator, newPostTextChangeActionCreator} from "../../../redux/profile-page-reducer";
import PostForm from './PostForm';
import { connect } from 'react-redux';


//Without react-redux  Provider
// const SuperPostFormContainer = (props) => {

    
    
//     let onTxtAreaChange = (text) => {
//         props.store.dispatch(newPostTextChangeActionCreator(text));
//     }

//     let onAddPost = () => {
//         debugger
//         props.store.dispatch(addPostActionCreator());
//     }

//     return (
//             <PostForm addPost={onAddPost} updateNewPostText={onTxtAreaChange} newPostText={props.store.getState().profilePage.newPostText}/>
//     );
// }




//With react-redux  Provider
//But don't do that too many times, cause u should give only NEEDED props to a component
let mapStateToProps = (state) => {
    return {
        newPostText:state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//            dispatch(newPostTextChangeActionCreator(text));
//         },
//         addPost: () => {
//             dispatch(addPostActionCreator());
//         }
//     }
// }


const PostFormContainer = connect(mapStateToProps, {
    updateNewPostText: newPostTextChangeActionCreator,
    addPost: addPostActionCreator
})(PostForm);


export default PostFormContainer;