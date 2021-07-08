import React from 'react';
import './topStory.css'
import {Link} from 'react-router-dom'
import { Add } from '@material-ui/icons';

function CreateStory({avatar, path}) {
    return (
        <span className="story-entity" style={{backgroundImage: `url(${avatar})`}}> 
            <Link to={path}>
                <span className="create-story">
                        <span className="create-story-add"><Add/></span>
                        <span className="story-title">Create a story</span>  
                </span>  
            </Link>
        </span>
    );
}

export default CreateStory;
