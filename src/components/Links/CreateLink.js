
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
        // id: null,
        owner: user.id,
        name: '',
        url: '',
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

            .then(() => {
                console.log('link created')

            })
            // if there is an error, tell the user about it
            .catch(() => {
                console.log('error creating link')

            })
    }

    return (
        <div className='link__create container-fluid'>
            <div className='card my-4'>
                <LinkForm 
                    user={user}
                    link={link}
                    handleChange={onChange}
                    handleSubmit={onSubmit}
                    heading="Create link"
                />
            </div>
        </div>
        
    )
}

export default CreateLink