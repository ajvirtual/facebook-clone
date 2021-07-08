import React from 'react';
import {Link} from 'react-router-dom';
import { KeyboardArrowDown } from '@material-ui/icons';
import './home_left_side.css'

function LeftNavSeeMore({path}) {
    const handleClick = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <Link to={path} onClick={handleClick}>
                <span className="left-menu-see-more">
                    <span className="see-more-icon-l fb-little-icon"> <KeyboardArrowDown /></span>
                    <span>See more</span>
                </span>
            </Link>
        </div>
    );
}

export default LeftNavSeeMore;