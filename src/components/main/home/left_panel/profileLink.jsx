import React from 'react';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';

function ProfileLink({avatar, name, firstname, src_profile}) {
    return (
        <Link to={src_profile}>
            <div className='left-panel-profile'>
                    <Avatar src={avatar}/>
                    <span style={{textTransform: 'capitalize'}}>{firstname} {name}</span>
            </div>
        </Link>
    );
}

export default ProfileLink;