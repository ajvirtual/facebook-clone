import {useEffect, useState} from 'react'
import '../../styles/header/tool_bar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search_tool from './search-tool'
import FbIconLogo from '../../icons/logo/fb-icon-logo'
import FbTextLogo from '../../icons/logo/fb-text-logo'
import MenuTool from './menu_tool'
import MiddleNavList from './header_nav_middle'
import RightNavList from './header_nav_right'
import {SupervisedUserCircle } from '@material-ui/icons'

export default function MainHeader() {

    const [small_device, setSmallDev] = useState(false)
    const icon_fb_logo = <FbIconLogo scale="1.17"/>
    const text_fb_logo = <FbTextLogo />

    const handleResize = () => {
        window.onresize = (e) => {
            if(e.target.innerWidth >= 768) {
                setSmallDev(false)  
            } 
            if(e.target.innerWidth < 768 ){
                setSmallDev(true)  
            }
    }}

    handleResize()

    useEffect(() => {
        handleResize()
        if(window.innerWidth >= 678) {
            setSmallDev(false)
        }
        if(window.innerWidth < 678 ){
            setSmallDev(true)
        }
    }, [])

    const top_right_icon_nav = <>
           <span className="top-right-icons">
                <span className="search-header-min" >
                    <Search_tool expanded="true"/>
                </span>
                <span className="user-header-icon text-light" >
                    <SupervisedUserCircle/>
                </span>
                <span className="toogle-param-tool">
                    <MenuTool/>
                </span>
           </span>
    </>
    
    const left_norm_ico_search = <span className="search-header-min" >
                                    <Search_tool expanded="false"/>
                                </span>
    
    return (
        <>  
            <div className="extra-container row flex-nowrap m-0">
                <div className="col-11 col-md-3 left-header d-flex align-items-center">
                    <span className="logo-header">{small_device === true ? text_fb_logo : icon_fb_logo}</span>
                    {small_device === true ? top_right_icon_nav : left_norm_ico_search } 

                </div>
                <div className="d-none d-md-block col-md-6 middle-header">
                    <MiddleNavList/>
                </div>
                <div className="right-header d-none d-md-block col-md-3 row p-0 m-0 justify-content-end">
                    <RightNavList expanded="false"/>
                </div>
                {/* <div className="col-1 d-md-none bg-light">
                    <MenuTool/>
                </div> */}
            </div>
        </>
    )
}
