import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProfile } from '../../api/profile';

const ProfileIndex = (props) => {

    const { msgAlert, user } = props

    const [profile, setProfile] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {

        getProfile(user)
            .then(res => setProfile(res.data.profile))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting profile',
                    variant: 'danger',
                    message: err
                })
                setError(true)
            })
    }, [])

    console.log('profile state:', profile)

    if (error) {
        return <p>Error!</p>
    }

    if (!profile) {
        <p>Loading...</p>
    } else if (profile.length === 0) {

        return <p>No profile! Go add one.</p>
    }

    return(
        <div className='container-fluid p-4'>
            <h1>Profile</h1>
            <Link to="create">Create Profile</Link>

            {profile && (
                <div className='card p-4 m-4'>
				    <div><b>Username:</b> { profile.username } </div>
                    <div><b>Title:</b> { profile.title } </div>
                    <div><b>Bio:</b> { profile.bio } </div>
                    <div><b>Visible:</b> { profile.visible ? 'true' : 'false'}</div>
                </div>
			)}
            
        </div>
    )
}

export default ProfileIndex