import React, { Component } from 'react'

import Cloud from './assets/Cloud.jpg'
import InSound from './assets/InSound.jpg'
import Overlay from './assets/Overlay.png'

// import CrossfadeImage from 'react-crossfade-image'

const NextArrow = props => (
    <div className='arrow-touch-container right'>
        <svg
            onClick={props.onClick}
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
            className='arrow-container right-arrow'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="surface1">
                <path fill='#fff' d="M 14.988281 3.992188 C 14.582031 3.992188 14.21875 4.238281 14.0625 4.613281 C 13.910156 4.992188 14 5.421875 14.292969 5.707031 L 33.585938 25 L 14.292969 44.292969 C 14.03125 44.542969 13.925781 44.917969 14.019531 45.265625 C 14.109375 45.617188 14.382813 45.890625 14.734375 45.980469 C 15.082031 46.074219 15.457031 45.96875 15.707031 45.707031 L 35.707031 25.707031 C 36.097656 25.316406 36.097656 24.683594 35.707031 24.292969 L 15.707031 4.292969 C 15.519531 4.097656 15.261719 3.992188 14.988281 3.992188 Z " />
            </g>
        </svg>
    </div>
)

const PrevArrow = props => (
    <div className='arrow-touch-container left' onClick={e => e.stopPropagation()}>
        <svg
            onClick={props.onClick}
            width="50px"
            height="50px"
            viewBox="0 0 50 50"
            className='arrow-container left-arrow'
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="surface1">
                <path fill='#fff' d="M 14.988281 3.992188 C 14.582031 3.992188 14.21875 4.238281 14.0625 4.613281 C 13.910156 4.992188 14 5.421875 14.292969 5.707031 L 33.585938 25 L 14.292969 44.292969 C 14.03125 44.542969 13.925781 44.917969 14.019531 45.265625 C 14.109375 45.617188 14.382813 45.890625 14.734375 45.980469 C 15.082031 46.074219 15.457031 45.96875 15.707031 45.707031 L 35.707031 25.707031 C 36.097656 25.316406 36.097656 24.683594 35.707031 24.292969 L 15.707031 4.292969 C 15.519531 4.097656 15.261719 3.992188 14.988281 3.992188 Z " />
            </g>
        </svg>
    </div>
)

const IMAGE_SOURCES = [InSound, Cloud]

export class Home extends Component {
    state = {
        slideshowIndex: 0
    }

    componentDidMount() {
        window.addEventListener('keydown', event => {
            if (event.key === 'ArrowRight') {
                this.nextImage()
            } else if (event.key === 'ArrowLeft') {
                this.prevImage()
            }
        })
    }

    componentWillUnmount() {
    }

    prevImage = () => {
        this.setState(state => ({ slideshowIndex: state.slideshowIndex - 1 }))
    }

    nextImage = () => {
        this.setState(state => ({ slideshowIndex: state.slideshowIndex + 1 }))
    }

    render() {
        return (
            <div className='home-view-container'>
                {/* <img className="home-page-overlay" src={Overlay} /> */}
                <div className='home-page-meta-container'>
                    <p className='home-page-meta-text'>LARRY'S FLIGHT, 2018 - AERONAUT BREWERY, BOSTON, MASSACHUSETTS</p>
                </div>
                <div className='home-page-photo-container'>
                    <NextArrow onClick={this.nextImage} />
                    <PrevArrow onClick={this.prevImage} />
                    <picture>
                        {/* <source media="(max-width: 799px)" srcset="elva-480w.jpg" /> */}
                        {/* <source media="(min-width: 800px)" srcset="elva-800w.jpg" /> */}
                        <img className="home-page-photo" onClick={() => alert('clicked!')} src={IMAGE_SOURCES[this.state.slideshowIndex]} />
                    </picture>
                    {/* <CrossfadeImage src={IMAGE_SOURCES[this.state.slideshowIndex]} /> */}
                </div>
            </div>
        )
    }
}

export default Home