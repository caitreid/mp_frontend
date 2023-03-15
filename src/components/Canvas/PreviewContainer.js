import React, { Fragment, useState, useEffect, Link } from "react";
import PreviewProfile from './PreviewProfile';
import { getProfile } from "../../api/profile";
import { useParams } from "react-router-dom";

const PreviewContainer = (props) => {
    
    const { profile, links } = props

    let { username } = useParams();

    let allLinks;

    if (links) {

        allLinks = props.links.map((item, id) => {

            return (
                <div key={id}>
                    <a href={`${ item.url }`}> 
                        <div className="profile__button">
                            {item.name}
                        </div>
                    </a>
                </div>
            )     
        })
    }

    


    console.log(props.links)

    // console.log('params:', username )
    if (!profile || !links) {
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
            { allLinks }
        </Fragment>
    )
}

export default PreviewContainer