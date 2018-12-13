import React from 'react'
import hikeHitch from '../images/hikeHitch.png'
import rainOrShine from '../images/rainOrShine.png'
import unscrambler from '../images/unscrambler.png'
import whatch from '../images/whatch.png'
import '../styles/projects.css'

const Projects = props =>(
    <div>
        <div>
            <img src={whatch} alt="whatch screenshot"></img>
        </div>
        <div>
            <img src={hikeHitch} alt="Hike Hitch screenshot"></img>
        </div>
        <div>
            <img src={rainOrShine} alt="Rain or Shine screenshot"></img>
        </div>
        <div>
            <img src={unscrambler} alt="unscrambler screenshot"></img>
        </div>

    </div>
)

export default Projects