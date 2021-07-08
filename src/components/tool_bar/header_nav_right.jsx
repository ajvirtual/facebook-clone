import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Add, ArrowDropDownRounded} from '@material-ui/icons'
import Fb_message from '../../icons/navigation/fb-message'
import Fb_notification from '../../icons/navigation/fb-notification'
import '../../styles/header/header_nav_right.css'

export default function HeaderNavRight(props) {
    const [expanded, SetExpandState] = useState(false)
    useEffect(() => SetExpandState(props.expanded), [])

    return(
        <>
           <div className={expanded === true ? "right-nav-expanded" : "right-header-nav-container"}>
                <ul>
                    <li><Link to="/fb-add"><Add/></Link></li>
                    <li><Link to="/fb-message"><Fb_message/></Link></li>
                    <li><Link to="/fb-notification"><Fb_notification/></Link></li>
                    <li><Link to="/fb-dropdown"><ArrowDropDownRounded className="caret-menu-dropdown"/></Link></li>
                </ul>
           </div>
        </>
    )
}