import React, {useEffect} from 'react';
// import {Facebook} from '@material-ui/icons'
import Fb_Logo from '../../icons/logo/fb-icon-logo'

export default function fb_logo(props) {

    const style = {
        transform: 'scale('+props.scale+')',
        cursor: 'pointer'
    }

    return(
        <>  
            <Fb_Logo style={style}/>
        </>
    )
}