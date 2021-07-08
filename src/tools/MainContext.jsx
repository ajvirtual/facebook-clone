import {createContext, useState} from 'react'

const Context = createContext();

export default function MainContext() {
    const [state, setState] = useState({})
    
    return (
           <>
                <Context.Provider value={{state, setState}}>
                    {this.props.children}
                </Context.Provider>
           </>
    )
}