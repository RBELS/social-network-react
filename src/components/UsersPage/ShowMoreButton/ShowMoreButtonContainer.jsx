import { connect } from "react-redux";
import Axios from "axios";
import { getUsersAC, toggleFetchingAC, getUsersTC } from '../../../redux/users-page-reducer';
import ShowMoreButton from './ShowMoreButton';
import { getUsers } from "../../../api/api";

// const PastShowMoreButton = (props) => {
//     return (
//         <div className={s.button}>
//             Show more
//         </div>
//     );
// }

let mapStateToProps = (state) => {
    
    return {
        
    };
}



const ShowMoreButtonContainer = connect(mapStateToProps, { getUsers:getUsersTC, toggleFetching: toggleFetchingAC })(ShowMoreButton);

export default ShowMoreButtonContainer;