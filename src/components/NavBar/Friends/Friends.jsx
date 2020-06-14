import React from 'react';
import s from "./Friends.module.css";
import Friend from './Friend/Friend';



const Friends = (props) => {

    let friendsEls = props.friends.map(f => <Friend id={f.id} name={f.name} key={f.id} avaSrc={f.avaSrc}/>);

    return (
        <div className={s.friends}>
            <div className={s.h}>Friends</div>
            {friendsEls}
        </div>
    );
}

export default Friends;