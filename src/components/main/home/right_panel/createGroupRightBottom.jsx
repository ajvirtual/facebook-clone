import React from 'react';
import { Add } from '@material-ui/icons';
import {Link} from 'react-router-dom'

function CreateGroupRightBottom(props) {
    return (
            <Link to="/add-group">
                <div className="create-group-bottom-right">
                        <span className="add-group-bottom-icon fb-little-icon"><Add/></span>
                        <span>Create new group</span>
                </div>
            </Link>
    );
}

export default CreateGroupRightBottom;