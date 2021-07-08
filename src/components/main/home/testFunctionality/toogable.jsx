import React from 'react'

export default function Toogable(Clickable) {
    return class extends React.Component {
        constructor() {
            super()
            this.toogle = this.toogle.bind(this)
            this.state = {
                show: false
            }
        }

        toogle() {
            this.setState(prev => ({show: !prev.show}))
        }

        render() {
            return (
                <div style={{color: '#fff'}}>
                bonjour tout le monde
                <Clickable {...this.props} onClick={this.toogle }/>
                {this.state.show ? <span>on</span> : <span>off</span>}
           </div>
            )
        }
    }
}