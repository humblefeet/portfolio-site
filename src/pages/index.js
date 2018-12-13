import React from 'react'
// import { Link } from 'gatsby'
import '../styles/index.css'
// import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Header from '../components/header'
import Layout from '../components/layout';
import Welcome from '../components/welcome'

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Header/>
    <Welcome/>
    <Layout>
      <div className="main">
        <Intro/>
        <Projects/>
      </div>
    </Layout>
  </div>
)

export default IndexPage
