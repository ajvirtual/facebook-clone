import React, {useState} from 'react';
import {Search, KeyboardArrowLeft} from '@material-ui/icons'
import '../../styles/header/search_tool_header.css'


function readyToSearch(SetReadyToSearch, value, SetFocusInput) {
    SetReadyToSearch(value)
    SetFocusInput(false)
}

    
export default function Search_tool() {

    const [ready_to_search, SetReadyToSearch] = useState(false)
    const [focus_input, SetFocusInput] = useState(false)

    return (
        <>
            <div className={ ready_to_search === true ? 'd-none': 'd-inline-block'} onClick={ (e) => {readyToSearch(SetReadyToSearch, true, SetFocusInput)} } id="circle-container">
                <Search id="search-header"/>
            </div>  
            <div className={ready_to_search === false ? 'transit-sb-dnone': 'search-bar'}>
                <span className='cancel-search-header' onClick={(e) => readyToSearch(SetReadyToSearch, false, SetFocusInput)} >
                    <KeyboardArrowLeft className="arrow-left"/>
                </span>
                <div className='search-input-top'>
                    <Search id="search-header" className={focus_input ? 'transit-anim' : 'd-inherit'}/>
                    <input type="text" placeholder="Recherche sur Facebook" onFocus={() => SetFocusInput(true)} className={focus_input ? 'on-focus-true': ''} autofocus='true' autocomplete='false' onBlur={() => SetFocusInput(false)}/>
                </div>
            </div>
            <div className={focus_input ? 'search-top-result': 'd-none'} >
                
            </div>
        </>
    )
}