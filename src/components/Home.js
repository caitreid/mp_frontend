import { Container } from "react-bootstrap"
import ProfileIndex from "./Profile/ProfileIndex"

// import { Canvas } from './Container/Canvas'
import { Fragment } from "react"
import Footer from "./shared/Footer"
import Canvas from './Canvas/Canvas'
import Header from "./shared/Header"

const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div>
				{user && (
					<div className='container-fluid home'>
						<Header user={user} />
						<Canvas user={user} />
						{/* <span className='navbar-text mr-2 pr-1'>Welcome, {user.email}</span> */}
					</div>
				)}
				{!user && (
					<>
					<Header user={user} />
						<div className='container-fluid home'>
							<div className="row">
							<div className="home__intro col-lg-6">
								<h1>Everything you are. In one, simple link in bio.</h1>
								<div className="home__intro-small">
									<p>Whatever you do, whatever you’re into. Share it, earn from it, get people excited about it, all from your link in bio.</p>
									<input 
										type="text"
										placeholder="moreplease.link/">
									</input>
									<submit className='button'>Claim Yours</submit>
								</div>
							</div>
							<div className="home__image col-lg-6 my-4">
								<div className="image">
									<img src="screenshot.png"/>
								</div>
							</div>
							<div className='black-cta'>
								<p>Start with a link. Build Your Brand.</p>
								<h2><span className='white'>moreplease.link/</span><span className='grey'>yourname</span></h2>
							</div>
						</div>
					</div>
					<Footer/> 
				</>
			)}
			
		</div>
	)
}

export default Home
