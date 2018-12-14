import React from 'react'
import hikeHitch from '../images/hikeHitch.png'
import rainOrShine from '../images/rainOrShine.png'
import unscrambler from '../images/unscrambler.png'
import whatch from '../images/whatch.png'
import '../styles/projects.css'

const Projects = props =>(
    <div className="projects">

        <h1 className="big">Some of my recent developments...</h1>
        <div className="oneProject">
            <img className="images" src={whatch} alt="whatch screenshot"></img>
            <div className="right">Whatch</div>
        </div>
        <div className="oneProject">
            <div className="left">hikeHitch</div>
            <img className="images" src={hikeHitch} alt="Hike Hitch screenshot"></img>
        </div>
        <div className="oneProject">
            <img className="images" src={rainOrShine} alt="Rain or Shine screenshot"></img>
            <div className="right">Rain-or-Shine</div>
        </div>
        <div className="oneProject">
            <div className="left">Unscrambler</div>
            <img className="images" src={unscrambler} alt="unscrambler screenshot"></img>
        </div>

    </div>
)

export default Projects