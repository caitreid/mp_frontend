import ProfileIndex from "./Profile/ProfileIndex"
import Footer from "./shared/Footer"


const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div>
			<div className='container-fluid home'>
				{user && (
					<span className='navbar-text mr-2 pr-1'>Welcome, {user.email}</span>
				)}
				{!user && (
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
						<img className="image" src="screenshot.png"/>
					</div>
					<div className='black-cta'>
						<p>Start with a link. Build Your Brand.</p>
						<h2><span className='white'>moreplease.link/</span><span className='grey'>yourname</span></h2>
					</div>
				</div>
				)}
			</div>
		</div>
	)
}

export default Home
