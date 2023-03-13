import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProfile } from '../../api/profile';

const ProfileIndex = (props) => {

    const { msgAlert, user } = props

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(false)

    // const location = useLocation()
    // const { from } = location.state

    // console.log('location', location)

    useEffect(() => {

        getProfile(user)
            .then(res => setProfile(res.data.profile))
            .catch(err => {
                console.log('err', err)
                setError(true)
                msgAlert({
                    heading: 'Error getting profile',
                    variant: 'danger',
                    message: err.response
                })
                
            })
    }, [])

    console.log('profile state:', profile)
    console.log('error state', error)

    if (error) {
        return <p>Error!</p>
    }

    if (!profile || profile === null ) {
        <p>Loading...</p>
    } else if (profile.length === 0 || profile === null ) {

        return <p>No profile! Go add one.</p>
    }


    return(
        <div className='container-fluid p-4'>
            <h1>Profile</h1>
            

            {profile != null  && (
                <div>
                    <div className='card p-4 m-4'>
                        <div><b>Username:</b> { profile.username } </div>
                        <div><b>Title:</b> { profile.title } </div>
                        <div><b>Bio:</b> { profile.bio } </div>
                        <div><b>Visible:</b> { profile.visible ? 'true' : 'false'}</div>
                    </div>
                    <Link to={{
                        pathname: "update",
                        props: profile
                        }}>Update Profile</Link>
                </div>

			)}
            { profile === null && (
                <Link to={{
                    pathname: "create"
                }}>Create Profile</Link>
            )}
            
            
        </div>
    )
}

export default ProfileIndex