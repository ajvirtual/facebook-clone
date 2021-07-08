    import React, {useReducer, createContext, useContext} from 'react';

    const react_action = {
        'ADD_LIKE': 1,
        'ADD_LOVE': 2,
        'ADD_CARE': 3,
        'ADD_HAHA': 4,
        'ADD_WOW': 5,
        'ADD_SAD': 6,
        'ADD_ANGRY': 7,
        'REMOVE_LIKE': 8,
        'REMOVE_LOVE': 9,
        'REMOVE_CARE': 10,
        'REMOVE_HAHA': 11,
        'REMOVE_WOW': 12,
        'REMOVE_SAD': 13,
        'REMOVE_ANGRY': 14,
        'ADD_COMMENT': 15,
        'REMOVE_SIBLING_REACT': 16
    }

    const react_reducer = (state, action) => {
        switch (action.type) {

            case react_action.ADD_LIKE: // LIKE REACTION
                return {
                    ...state,
                    react_nb: {...state.react_nb, like_nb : state.react_nb.like_nb + 1},
                    reacted: true,
                    current_react: 'like',
                }  
            case react_action.REMOVE_LIKE:
                return {
                    ...state,
                    react_nb: {...state.react_nb, like_nb : state.react_nb.like_nb - 1},
                    reacted: false,
                    current_react: ''
                }

            case react_action.ADD_LOVE: // LOVE REACTION
                return {
                    ...state,
                    react_nb: {...state.react_nb, love_nb: state.react_nb.love_nb + 1},
                    reacted: true,
                    current_react: 'love'
                }
            case react_action.REMOVE_LOVE:
                return {
                    ...state,
                    react_nb: {...state.react_nb, love_nb: state.react_nb.love_nb - 1},
                    reacted: false,
                    current_react: ''
                }
        
            case react_action.ADD_CARE: // CARE REACT
                return {
                    ...state,
                    react_nb: {...state.react_nb, care_nb: state.react_nb.care_nb + 1},
                    reacted: true,
                    current_react: 'care'
                }
            case react_action.REMOVE_CARE:
                return {
                    ...state,
                    react_nb: {...state.react_nb, care_nb: state.react_nb.care_nb - 1},
                    reacted: false,
                    current_react: ''
                }

            case react_action.ADD_HAHA: // HAHA REACT
                return {
                    ...state,
                    react_nb: {...state.react_nb, haha_nb: state.react_nb.haha_nb + 1},
                    reacted: true,
                    current_react: 'haha'
                }
            case react_action.REMOVE_HAHA:
                return {
                    ...state,
                    react_nb: {...state.react_nb, haha_nb: state.react_nb.haha_nb - 1},
                    reacted: false,
                    current_react: ''
                }

              // SAD REACT
              case react_action.ADD_SAD:  // SAD REACT
                return {
                    ...state,
                    react_nb: {...state.react_nb, sad_nb: state.react_nb.sad_nb + 1},
                    reacted: true,
                    current_react: 'sad'
                }
            case react_action.REMOVE_SAD:
                return {
                    ...state,
                    react_nb: {...state.react_nb, sad_nb: state.react_nb.sad_nb - 1},
                    reacted: false,
                    current_react: ''
                }

              case react_action.ADD_WOW:  // WOW REACT
                return {
                    ...state,
                    react_nb: {...state.react_nb, wow_nb: state.react_nb.wow_nb + 1},
                    reacted: true,
                    current_react: 'wow'
                }
            case react_action.REMOVE_WOW:
                return {
                    ...state,
                    react_nb: {...state.react_nb, wow_nb: state.react_nb.wow_nb - 1},
                    reacted: false,
                    current_react: ''
                }

            case react_action.ADD_ANGRY:  // ANGRY REACT
                return {
                    ...state,
                    react_nb: {
                        ...state.react_nb,
                        angry_nb: state.react_nb.angry_nb + 1
                    },
                    reacted: true,
                    current_react: 'angry'
                }

            case react_action.REMOVE_ANGRY:
                return {
                    ...state,
                    react_nb: {
                        ...state.react_nb,
                        angry_nb: state.react_nb.angry_nb - 1,
                    },
                    reacted: false,
                    current_react: ''
                }

            case react_action.REMOVE_SIBLING_REACT: // REMOVE SIBLING REACT WHICH ALREADY ACTIVATED (CLICKED BEFORE THE CURRENT ONE)
                return {
                    ...state,
                    react_nb: {
                        ...state.react_nb,
                        [`${state.current_react}_nb`]: eval(`state.react_nb.${state.current_react}_nb`) - 1 
                    }
                }

            default:
                return state;
        }
    }
    
    const Context = createContext(null); // THE CONTEXT

    const initalvalue = { // INITIAL VALUES
        react_nb : {   // REACT NUMBER
            like_nb: 4, 
            love_nb: 4,
            care_nb: 5,
            haha_nb: 1,
            sad_nb: 3,
            wow_nb: 1,
            angry_nb: 0
        },
        reacted: false,  // react status
        current_react: '', // like | love | care | haha | sad | wow | angry
        
        commenting: {    // COMMENT SECTION
            comment_nb: 0,
        },

        sharing: {   // SHARE SECTION
            share_nb: 0,  
        }
    }

    function PostReactionProvider({children}) {
        return (
            <Context.Provider value={useReducer(react_reducer, initalvalue)}>
                {children}
            </Context.Provider>
        );
    }
    
    const PostReactContext = () => useContext(Context)
    export {react_action, PostReactContext};
    export default PostReactionProvider;