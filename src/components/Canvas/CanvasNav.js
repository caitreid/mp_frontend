import { React, useState } from "react";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
// import { useState } from 'react';


const linkStyle = {
    color: 'black',
    textDecoration: 'none',
	paddingRight: '1rem',
}

const CanvasNav = (props) =>{

    return (
        <Navbar expand='md'>
		<Navbar.Brand>
            <Link to='/canvas' style={linkStyle}>
                moreplease.link
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto' style={linkStyle}>
                <Nav.Item>
                    <Link to='/profile' style={linkStyle}>
                        Profile
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    
                    <Link style={linkStyle}>
                        Links
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/appearance' style={linkStyle}>
                        Appearance
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to='/myaccount' style={linkStyle}>
                        My Account
                    </Link>
                </Nav.Item>
			</Nav>
		</Navbar.Collapse>
	    </Navbar>
    )
}

export default CanvasNav