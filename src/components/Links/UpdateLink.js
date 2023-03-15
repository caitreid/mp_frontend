// this modal is rendered by ShowPet
// The state that controls whether this is open or not live in ShowPet
// the state and the updaterfunction associated with that state is passed here as a prop.
import React, { useState } from 'react'
import LinkForm from '../shared/LinkForm'
import { updateLink } from '../../api/link'
import { useNavigate } from 'react-router-dom'
import { deleteLink } from '../../api/link'
import {  Button } from 'react-bootstrap'

const UpdateLink = (props) => {
    // destructure our props
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [link, setLink] = useState(props.link)

    const onChange = (e) => {
        e.persist()
        
        setLink(prevLink => {
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
            
            const updatedLink = {
                [updatedName] : updatedValue
            }
            
            console.log('the link', updatedLink)

            return {
                ...prevLink, ...updatedLink
            }
        })
    }

    console.log('link in UpdateLink', link)
    console.log('user in UpdateLink', user)

    const onSubmit = (e) => {
        e.preventDefault()

        updateLink(user, link)
        .then(() => { navigate(`/canvas`)})
        .then(() => console.log('successful save of link to DB'))
        .catch(() => {
            alert('failure')
        })
    }

    

    return (
        <>
            <LinkForm 
                user={user}
                link={link} 
                handleChange={onChange} 
                handleSubmit={onSubmit} 
                heading="Update Link"
            />
            
        </>
    )
}

export default UpdateLink