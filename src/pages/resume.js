import React from 'react'
import '../styles/resume.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ResumeImage from '../images/matthieubourgois_resume.jpg'
import Resume from '../files/matthieubourgois_resume.pdf'

const SecondPage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <a href={Resume} download>
      <button className="button">Download</button>
    </a>
    <img className="resume" 
      src={ResumeImage} 
      alt="resume"></img>
  </Layout>
)

export default SecondPage
