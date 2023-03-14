import React, { Fragment, useState, useEffect } from "react";
import PreviewContainer from "./PreviewContainer";
import { getProfile } from "../../api/profile";
import { updateProfile } from '../../api/profile'
import { Route, Routes } from 'react-router-dom'
import ProfileWorkspace from "./ProfileWorkspace";
import { useParams } from 'react-router-dom'

const Canvas = (props) => {

    const { msgAlert, user } = props

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(false)
    // const { handle } = useParams()

    useEffect(() => {

        getProfile(user)
            .then(res => setProfile(res.data.profile))
            .catch(err => {
                console.log('err', err)
                setError(true)
                msgAlert({
                    heading: 'Error getting profile',
                    variant: 'danger',
                    message: err.response
                })
                
            })
    }, [])

    // console.log('profile:', profile)
    console.log('user', user)

    if (error) {
        return <p>Error</p>
    }
    if (!profile) {
        return <p>No Profile</p>
    }

    return (
        <Fragment>
            <Routes>
                <Route
                    path={`/${ profile.username }`} 
                    element={ 
                        <PreviewContainer profile={profile} />
                    }  
                />
            </Routes>
            <div className="canvas container-fluid">
                {/* <h1>Canvas</h1> */}
                <div className="row">
                    <ProfileWorkspace user={user} profile={profile} msgAlert={msgAlert}/>

                    <div className="preview col-md-6">       
                        <div className="preview__phone">
                            <PreviewContainer profile={profile} msgAlert={msgAlert}/>
                            {/* <PreviewContainer /> */}
                        </div>
                        <a href={`/${ profile.username}`}>moreplease.link/{ profile.username}</a>
                    </div>
                </div>
                
            </div>
            
        </Fragment>
    )
}

export default Canvas