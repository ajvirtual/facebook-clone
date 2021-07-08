import React from 'react';
import './home_right_side.css'
import RightSideEvent from './rightSideEvent';
import HomeRightAdBox from './homeRightAdBox';
import FriendStatusBox from './FriendStatusBox';
import CreateGroupRightBottom from './createGroupRightBottom';

function Right_side_panel(props) {
    return (
        <div className="right_side_main">
            <RightSideEvent text="today is Roronoa Zoro birthday"/>
            <HomeRightAdBox/>
            <FriendStatusBox/>
            <CreateGroupRightBottom/>
        </div>
    );
}

export default Right_side_panel;