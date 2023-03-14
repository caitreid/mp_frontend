import React, { Fragment, useState, useEffect, Link } from "react";
import PreviewProfile from './PreviewProfile';
import { getProfile } from "../../api/profile";
import { useParams } from "react-router-dom";

const PreviewContainer = (props) => {
    
    const { profile } = props

    let { username } = useParams();

    // console.log('params:', username )
    if (!profile) {
        return (
            <Fragment>
                <div className="preview__profile-picture"></div>
                <div>Title </div>
                <div>Bio</div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="preview__profile-picture"></div>
            <div>{ profile.title } </div>
            <div>{ profile.bio } </div>
        </Fragment>
    )
}

export default PreviewContainer