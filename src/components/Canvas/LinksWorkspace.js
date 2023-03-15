import React, { Fragment } from "react";
import UpdateProfileObj from "../Profile/UpdateProfile";


const LinksWorkspace = (props) => {

    const { links } = props

    console.log('props in Links Workspace', props)

    let linksEditor;

    if (links) {

        linksEditor = props.links.map((item, id) => {

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

    return (
        <Fragment>
            <div className="col-md-6">
                <h2>Links Workspace</h2>

                { linksEditor }
            </div>   
        </Fragment>
    )
}

export default LinksWorkspace