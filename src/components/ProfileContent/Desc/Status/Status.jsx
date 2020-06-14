import React from 'react';
import s from './Status.module.css';
import { withRouter } from 'react-router-dom';

class Status extends React.Component {
    

    state = {
        canEditStatus: false,
        isEditing: false
    };

    componentDidMount() {
        debugger
        if(!this.props.username) {
            this.setState({ canEditStatus: true });
        }
    }

    componentWillReceiveProps(newProps) {
        if(!newProps.username) {
            this.setState({ canEditStatus: true });
        }
    }

    editStart = () => {
        if(this.state.canEditStatus) {
            this.setState({ isEditing: true });
        }
    }

    editEnd = (event) => {
        this.props.sendStatus(this.props.status);
        this.setState({ isEditing: false });
    }

    onStatusChange = event => {
        this.props.setStatus(event.target.value);
    }

    render() {
        
        let draw = this.state.isEditing ? 
        <div onBlur={this.editEnd} className={s.status}>
            Status: <input onChange={this.onStatusChange} className={s.input} autoFocus={true} className={s.status} value={this.props.status} type="text"/>
        </div> :

        <div onDoubleClick={this.editStart} className={s.status}>
            Status: {this.props.status}
        </div>;

        return draw;
    }
}

export default Status;