const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className='container-fluid m-4'>
			<h2>Home Page</h2>
			{user && (
				<span className='navbar-text mr-2 pr-1'>Welcome, {user.email}</span>
			)}
			
		</div>
	)
}

export default Home
