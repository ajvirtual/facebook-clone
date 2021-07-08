import React from 'react';
import {Link} from 'react-router-dom';
import './home_left_side.css';
import { Avatar } from '@material-ui/core';
import LeftSideMenuItem from './leftSideMenuItem'
import ProfileLink from './profileLink';
import { Group, People, Watch, Event, Pages } from '@material-ui/icons';
import LeftNavSeeMore from './leftNavSeeMore';
import LeftNavShortcut from './leftNavShortcut';
import Usop from '../../../../images/usop.jpg';


function LeftSidePanel(props) {
    const group = <Group />
    const friend = <People />
    const watch = <Watch />
    const event = <Event/>
    const page = <Pages />

    return (
        <div className="left_side_main">
            <div className="left-navigation-menu">
                <ProfileLink name="Ramarajaona" firstname="anjatiana" src_profile="/profile" avatar=''/>
                <LeftSideMenuItem label='Friends' src='/friend' icon={friend}/> 
                <LeftSideMenuItem label='Groups' src='/group' icon={group}/> 
                <LeftSideMenuItem label='Watch' src='/watch' icon={watch}/> 
                <LeftSideMenuItem label='Events' src='/event' icon={event}/> 
                <LeftSideMenuItem label='Reminders' src='/reminder' icon={event}/> 
                <LeftSideMenuItem label='Pages' src='/page' icon={page}/> 
                <LeftSideMenuItem label='Job offer' src='/job_offer' icon={event}/>
                <LeftNavSeeMore/>
              
            </div>
            <div className="left-shortcut">
                <h2>Your shortcuts</h2>
                <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/>
                <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/>
                <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/>
                <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/> <LeftNavShortcut path={'/group/rubikscube'} icon={Usop} label="malagasy milalao rubik's cube"/>  
            </div>

        </div>
    );
}

export default LeftSidePanel;