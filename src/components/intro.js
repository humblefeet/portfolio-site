import React from 'react'
import '../styles/intro.css'
// import Portrait from '../images/portrait.jpg'
import Helmet from 'react-helmet'

const Intro = props =>(
    <div className="intro">
        <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans" rel="stylesheet"/>
        </Helmet>
        <div >
            <h1 className="bigIntro big">
                Hello, I'm Matthieu Bourgois <br/> a Front End Developer based in Seattle, WA.
            </h1>
            <hr></hr>
        </div>
        <div className="about">
            <h5>About:</h5>
            <p>     Trained in full stack development, my passion lies in the front-end as I enjoy creating the tangible pieces users get to experience and enjoy.
                <br></br>
                    With a strong appreciation for design and UX, I often take creative approaches to the problems I want to solve.
            </p>
        </div>
        <div className="list">
            <h5>Skills:</h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Reactjs</li>
                <li>Nodejs</li>
                <li>Django</li>
                <li>Express</li>
                <li>Python</li>
            </ul>
        </div>

    </div>
)

export default Intro