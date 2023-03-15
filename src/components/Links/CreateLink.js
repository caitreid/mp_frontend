
import { useState } from 'react'
import { createLink } from '../../api/link'
import LinkForm from '../shared/LinkForm'

// bring in the useNavigate hook from react-router-dom
import { useNavigate } from 'react-router-dom'

const CreateLink = (props) => {
    // pull out our props
    const { user, msgAlert } = props

    // set up(pull our navigate function from useNavigate)
    const navigate = useNavigate()
    // console.log('this is navigate', navigate)

    const [link, setLink] = useState({
        bio: '',
        owner: user.id,
        title: '',
        username: '',
        visible: false
    })

    const onChange = (e) => {
        e.persist()
        
        setLink(prevLink => {
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
            
            const updatedLink = {
                [updatedName] : updatedValue
            }
            
            console.log('the updated link:', updatedLink)

            return {
                ...prevLink, ...updatedLink
            }
        })
    }
    console.log('the link:', link)

    const onSubmit = (e) => {
        e.preventDefault()

        createLink(user, link)
            // first we'll nav to the show page
            // .then(res => { navigate(`/link/${res.data.link.id}`)})
            .then(() => { navigate(`/`)})
            // we'll also send a success message
            .then(() => {
                msgAlert({
                    heading: 'Link Created',
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => {
                msgAlert({
                    heading: 'Failed to create link',
                    variant: 'danger'
                })
            })
        // console.log('link', link)
    }

    return (
        <div className='link__create container-fluid'>
            <LinkForm 
                link={link}
                handleChange={onChange}
                handleSubmit={onSubmit}
                heading="Create link"
            />
        </div>
        
    )
}

export default CreateLink