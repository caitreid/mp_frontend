// CreatePet needs to render a form
// that form should build a pet object in state
// the form should make an axios post request when submitted
// we should send an alert upon success or failure
// on success: component should redirect our user to the new pet show page
// on failure: component should send the message and remain visible

import { useState } from 'react'
import { createProfile } from '../../api/profile'
import ProfileForm from '../shared/ProfileForm'

// bring in the useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom'

const CreateProfile = (props) => {
    // pull out our props
    const { user, msgAlert } = props

    // set up(pull our navigate function from useNavigate)
    const navigate = useNavigate()
    // console.log('this is navigate', navigate)

    const [profile, setProfile] = useState({
        bio: '',
        owner: user.id,
        title: '',
        username: '',
        visible: false
    })

    const onChange = (e) => {
        e.persist()
        
        setProfile(prevProfile => {
            const updatedName = e.target.name
            let updatedValue = e.target.value

            // console.log('this is the input type', e.target.type)

            // to handle a number, we look at the type, and parse a string to an integer
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }

            // to handle a checkbox, we can check the name, and change the value that is output. Checkboxes only know if they are checked or not
            if (updatedName === 'visible' && e.target.checked) {
                updatedValue = true
            } else if (updatedName === 'visible' && !e.target.checked) {
                updatedValue = false
            }
            
            const updatedProfile = {
                [updatedName] : updatedValue
            }
            
            console.log('the updated profile:', updatedProfile)

            return {
                ...prevProfile, ...updatedProfile
            }
        })
    }
    console.log('the profile:', profile)

    const onSubmit = (e) => {
        e.preventDefault()

        createProfile(user, profile)
            // first we'll nav to the show page
            // .then(res => { navigate(`/profile/${res.data.profile.id}`)})
            .then(() => { navigate(`/canvas`)})
            // we'll also send a success message
            .then(() => {
                console.log('successfully created profile')
                // msgAlert({
                //     heading: 'Profile Created',
                //     variant: 'success'
                // })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                console.log('error in creating profile')
                // msgAlert({
                //     heading: 'Failed to create profile',
                //     variant: 'danger'
                // })
            })
        // console.log('profile', profile)
    }

    return (
        <div className='profile__create container-fluid'>
            <ProfileForm 
                profile={profile}
                handleChange={onChange}
                handleSubmit={onSubmit}
                heading="Create profile"
            />
        </div>
        
    )
}

export default CreateProfile