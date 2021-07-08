import React from 'react';
import {Link} from 'react-router-dom';
import { Avatar, Box } from '@material-ui/core';

function LeftNavShortcut({path, icon, label}) {
    return (
        <div>
            <Link to={path} >
                <span className="icon-left-sh">
                    <img src={icon} alt={label}/>
                </span>
                <span>
                    {label}
                </span>
            </Link>
        </div>
    );
}

export default LeftNavShortcut;