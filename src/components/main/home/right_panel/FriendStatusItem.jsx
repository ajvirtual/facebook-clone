import React from 'react';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom'

function FriendStatusItem({avatar, name, firstname, path}) {
    return (
        <Link to={path}>
            <div className="friend-status-item">
                <Avatar src={avatar}/>
                {firstname} {name}
            </div>
        </Link>
    );
}

export default FriendStatusItem;