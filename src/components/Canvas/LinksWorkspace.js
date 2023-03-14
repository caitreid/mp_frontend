import React, { Fragment } from "react";
import UpdateProfileObj from "../Profile/UpdateProfile";


const LinksWorkspace = (props) => {

    const { profile, onChange, onSubmit, user, msgAlert } = props

    console.log('props in Links Workspace', props)

    return (
        <Fragment>
            {/* <hr></hr> */}
            <div className="col-md-6">
                {/* <h2>Profile Workspace</h2> */}
                {/* <div className='card p-4 m-4'>
                    <div><b>Username:</b> { profile.username } </div>
                    <div><b>Title:</b> { profile.title } </div>
                    <div><b>Bio:</b> { profile.bio } </div>
                    <div><b>Visible:</b> { profile.visible ? 'true' : 'false'}</div>
                </div> */}
                {/* <UpdateProfileObj 
                    user={user} 
                    profile={profile} 
                    onChange={onChange} 
                    onSubmit={onSubmit} 
                    msgAlert={msgAlert} 
                /> */}
            </div>         
        </Fragment>
    )
}

export default LinksWorkspace