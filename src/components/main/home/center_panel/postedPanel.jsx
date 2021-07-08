import React, {useState, useEffect, useRef} from 'react';
import { Avatar} from '@material-ui/core';
import {EmojiEmotions} from '@material-ui/icons';
import './postedPanel.css'
import PostReactionSection from './PostReactionSection';
import PostReactionProvider from './postReactionProvider';


function PostedPanel({avatar, poster_name, poster_firstname, post_timestamp, visibility, text_content, media_content}) {
    const [visibility_icon, setVisibilityIcon] = useState(null);

    useEffect(() => {
        setVisibilityIcon(visibility)
    }, [visibility_icon])

    return (
       <>
        <div>
            <div className="heading-posted">
                <div className="poster-subject">
                    <Avatar src={avatar} className="poster-avatar"/>
                    <span className="poster-name-timing">
                        <span className="poster-name">{poster_firstname} {poster_name}</span>
                        <span className="post-timestamp"> {post_timestamp} <span className="post-visibility"> {visibility_icon}</span> </span>
                    </span>
                </div>
                <div className="option-heading">
                    <span className="option-heading-icon little-icon-hoverable">&#8943;</span>
                </div>
            </div>
            <div className="post-content">
            {text_content ? <span className='text-content'>{text_content}</span> : ''}
                {media_content ? <span className='media-content'>{media_content}</span> : ''}
            </div>  
            <PostReactionProvider>
                <PostReactionSection/>
            </PostReactionProvider>
        </div>
       </>
    );
}

export default PostedPanel; 