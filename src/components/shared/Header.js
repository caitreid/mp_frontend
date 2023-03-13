import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'black',
    textDecoration: 'none',
	paddingRight: '1rem',
}
const authenticatedOptions = (
	<>
		<Nav.Item>
			<Link to='/links' style={linkStyle}>
				Links
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/appearance' style={linkStyle}>
				Appearance
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='/myaccount' style={linkStyle}>
				My Account
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<div>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</div>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Item>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Item>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                moreplease.link
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto' style={linkStyle}>
				
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
