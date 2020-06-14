import Posts from './Posts';
import { connect } from "react-redux";



// const PostsContainer = (props) => {

//     

//     return <Posts postsEls={postsEls}/>;
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    };
}

// let mapDispatchToProps = (dispatch) => {
//     return {

//     };
// }


const PostsContainer = connect(mapStateToProps, {

})(Posts);

export default PostsContainer;