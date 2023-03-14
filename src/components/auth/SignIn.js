import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../shared/Header'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()


	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser } = props

        const credentials = {email, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/canvas'))
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <>
        <Header />
            <div className='auth'>
                <div className='row'>
                    <div className='auth__form-wrapper col-md-6'>
                        <h1>Sign In</h1>
                        <Form onSubmit={onSignIn}>
                            <Form.Group controlId='email' className='my-3'>
                                <Form.Label className='uppercase'>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    placeholder='Enter email'
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId='password' className='my-3'>
                                <Form.Label className='uppercase'>Password</Form.Label>
                                <Form.Control
                                    required
                                    name='password'
                                    value={password}
                                    type='password'
                                    placeholder='Password'
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button className="button" type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SignIn
