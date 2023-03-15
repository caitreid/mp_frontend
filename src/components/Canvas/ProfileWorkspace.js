import React, { Fragment } from "react";
import CreateProfile from "../Profile/CreateProfile";
import UpdateProfile from "../Profile/UpdateProfile";


const ProfileWorkspace = (props) => {

    const { profile, onChange, onSubmit, user, msgAlert } = props

    console.log('props in Profile Workspace', props)

    if (profile) {
        return (
            <Fragment>
                <UpdateProfile 
                    user={user} 
                    profile={profile} 
                    onChange={onChange} 
                    onSubmit={onSubmit} 
                    msgAlert={msgAlert} 
                />
            </Fragment>
        )
    }

    else {
        return (
            <CreateProfile user={user} msgAlert={msgAlert}/>
        )
    }
    
}

export default ProfileWorkspace