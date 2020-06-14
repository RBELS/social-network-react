import React from 'react';
import ShowMoreMsgs from './ShowMoreMsgs';

class ShowMoreMsgsContainer extends React.Component {
    render() {
        return (
            <ShowMoreMsgs {...this.props}/>
        );
    }
}

export default ShowMoreMsgsContainer;