// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import IndexMangos from './components/mangos/IndexMangos'
import Settings from './components/MyAccount/Settings'
import LinksIndex from './components/Links/LinksIndex'
import AppearanceIndex from './components/Appearance/AppearanceIndex'
import ProfileIndex from './components/Profile/ProfileIndex'
import CreateProfile from './components/Profile/CreateProfile'
import UpdateProfile from './components/Profile/UpdateProfile'
import Footer from './components/shared/Footer'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [profile, setProfile] = useState(null)

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)

  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
				<Route
					path='/mangos' 
					element={ 
						<RequireAuth user={user}>
							<IndexMangos msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}  
				/>
				<Route
					path='/links' 
					element={ 
						<RequireAuth user={user}>
							<LinksIndex msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}  
				/>
				<Route
					path='/appearance' 
					element={ 
						<RequireAuth user={user}>
							<AppearanceIndex msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}  
				/>
				<Route
					path='/profile' 
					element={ 
						<RequireAuth user={user}>
							<ProfileIndex msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}  
				/>
				<Route
					path='/profile/create'
					element={
					<RequireAuth user={user}>
						<CreateProfile msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				<Route
					path='/profile/update'
					element={
					<RequireAuth user={user}>
						<UpdateProfile msgAlert={msgAlert} user={user} profile={profile}/>
					</RequireAuth>}
				/>
				<Route
					path='/myaccount' 
					element={ 
						<RequireAuth user={user}>
							<Settings msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}  
				/>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
					<RequireAuth user={user}>
						<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
					</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
					<RequireAuth user={user}>
						<ChangePassword msgAlert={msgAlert} user={user} />
					</RequireAuth>}
				/>
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
				{/* <Footer/> */}
			</Fragment>
		)
}

export default App
