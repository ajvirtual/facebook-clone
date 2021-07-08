import React, { useRef } from 'react';
import { Avatar } from '@material-ui/core';
import { PictureInPicture, AddAPhotoTwoTone, AddAPhoto, AddPhotoAlternate, PersonAdd, Person } from '@material-ui/icons';
import './publish_sth.css'

function PublishSomething({avatar, name, firstname}) {
    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        inputRef.current.value = ''
    }

    return (
        <div className="publish-sth-container">
            <div className="input-sth">
                <Avatar src={avatar} />
                <form onSubmit={handleSubmit}>
                    <input type="text" name="" id="" placeholder={`what's up, ${firstname} ?`} autocomplete="off" ref={inputRef}/>
                </form>
            </div>  
            <div className="pict-sth-identify">
                <span className="post-pict-video">
                    <AddPhotoAlternate/> Picture/Video
                </span>
                <span className="identify-friend">
                    <PersonAdd/> Identify friends
                </span>
            </div>
        </div>
    );
}

export default PublishSomething;