import React, { useEffect } from 'react';
import './topStory.css'
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom'

function TopStoryEntity({img, avatar, title, path}) {

    return (
        <span className="story-entity" style={{backgroundImage: `url(${img})`}}>
            <Link to={path}>
                <span className="story-avatar"><Avatar src={avatar}/></span>
                <span className="story-title">{title}</span>    
            </Link>
        </span>
    );
}

export default TopStoryEntity;