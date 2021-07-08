import '../../styles/header/header_nav_middle.css'
import Fb_Gaming from '../../icons/navigation/fb-gaming'
import Fb_Watch from '../../icons/navigation/fb-watch'
import Fb_Group from '../../icons/navigation/fb-group'
import {Home} from '@material-ui/icons'
import {NavLink} from 'react-router-dom'


export default function header_nav_menu() {
    
    return(
        <>
            <ul className="menu-header-bar row justify-content-center p-0 m-0">    
                <li className="fb-home">
                   <NavLink to='/' exact activeClassName="menu-nav-active"> 
                        <span >
                            <Home/>
                        </span>
                    </NavLink>
                </li>
                <li className=" fb-watch">
                   <NavLink to='/watch' activeClassName="menu-nav-active">
                        <span>  
                            <Fb_Watch/>
                        </span>
                   </NavLink>
                </li>
                <li className=" fb-group">
                    <NavLink to='/group' activeClassName="menu-nav-active">
                        <span>
                            <Fb_Group/> 
                        </span>
                   </NavLink>
                </li>
                <li className=" fb-gaming">
                     <NavLink to='/gaming' activeClassName="menu-nav-active">
                        <span>
                            <Fb_Gaming/>
                        </span>
                     </NavLink>
                </li>   
            </ul>
        </>
    )
}