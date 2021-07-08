import React from 'react';
import './home_center.css'
import TopStory from './top_story';
import PublishSomething from './publishSomething';
import PostedPanel from './postedPanel';
import CreateSalon from './createSalon';
import luffy from '../../../../images/lufi.jpg'
import { Public } from '@material-ui/icons';

function Center_panel(props) {
    const test_media = <span style={{backgroundImage: `url(${luffy})`}}></span>
    const visibility = <Public/>
    const name = 'Ramarajaona'
    const firstname = 'Anjatiana'
  
    return (
        <div className="center_main">
            <div className="top_story_container">
                <TopStory max_number="5"/>
            </div>
            
            <div className="center-post-container"> 
                <PublishSomething name={name} firstname={firstname}/>
                <CreateSalon />
                <PostedPanel poster_name="Ramarajaona" poster_firstname="Anjatiana" post_timestamp="2h" text_content="orewa natashi orewa nairu" media_content={test_media} visibility={visibility}/>
            </div>
        </div>
    );
}

export default Center_panel;