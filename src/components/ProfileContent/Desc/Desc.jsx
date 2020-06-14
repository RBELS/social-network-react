import React from 'react';
import s from "./Desc.module.css";
import Status from './Status/Status';
import { NavLink } from 'react-router-dom';

const Desc = (props) => {
    const onFollowClick = () => {
        props.followAction();
    }
    
    let doNotShowButtons = props.username == undefined || props.username == props.myUsername;

    return (
        <div className={s.desc}>
            <div className={s.name}>{props.profile.name}</div>
            <div className={s.buttons}>
                {!doNotShowButtons && <div className={s.bt} onClick={onFollowClick}>
                    {props.profile.followed ? "Unfollow" : "Follow"}
                </div>}
                {!doNotShowButtons && <NavLink to={`/messages/${props.username}`}><div className={s.bt}>Start Dialog</div></NavLink>}
            </div>
            <Status username={props.username} sendStatus={props.sendStatus} setStatus={props.setStatus} status={props.profile.status}/>
            <div className={s.dob}>Date of Birth: {props.profile.dob}</div>
            <div className={s.country}>Country: {props.profile.country}</div>
            <div className={s.city}>City: {props.profile.city}</div>
            <div className={s.edu}>Education: {props.profile.edu}</div>
            <div className={s.website}>Website: {props.profile.website}</div>
        </div>
    );
}

export default Desc;