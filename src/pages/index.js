import React from 'react'
// import { Link } from 'gatsby'
import '../styles/index.css'
// import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Projects from '../components/projects'
// import Header from '../components/header'
import Layout from '../components/layout';
import Welcome from '../components/welcome'
import Contact from '../components/contact'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Welcome/>
    <Intro/>
    <Projects/>
    <Contact/>
  </div>
)

export default IndexPage
