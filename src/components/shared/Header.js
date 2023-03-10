import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	paddingRight: '1rem',
	// alignItems: 'flex-end'
}
const authenticatedOptions = (
	<>
		{/* <Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to="mangos" style={linkStyle}>
				Mangos
			</Link>
		</Nav.Item> */}
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
	<Navbar bg='primary' variant='dark' expand='md'>
		<Navbar.Brand className='m-4'>
            <Link to='/' style={linkStyle}>
                more please
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
