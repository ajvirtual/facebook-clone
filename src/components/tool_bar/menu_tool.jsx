import {useState} from 'react'
import {Menu, MenuBook, MenuBookOutlined, MenuRounded} from '@material-ui/icons'

export default function MenuTool() {
    const [expanded_menu, expandMenu] = useState(false)
    const style = {
        fill: '#fff',
        fontSize: '1.6em'
    }
    const times_style = {
        color: '#fff',
        fontSize: '1.2em'
    }
    const times_icon = <span style={times_style}>&#10006;</span>

    return (
        <>
            <span onClick={() => expandMenu(!expanded_menu)}>
                {expanded_menu === true ? times_icon : <Menu style={style}/> }
            </span>
        </>
    )
}   