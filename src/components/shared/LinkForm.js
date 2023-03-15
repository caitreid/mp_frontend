// this form will take several props and be used both to create and update profiles
// the action will be dependent upon the parent component
// but the form will look the same on both Create and Update
import { Form, Button, Container } from 'react-bootstrap'
import { deleteLink } from '../../api/link'

const LinkForm = (props) => {
    // we need several props for a working, reusable form
    // the object itself(link), some handleChange fn, some handleSubmit fn
    // and in this case, we'll add a custom heading
    const { link, handleChange, handleSubmit, onDeleteLink } = props

    console.log('LinkForm props: ', props)

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label className='uppercase'>Name</Form.Label>
                    <Form.Control 
                        placeholder="Artist / Entrepreneur"
                        name="name"
                        id="name"
                        value={ link.name }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label className='uppercase'>URL</Form.Label>
                    <Form.Control 
                        placeholder="http://www.instagram.com/"
                        name="url"
                        id="url"
                        value={ link.url }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Check 
                        label="Make link visible?"
                        name="visible"
                        defaultChecked={ link.visible }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Button className="my-2 button" type="submit">Update</Button>
            </Form>
        </Container>
    )
}

export default LinkForm