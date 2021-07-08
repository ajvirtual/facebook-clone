import React, { useRef, useEffect, useState} from 'react';
import { MenuOpen, ThumbUp, AddComment, Share, PhotoCamera, Gif, AttachFile, EmojiEmotions, Comment} from '@material-ui/icons';
import { Avatar} from '@material-ui/core';
import FbLike from './FbLike';
import { react_action , PostReactContext} from './postReactionProvider';
import IconLike from '../../../../images/icons/fb_like_icon.svg';
import IconAngry from '../../../../images/icons/fb_angry_icon.svg';
import IconLove from '../../../../images/icons/fb_love_icon.svg';
import IconSad from '../../../../images/icons/fb_sad_icon.svg';
import IconWow from '../../../../images/icons/fb_wow_icon.svg';
import IconCare from '../../../../images/icons/fb_care_icon.svg';
import IconHaha from '../../../../images/icons/fb_haha_icon.svg';
import FbComment from './FbComment';

   // reaction elements
const TopReact = (props) => {
    const [state] = PostReactContext()
    const [react_tot_nb, setReactTotal] = useState(() => Object.values(state.react_nb).reduce((a, b) => a+b))
    
    const like = IconLike, love = IconLove, care = IconCare, haha = IconHaha, sad = IconSad, wow = IconWow, angry = IconAngry;
    
    useEffect(() => {
        setReactTotal(() => Object.values(state.react_nb).reduce((a, b) => a+b))
    }, [state])
    
    const topReact = (obj, number) => {
        const arr = [], arr2 = [], arr3 = [], top_react = [];
        const keys = Object.keys(obj)
        const values = Object.values(obj)
        for(let i = 0; i<keys.length; i++) {
            arr.push(`${values[i]}:${keys[i]}`)
        }
        arr.sort()
        for(let i = 1; i <= number; i++) {
            arr2.push(arr[arr.length - i])    
        }
        
        arr2.forEach( val => arr3.push(val.split(':')[1]))
        arr3.forEach( val => top_react.push(val.split('_')[0]))
        return top_react
    }
    
    const react_stat = <>
                            <span className="react-stat-little-icon">
                                { topReact(state.react_nb, 3).map(reaction =><span><img src={eval(reaction)} alt={reaction}/></span>)}
                            </span>
                            <span>
                            {state.reacted ? `you and ${react_tot_nb - 1} others`: react_tot_nb}
                            </span>
                        </>
    return (
        <>
            {react_tot_nb > 0 && react_stat}
        </>
    )
}
// reaction elements

function PostReactionSection(props) {
    const [state] = PostReactContext()
    const add_com_ref = useRef()
    const comment_ref = useRef()
    
    const handleAddComSubmit = (e) => {
        e.preventDefault()
        add_com_ref.current.value = ''
    }
    
    useEffect(() => {
        comment_ref.current.onclick = () => add_com_ref.current.focus()
    }, [])

    return (
        <div style={{color: '#a3acb5',
            fontSize: '15px'}}>
            <div className="stat-rcs-post">
                <span className="react-stat-post">
                    <TopReact/>
                </span>
                <span className="cs-stat-post">
                    <span className="comment-stat-post">
                        47 comments
                    </span>
                    <span className="share-stat-post">
                        22 shares
                    </span>
               </span>
             </div>
             <div className="react-comm-share">
               <span className={state.current_react === 'like' ? `like-post liked-post` : `like-post`}>
                  <FbLike/>
               </span>
                <span className="comment-post" ref={comment_ref}>
                    <Comment/>
                    Comment
                </span>
                <span className="share-post">
                    <Share/>
                    Share
                </span>
            </div>
            <div className="comment-panel-post">
                <div className="add-comment-post">
                    <Avatar/> 
                    <span className="input-comment-post">
                        <form onSubmit={handleAddComSubmit}>
                            <input type="text" name="" ref={add_com_ref} placeholder="add a comment ..."/>
                        </form>
                        <span className="add-comment-tools">
                           <span> <EmojiEmotions/> </span><span><PhotoCamera/></span><span><Gif/></span><span><AttachFile/></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PostReactionSection;