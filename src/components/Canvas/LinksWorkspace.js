import React, { Fragment } from "react";
import UpdateLink from "../Links/UpdateLink";



const LinksWorkspace = (props) => {

    const { links, onChange, onSubmit, user, msgAlert, profile } = props

    console.log('props in LinksWorkspace', props)

    let linksEditor;

    if (links) {

        linksEditor = props.links.map((link, id) => {

            return (
                <>
                    <UpdateLink 
                        user={user}
                        link={link} 
                        profile={profile} 
                        onChange={onChange} 
                        onSubmit={onSubmit} 
                        msgAlert={msgAlert} 
                        key={id}
                    />
                </>
            )     
        })
    }

    return (
        <Fragment>
                <h2>Links Workspace</h2>

                { linksEditor }

        </Fragment>
    )
}

export default LinksWorkspace