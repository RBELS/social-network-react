import React from 'react';
import s from "./User.module.css";
import { NavLink } from 'react-router-dom';

const User = (props) => {


    return (
        <div className={s.main}>
            <div className={s.avaFollow}>
                <img className={s.ava} src={props.imgSrc}/>
                <div className={s.followBt} onClick={ () => {
                    props.followAction(props.username);
                } }>
                    {props.followText}
                </div>
            </div>

            <div className={s.info}>
                <div className={s.nameInfo}>
                    <NavLink to={`profile/${props.username}`}>
                        <div className={s.name}>
                            {props.name}
                        </div>
                    </NavLink>
                    
                    <div className={s.comm}>
                        {props.status}
                    </div>
                </div>

                <div className={s.loc}>
                    {`${props.country}, ${props.city}`}
                </div>
            </div>
        </div>
    );
}

export default User;