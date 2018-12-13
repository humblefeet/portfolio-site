import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import '../styles/Header.css'

const Header = ({ siteTitle }) => (
  <div className="main">
    <div className="inner">
        <Link to="/" >
          <h1 className="title">
            Matthieu Bourgois
          </h1>
        </Link>
    </div>
    <div >
      <Link to="/resume">
        <h4 className="resumeLink">
          Resume
        </h4>
      </Link>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
