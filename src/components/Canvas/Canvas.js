import React, { Fragment, useState, useEffect } from "react";
import PreviewContainer from "./PreviewContainer";
import { getProfile } from "../../api/profile";
import ProfileWorkspace from "./ProfileWorkspace";
import LoadingScreen from "../shared/LoadingScreen";
import CreateProfile from "../Profile/CreateProfile";
import LinksWorkspace from "./LinksWorkspace";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import AppearanceWorkspace from "./AppearanceWorkspace";
import Settings from "./Settings";
import { getAllLinks } from "../../api/link";

const Canvas = (props) => {

    const { msgAlert, user } = props
    const [error, setError] = useState(false)
    
    // fetched from api call
    const [profile, setProfile] = useState(null)
    const [links, setLinks] = useState(null)

    const [linkShow, setlinkShow] = useState(false)
    const [profileShow, setProfileShow] = useState(true)
    const [appearanceShow, setAppearanceShow] = useState(false)
    const [accountShow, setAccountShow] = useState(false)

    console.log('linkShow', linkShow)

    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        paddingRight: '1rem',
    }
    
    useEffect(() => {

        getProfile(user)
            .then(res => setProfile(res.data.profile))
            // .then(setProfileShow(true))
            .catch(err => {
                
                console.log('err \n', err)
                setError(true)

            })
    }, [profileShow])


    useEffect(() => {
        getAllLinks(user)
            .then(res => setLinks(res.data.links))
            .catch(err => {
                
                console.log('err \n', err)
                setError(true)

            })
    }, [linkShow])

    console.log('links---', links)

    console.log('profile:', profile)
    console.log('user', user)
    console.log('error', error)

    const onLinkClick = () => {

        setlinkShow(true)

        setProfileShow(false)
        setAppearanceShow(false)
        setAccountShow(false)

        console.log('profile show', profileShow)
    }
    const onProfileClick = () => {

        setlinkShow(false)
        setProfileShow(true)
        setAppearanceShow(false)
        setAccountShow(false)
    }
    const onAppearanceClick = () => {

        setlinkShow(false)
        setProfileShow(false)
        setAppearanceShow(true)
        setAccountShow(false)
    }
    const onAccountClick = () => {
        setlinkShow(false)
        setProfileShow(false)
        setAppearanceShow(false)
        setAccountShow(true)
    }
    
    console.log('profileShow', profileShow)

    // if (error) {
    //     return <p>Error</p>
    // }

    // if (!profile) {

    //     return <LoadingScreen />
    // }


    return (
        <Fragment>
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
                            <Link onClick={onProfileClick} style={linkStyle}>
                                Profile
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            
                            <Link onClick={onLinkClick} style={linkStyle}>
                                Links
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link onClick={onAppearanceClick} style={linkStyle}>
                                Appearance
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link onClick={onAccountClick} style={linkStyle}>
                                My Account
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="canvas container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        { !profile 
                            ?
                            <>
                                <LoadingScreen/>
                                <CreateProfile user={user} /> 
                            </>
                            : 
                            null
                        }
                        { profileShow ?
                            <ProfileWorkspace 
                                user={user} 
                                profile={profile} 
                                msgAlert={msgAlert}
                                show={profileShow}
                            /> : null }
                        { linkShow ? 
                            <LinksWorkspace 
                                user={user}
                                links={links} 
                                profile={profile}
                                msgAlert={msgAlert}
                                show={linkShow}
                            />  : null}
                        { appearanceShow ? <AppearanceWorkspace /> : null }
                        { accountShow ? <Settings /> : null}
                    </div>
                    <div className="preview col-md-6">       
                        <div className="preview__phone">
                            <PreviewContainer profile={profile} links={links} msgAlert={msgAlert}/>

                        </div>
                        { profile ? <a href={`/${ profile.username}`}>moreplease.link/{ profile.username}</a> : null}
                    </div>
                </div>
                
            </div>
            
        </Fragment>
    )
}

export default Canvas