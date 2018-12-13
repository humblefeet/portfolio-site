import React from 'react'
import '../styles/intro.css'
import Portrait from '../images/portrait.jpg'

const Intro = props =>(
    <div id="intro">
        <div className="left">
            <h1>
                Im a web developer
            </h1>
            <p>Hire me please</p>
        </div>
        <div className="right">
            <img className="portrait" alt="portrait" src={Portrait}></img>
        </div>
    </div>
)

export default Intro