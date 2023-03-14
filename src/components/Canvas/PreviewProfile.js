import React, { Fragment } from "react";

const PreviewProfile = (props) => {

    const { profile } = props

    console.log('props in Preview Profie', props)

    if (!profile) {
        return (
            <Fragment>
                <div className="preview__profile" key={ props.index }>
                    <h3 className="preview__profile-name">name: NAME</h3>
                    <div className=''>
                            {/* <div><b>Username:</b> { profile.username } </div>
                            <div><b>Title:</b> { profile.title } </div>
                            <div><b>Bio:</b> { profile.bio } </div>
                            <div><b>Visible:</b> { profile.visible ? 'true' : 'false'}</div> */}
                        </div>
                </div>
            </Fragment>
        )
    }
    return (
        <Fragment>
            <div className="preview__profile" key={ props.index }>
                <h3 className="preview__profile-name">name: NAME</h3>
                <div className=''>
                        {/* <div><b>Username:</b> { profile.username } </div>
                        <div><b>Title:</b> { profile.title } </div>
                        <div><b>Bio:</b> { profile.bio } </div>
                        <div><b>Visible:</b> { profile.visible ? 'true' : 'false'}</div> */}
                    </div>
            </div>
        </Fragment>
    )
    
}

export default PreviewProfile