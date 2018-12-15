import React from 'react'
import hikeHitch from '../images/hikeHitch.png'
import rainOrShine from '../images/rainOrShine.png'
import unscrambler from '../images/unscrambler.png'
import whatch from '../images/whatch.png'
import '../styles/projects.css'

const Projects = props =>(
    <div className="projects">

        <h1 className="big">Some of my recent developments...</h1>
        <div class="grid">

            <div class="module">
                <img className="images" src={whatch} alt="whatch screenshot"></img>
            </div>
            <div class="module">
                <img className="images" src={hikeHitch} alt="Hike Hitch screenshot"></img>
            </div>
            <div class="module">
                <img className="images rain" src={rainOrShine} alt="Rain or Shine screenshot"></img>
            </div>
            <div class="module">
                <img className="images" src={unscrambler} alt="unscrambler screenshot"></img>
            </div>

        </div>
    </div>

)

export default Projects