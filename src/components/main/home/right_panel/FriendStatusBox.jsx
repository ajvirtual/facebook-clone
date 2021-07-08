import React from 'react';
import { VideoCall, Search } from '@material-ui/icons';
import FriendStatusItem from './FriendStatusItem';
import luffy from '../../../../images/lufi.jpg'
import shanks from '../../../../images/chanks.jpg';
import rayghlei from '../../../../images/raighlei.jpg';
import zoro from '../../../../images/zoro.jpg';
import dragon from '../../../../images/dragon.jpg';

function FriendStatusBox(props) {
    return (
            <>
             <div className="friend-status-box">
                <div className="heading-status-box">    
                    <h2>Personnes</h2>
                    <div className="heading-tools">
                        <span className="little-icon-hoverable"><VideoCall/></span>
                        <span className="little-icon-hoverable"><Search/></span>
                        <span className="option-heading-friend little-icon-hoverable">&#8943;</span>
                    </div>
                </div>
                <div className="friends-list-right">
                    <FriendStatusItem avatar={zoro} name="Roronoa" firstname="Zoro"/>
                    <FriendStatusItem avatar={luffy} name="Monkey D" firstname="Luffy"/>
                    <FriendStatusItem avatar={shanks} name="Le Roux" firstname="Shanks"/>
                    <FriendStatusItem avatar={rayghlei} name="" firstname="Rayghlei"/>
                    <FriendStatusItem avatar={zoro} name="Roronoa" firstname="Zoro"/>
                    <FriendStatusItem avatar={luffy} name="Monkey D" firstname="Luffy"/>
                
                </div>
            </div>
            <span className="right-side-separator"></span>

            </>
        );
}

export default FriendStatusBox;