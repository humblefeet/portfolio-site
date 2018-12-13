import React from 'react'
// import { Link } from 'gatsby'
import '../styles/index.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Intro from '../components/intro'
import Projects from '../components/projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <Intro/>
    <Projects/>
  </Layout>
)

export default IndexPage
