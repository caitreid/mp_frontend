import React, { Fragment, useState, useEffect } from "react";
import PreviewContainer from "./PreviewContainer";
import { getProfile } from "../../api/profile";
import { updateProfile } from '../../api/profile'
import { Route, Routes } from 'react-router-dom'
import ProfileWorkspace from "./ProfileWorkspace";
import { useParams } from 'react-router-dom'
import Header from "../shared/Header";
import LoadingScreen from "../shared/LoadingScreen";
import CreateProfile from "../Profile/CreateProfile";
import CanvasNav from "./CanvasNav";
import LinksWorkspace from "./LinksWorkspace";

const Canvas = (props) => {

    const { msgAlert, user } = props

    const [error, setError] = useState(false)
    const [profile, setProfile] = useState(null)

    // const [linkShow, setlinkShow] = useState(false)

    // console.log('linkShow', linkShow)
    

    useEffect(() => {

        getProfile(user)
            .then(res => setProfile(res.data.profile))
            .then( res => console.log('res.status', res.status))
            .catch(err => {
                
                console.log('err', err)
                setError(true)
                // msgAlert({
                //     heading: 'Error getting profile',
                //     variant: 'danger',
                // })
            })
    }, [''])

    console.log('profile:', profile)
    console.log('user', user)
    console.log('error', error)

    // const onLinkClick = () => {

    //     setlinkShow(true)

    //     console.log('linkshow', linkShow)
    // }
    
    

    // if (error) {
    //     return <p>Error</p>
    // }
    if (!profile) {
        return <CreateProfile user={user} />
    }

    return (
        <Fragment>
            {/* <Header user={user}/> */}
            <CanvasNav user={user}  />
            <div className="canvas container-fluid">
                <div className="row">
                    <ProfileWorkspace user={user} profile={profile} msgAlert={msgAlert}/>

                    <div className="preview col-md-6">       
                        <div className="preview__phone">
                            <PreviewContainer profile={profile} msgAlert={msgAlert}/>

                            <LinksWorkspace />
                            {/* <PreviewContainer /> */}
                        </div>
                        {/* <a href={`/${ profile.username}`}>moreplease.link/{ profile.username}</a> */}
                    </div>
                </div>
                
            </div>
            
        </Fragment>
    )
}

export default Canvas