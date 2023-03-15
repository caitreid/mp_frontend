import React, { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import CreateLink from "../Links/CreateLink";
import UpdateLink from "../Links/UpdateLink";



const LinksWorkspace = (props) => {

    const { links, onChange, onSubmit, user, msgAlert, profile } = props

    const [ showNewLink, setShowNewLink] = useState(false)

    console.log('props in LinksWorkspace', props)

    console.log('showNewLink', showNewLink)

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

                <Button onClick={() => setShowNewLink(true)}>Create a Link</Button>

                { showNewLink ? <CreateLink user={user} msgAlert={msgAlert}/> : null }

                { linksEditor }

        </Fragment>
    )
}

export default LinksWorkspace