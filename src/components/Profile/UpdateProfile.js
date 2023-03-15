// this modal is rendered by ShowPet
// The state that controls whether this is open or not live in ShowPet
// the state and the updaterfunction associated with that state is passed here as a prop.
import React, { useState } from 'react'
import ProfileForm from '../shared/ProfileForm'
import { updateProfile } from '../../api/profile'
import { useNavigate } from 'react-router-dom'

const UpdateProfile = (props) => {
    // destructure our props
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [profile, setProfile] = useState(props.profile)

    const onChange = (e) => {
        e.persist()
        
        setProfile(prevProfile => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            if (updatedName === 'visible' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'visible' && !e.target.checked) {
                updatedValue = false
            }
            
            const updatedProfile = {
                [updatedName] : updatedValue
            }
            
            console.log('the profile', updatedProfile)

            return {
                ...prevProfile, ...updatedProfile
            }
        })
    }

    console.log('profile', profile)
    console.log('user', user)

    const onSubmit = (e) => {
        e.preventDefault()

        updateProfile(user, profile)
        .then(() => { navigate(`/canvas`)})
            // first we'll handle closing the modal
            // .then(() => handleClose())
            // we'll also send a success message
            // .then(() => {
            //     // msgAlert({
            //     //     heading: 'Oh Yeah!',
            //     //     message: 'Updated.',
            //     //     variant: 'success'
            //     // })
            //     // alert('success')
            // })
            // if everything goes according to plan, we need a refresh of the show page.
            // we'll build a function in the ShowPet component that does this for us, and we'll import that here as a prop
            // this triggers a refresh of the parent(ShowPet) by changing the value of the updated piece of state which lives in useEffect's dependency array.
            // .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => {
                // msgAlert({
                //     heading: 'Oh No!',
                //     message: 'Failed',
                //     variant: 'danger'
                // })
                alert('failure')
            })

    }

    return (
        <ProfileForm 
            profile={profile} 
            handleChange={onChange} 
            handleSubmit={onSubmit} 
            heading="Update Profile"
        />
    )
}

export default UpdateProfile