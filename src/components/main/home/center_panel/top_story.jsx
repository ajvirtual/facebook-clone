import React from 'react';
import './topStory.css'
import TopStoryEntity from './topStoryEntity';
import { ArrowForward } from '@material-ui/icons';
import CreateStory from './createStory';
import luffy from '../../../../images/lufi.jpg'
import shanks from '../../../../images/chanks.jpg';
import rayghlei from '../../../../images/raighlei.jpg';
import zoro from '../../../../images/zoro.jpg';
import dragon from '../../../../images/dragon.jpg';

function TopStory(props) {
   
    return (
        <div className="top-story-container">
            <span className="top-story-arrow-next">
                <ArrowForward/>
            </span>
            <CreateStory path="/watch" avatar={luffy}/>
            <TopStoryEntity title='Shanks' img={shanks}/>
            <TopStoryEntity title='Rayghlei' img={rayghlei}/>
            <TopStoryEntity title='Monkey D. Dragon' img={dragon}/>
            <TopStoryEntity title='Roronoa Zoro' img={zoro}/>
        </div>
    );
}

export default TopStory;