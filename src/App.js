import React, { Component } from 'react'
import { Route, Link, Switch } from "react-router-dom"

import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group"

import Home from "./Home"
import Lighting from "./Lighting"
import Contact from "./Contact"
import './App.scss'

import Signature from './assets/Signature.png'
import Cloud from './assets/Cloud.jpg'
import Overlay from './assets/Overlay.png'


const InstagramIcon = props => (
  <svg
    onClick={props.onClick}
    width="20px"
    height="20px"
    viewBox="0 0 224 224"
    className='instagram-icon'
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <g transform="translate(5.04,5.04) scale(0.955,0.955)">
      <g
        fill="none"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="none"
        strokeLinecap="butt"
        strokeLinejoin="none"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}>
        <g
          fill="#fff"
          stroke="#fff"
          strokeWidth="10"
          strokeLinejoin="round">
          <path d="M152.32,13.44c32.11047,0 58.24,26.12953 58.24,58.24v80.64c0,32.11047 -26.12953,58.24 -58.24,58.24h-80.64c-32.11047,0 -58.24,-26.12953 -58.24,-58.24v-80.64c0,-32.11047 26.12953,-58.24 58.24,-58.24zM22.4,71.68v80.64c0,27.26745 22.01255,49.28 49.28,49.28h80.64c27.26745,0 49.28,-22.01255 49.28,-49.28v-80.64c0,-27.26745 -22.01255,-49.28 -49.28,-49.28h-80.64c-27.26745,0 -49.28,22.01255 -49.28,49.28zM174.72,58.24c0,4.94847 -4.01153,8.96 -8.96,8.96c-4.94847,0 -8.96,-4.01153 -8.96,-8.96c0,-4.94847 4.01153,-8.96 8.96,-8.96c4.94847,0 8.96,4.01153 8.96,8.96zM161.28,112c0,27.16353 -22.11647,49.28 -49.28,49.28c-27.16353,0 -49.28,-22.11647 -49.28,-49.28c0,-27.16353 22.11647,-49.28 49.28,-49.28c27.16353,0 49.28,22.11647 49.28,49.28zM71.68,112c0,22.32118 17.99882,40.32 40.32,40.32c22.32118,0 40.32,-17.99882 40.32,-40.32c0,-22.32118 -17.99882,-40.32 -40.32,-40.32c-22.32118,0 -40.32,17.99882 -40.32,40.32z" />
        </g>
        <path d="M0,224v-224h224v224z"
          fill="none"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter" />
        <g
          fill="#fff"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter">
          <path d="M71.68,13.44c-32.11047,0 -58.24,26.12953 -58.24,58.24v80.64c0,32.11047 26.12953,58.24 58.24,58.24h80.64c32.11047,0 58.24,-26.12953 58.24,-58.24v-80.64c0,-32.11047 -26.12953,-58.24 -58.24,-58.24zM71.68,22.4h80.64c27.26745,0 49.28,22.01255 49.28,49.28v80.64c0,27.26745 -22.01255,49.28 -49.28,49.28h-80.64c-27.26745,0 -49.28,-22.01255 -49.28,-49.28v-80.64c0,-27.26745 22.01255,-49.28 49.28,-49.28zM165.76,49.28c-4.94847,0 -8.96,4.01153 -8.96,8.96c0,4.94847 4.01153,8.96 8.96,8.96c4.94847,0 8.96,-4.01153 8.96,-8.96c0,-4.94847 -4.01153,-8.96 -8.96,-8.96zM112,62.72c-27.16353,0 -49.28,22.11647 -49.28,49.28c0,27.16353 22.11647,49.28 49.28,49.28c27.16353,0 49.28,-22.11647 49.28,-49.28c0,-27.16353 -22.11647,-49.28 -49.28,-49.28zM112,71.68c22.32118,0 40.32,17.99882 40.32,40.32c0,22.32118 -17.99882,40.32 -40.32,40.32c-22.32118,0 -40.32,-17.99882 -40.32,-40.32c0,-22.32118 17.99882,-40.32 40.32,-40.32z" />
        </g>
        <path d=""
          fill="none"
          stroke="none"
          strokeWidth="1"
          strokeLinejoin="miter"
        />
      </g>
    </g>
  </svg>
)

class App extends Component {
  render() {
    return (
      <Route render={({ location, ...etc }) => {
        // let shouldAnimate = location.pathname !== location.state.from
        return (
          <div className="app">
            {/* <img className="home-page-overlay" src={Overlay} /> */}
            {/* <div className='home-page-photo-container'> */}
            {/* <picture> */}
            {/* <source media="(max-width: 799px)" srcset="elva-480w.jpg" /> */}
            {/* <source media="(min-width: 800px)" srcset="elva-800w.jpg" /> */}
            {/* <img className="home-page-photo" src={Cloud} /> */}
            {/* </picture> */}
            {/* <CrossfadeImage src={IMAGE_SOURCES[this.state.slideshowIndex]} /> */}
            {/* </div> */}
            <div className="top-bar">
              <Link to={{ pathname: "/", state: { from: window.location.pathname } }}>
                <img src={Signature} />
              </Link>
              <div className="top-bar-right">
                <Link to={{ pathname: "/lighting", state: { from: window.location.pathname } }}>Lighting</Link>
                <Link to={{ pathname: "/software", state: { from: window.location.pathname } }}>Software</Link>
                <Link to={{ pathname: "/contact", state: { from: window.location.pathname } }}>Contact</Link>
                <a href='https://www.instagram.com/_drewandre' target='blank'>
                  <InstagramIcon />
                </a>
              </div>
            </div>
            <TransitionGroup
              className='content'
              // enter={shouldAnimate}
              // exit={shouldAnimate}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
              }}>
              <CSSTransition
                key={location.key}
                timeout={600}
                classNames='fade'>
                <Switch location={location}>
                  <Route
                    exact
                    path="/"
                    component={Home} />
                  <Route
                    path="/lighting"
                    component={Lighting} />
                  <Route
                    path="/contact"
                    component={Contact} />
                  <Route component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </div>
        )
      }} />
    )
  }
}

export default App