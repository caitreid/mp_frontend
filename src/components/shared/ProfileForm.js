// this form will take several props and be used both to create and update profiles
// the action will be dependent upon the parent component
// but the form will look the same on both Create and Update
import { Form, Button, Container } from 'react-bootstrap'

const ProfileForm = (props) => {
    // we need several props for a working, reusable form
    // the object itself(profile), some handleChange fn, some handleSubmit fn
    // and in this case, we'll add a custom heading
    const { profile, handleChange, handleSubmit, heading } = props

    console.log('profile props', profile)

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-2">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        placeholder="Artist / Entrepreneur"
                        name="title"
                        id="title"
                        value={ profile.title }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Label>Bio:</Form.Label>
                    <Form.Control 
                        placeholder="Based in Los Angeles"
                        name="bio"
                        id="bio"
                        value={ profile.bio }
                        onChange={ handleChange }
                    />
                </Form.Group>
                
                <Form.Group className="m-2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        // type="number"
                        placeholder="my-username"
                        name="username"
                        id="username"
                        value={ profile.username }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Form.Group className="m-2">
                    <Form.Check 
                        label="Make profile visible?"
                        name="visible"
                        defaultChecked={ profile.visible }
                        onChange={ handleChange }
                    />
                </Form.Group>
                <Button className="m-2" type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ProfileForm