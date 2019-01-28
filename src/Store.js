import React, { Component } from "react"
import {
    Transition
} from "react-transition-group"

const items = [
    { id: 1, text: 'Cloud' },
    { id: 2, text: 'Apartment' },
    { id: 3, text: 'Drums' },
    { id: 4, text: 'InSound' }
]

const duration = 600

const defaultStyle = {
    transition: `opacity 400ms ease-in-out, transform 400ms ease-in`,
    width: 500,
    height: 300,
    margin: 10,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 5,
    backgroundColor: 'rgba(255,255,255,0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

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

class Store extends Component {
    state = {
        show: false
    }

    componentDidMount() {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className="page">
                {items.map(({ id, text }, index) => (
                    <Transition
                        in={this.state.show}
                        key={id}
                        timeout={duration * (index / 5)}
                        unmountOnExit>
                        {state => (
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                {text}
                            </div>
                        )}
                    </Transition>
                ))
                }
            </div>
        )
    }
}

export default Store
