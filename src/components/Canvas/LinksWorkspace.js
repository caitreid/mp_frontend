import React, { Fragment } from "react";
import UpdateProfileObj from "../Profile/UpdateProfile";


const LinksWorkspace = (props) => {

    const { profile, onChange, onSubmit, user, msgAlert } = props

    console.log('props in Links Workspace', props)

    return (
        <Fragment>
            {/* <hr></hr> */}
            <div className="col-md-6">
                 <h2>Links Workspace</h2>
            </div>         
        </Fragment>
    )
}

export default LinksWorkspace