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
    })

    console.log('profile state:', profile)

    if (error) {
        return <p>Error!</p>
    }

    if (!profile) {
        <p>Loading...</p>
    } else if (profile.length === 0) {

        return <p>No profile! Go add one.</p>
    }

    // const profileCard = profile.map(item => {
    //     <div>
    //         { console.log('profile', item)}
    //         <h2>Your Profile:</h2>
    //         <p>Username: {item.username}</p>
    //         <p>Title: {item.title}</p>
    //         <p>Bio: {item.bio}</p>
    //         <p>Visible: {item.visible ? 'true' : 'false'}</p>
    //     </div>
    // })

    return(
        <div className='container-fluid m-4'>
            <h1>Profile</h1>
            <Link to="create">Create Profile</Link>

            {/* { profileCard } */}
        </div>
    )
}

export default ProfileIndex