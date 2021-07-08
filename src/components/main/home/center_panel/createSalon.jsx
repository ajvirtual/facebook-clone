import React from 'react';
import './createSalon.css';
import { Camera, CameraEnhance, VideoCall} from '@material-ui/icons';

function CreateSalon(props) {
    return (
        <div className="create-salon">
            <span> <VideoCall/> Create a salon </span>
        </div>
    );
}

export default CreateSalon;