import React, { Fragment } from "react";
import UpdateProfile from "../Profile/UpdateProfile";


const ProfileWorkspace = (props) => {

    const { profile, onChange, onSubmit, user, msgAlert } = props

    console.log('props in Profile Workspace', props)

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

export default ProfileWorkspace