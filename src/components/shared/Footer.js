import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

const Footer = () => {


    return(
        <div className='footer'>
            <div className='divider'></div>
            <a href="/">moreplease.link</a>
            <p>made with love in nyc</p>
        </div>
    )
}

export default Footer;