import React from 'react';
import { Link } from 'react-router-dom';
import './home_left_side.css'

export default function leftSideMenuItem({src, icon, label}) {
    return ( 
        <Link to={src}>
            <div className="menu-link-left">
                <span> {icon}</span> 
                <span className="menu-lnk-left-info">{label} <small ><span className="bull-state-left">&bull;</span> plus de 100 video</small></span>
            </div>
        </Link>
    )
}