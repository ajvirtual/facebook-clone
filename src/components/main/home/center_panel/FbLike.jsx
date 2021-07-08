import React, { useState, useEffect, useRef } from 'react';
import IconLike from '../../../../images/icons/fb_like_icon.svg';
import IconAngry from '../../../../images/icons/fb_angry_icon.svg';
import IconLove from '../../../../images/icons/fb_love_icon.svg';
import IconSad from '../../../../images/icons/fb_sad_icon.svg';
import IconWow from '../../../../images/icons/fb_wow_icon.svg';
import IconCare from '../../../../images/icons/fb_care_icon.svg';
import IconHaha from '../../../../images/icons/fb_haha_icon.svg';
import { ThumbUp } from '@material-ui/icons';
import {react_action, PostReactContext} from './postReactionProvider';
  

function FbLike(props) {
    const [state, dispatch] = PostReactContext()
    const [hovered, setHovered] = useState(false)
    const [POST_LIKE_ICON, setPostLikeIcon] = useState(<div className=""><ThumbUp/>Like</div>) 

    const mouseenter_event = (duration) => {
        setTimeout(() => setHovered(true), duration)
    }
    
    const hoveredFalse = () => {setHovered(false)}

    const mouseleave_event = (event_leave) => {   
        const duration = 500        
        setTimeout(() => {
            setHovered(false);
        }, duration)    
    }
    
    const handleOnMouseenter = (e) => {
        const duration = 1000
        if(e.currentTarget === document.querySelector('.react-post')) {
            document.addEventListener('click', hoveredFalse)
        }
        mouseenter_event(duration, e)
    }

    const handleReacting = (e, type, big_Like_btn) => {

        const react_t = type.toUpperCase()
        const remove_react = `REMOVE_${react_t}`;
        const add_react = `ADD_${react_t}`;
        let r_action = JSON.stringify(react_action)
        if(state.reacted) {
            if(type === state.current_react || big_Like_btn) {
                eval(`dispatch({type: ${r_action}.${remove_react}})`)                    
            } else {
                eval(`dispatch({type: ${r_action}.${add_react}})`)  
                dispatch({type: react_action.REMOVE_SIBLING_REACT})
            }   
        } else {
            eval(`dispatch({type: ${r_action}.${add_react}})`)  
        }
    }


    useEffect(() => {
        setPostLikeIcon(() => {
            if(state.current_react === '') return <div><ThumbUp/>Like</div>
            switch (state.current_react) {
                case 'like':
                    return <div style={{color: 'var(--fb-blue)'}}><ThumbUp/>Like</div>
                    break;
                
                case 'love':
                    return <div style={{color: 'rgb(243, 62, 88)'}}><img src={IconLove} alt="love" style={{height: '1.3em'}}/>Love</div>
                    break;
                
                case 'care':
                    return <div style={{color: 'rgb(247, 177, 37)'}}><img src={IconCare} alt="care" style={{height: '1.3em'}}/>Care</div>
                    break;

                case 'haha':
                    return <div style={{color: 'rgb(247, 177, 37)'}}><img src={IconHaha} alt="haha" style={{height: '1.3em'}}/>Haha</div>
                    break;

                case 'wow':
                    return <div style={{color: 'rgb(247, 177, 37)'}}><img src={IconWow} alt="wow" style={{height: '1.3em'}}/>Wow</div>
                    break;

                case 'sad':
                    return <div style={{color: 'rgb(247, 177, 37)'}}><img src={IconSad} alt="sad" style={{height: '1.3em'}}/>Sad</div>
                    break;
            
                case 'angry':
                    return  <div style={{color: 'rgb(233, 113, 15)'}}><img src={IconAngry} alt="angry" style={{height: '1.3em'}}/>Angry</div>
                    break;

                default:
                    // <div className=""><ThumbUp/>Like</div>
                    break;
            } 

        })

       return () => {
            document.removeEventListener('click', hoveredFalse)
       }
    }, [state])

    return (    
        <div className="like-post-container">
            <span className="react-list-choice" style={{display: hovered ? 'flex' : 'none'}} onMouseLeave={mouseleave_event}>
                <span className="fb-like-icon" onClick={(e) => {handleReacting(e, 'like')}}><img src={IconLike} alt="like"/></span>
                <span className="fb-love-icon" onClick={(e) => {handleReacting(e, 'love')}}>
                    <img src={IconLove} alt="love"/>
                </span>
                <span className="fb-care-icon" onClick={(e) => {handleReacting(e, 'care')}}>
                    <img src={IconCare} alt="care"/>
                </span>
                <span className="fb-haha-icon" onClick={(e) => {handleReacting(e, 'haha')}}>
                    <img src={IconHaha} alt="haha"/>
                </span>
                <span className="fb-sad-icon" onClick={(e) => {handleReacting(e, 'sad')}}>
                    <img src={IconSad} alt="sad"/>
                </span>
                <span className="fb-wow-icon" onClick={(e) => {handleReacting(e, 'wow')}}>
                    <img src={IconWow} alt="wow"/>
                </span>
                <span className="fb-angry-icon" onClick={(e) => {handleReacting(e, 'angry')}}>
                    <img src={IconAngry} alt="angry"/>
                </span>
            </span>
              
            <span className="react-post"  onMouseEnter={handleOnMouseenter} onClick={(e) => handleReacting(e, 'like', true)}>
                {POST_LIKE_ICON}
            </span> 
        </div>
    )
}

export default FbLike;