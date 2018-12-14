import React from 'react'
import Portrait from '../images/Portrait.jpg'
import '../styles/contact.css'

const Contact = props => (
    <div className="contact">
        <div className="innerContact">
            <h1 className="big">Contact</h1>
            <img 
                alt="portrait"
                className="portrait"
                src={Portrait}>
            </img>
        </div>
    </div>
)

export default Contact