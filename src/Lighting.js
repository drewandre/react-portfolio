import React, { Component } from "react"
import {
    Transition
} from "react-transition-group"

import Cloud from './assets/Cloud.jpg'
import InSound from './assets/InSound.jpg'

const items = [
    { id: 1, source: Cloud, text: 'Cloud' },
    { id: 2, source: InSound, text: 'Apartment' },
    { id: 3, source: Cloud, text: 'Drums' },
    { id: 4, source: InSound, text: 'InSound' }
]

const duration = 600

const transitionStyles = {
    entering: {
        transform: "translate3d(0, 25px, 25px)",
        opacity: 0
    },
    entered: {
        transform: "translate3d(0, 0, 0)",
        opacity: 1
    },
}

class Lighting extends Component {
    state = {
        show: false
    }

    componentDidMount() {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className="page">
                <h1>Lighting</h1>
                {/* <div className='tiles'>
                    {items.map(({ id, text, source }, index) => (
                        <Transition
                            in={this.state.show}
                            key={id}
                            timeout={300 + duration * (index / 5)}
                            unmountOnExit>
                            {state => (
                                <div className='tile' style={transitionStyles[state]}>
                                    <img className='tile-image' src={source} alt={text} />
                                    <h4>{text}</h4>
                                </div>
                            )}
                        </Transition>
                    ))
                    }
                </div> */}
            </div>
        )
    }
}

export default Lighting
