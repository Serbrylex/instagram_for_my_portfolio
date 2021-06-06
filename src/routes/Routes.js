// React
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

import { useContext } from 'react'

// Containers -------------------------------------------
import Login from '../containers/Login'
import SignIn from '../containers/SignIn'

import Feed from '../containers/Feed'
import Profile from '../containers/Profile'
import UpdateProfile from '../containers/UpdateProfile'
// Todos los posts relevantes, actuales
import Search from '../containers/Search'
// Stories page
import FullPageStories from '../containers/FullPageStories'
//Add Post
import NewPost from '../containers/NewPost'
//Follow Request
import FollowRequest from '../containers/FollowRequest'
//Messages
import Messages from '../containers/Messages'
//Add Stori
import AddStorie from '../containers/AddStorie'

// 404
import FourOFour from '../containers/FourOFour'

// Context
import UserContext from '../context/users'

const Routes = () => {

	const { isAuth } = useContext(UserContext)	
	//const url = 'http://127.0.0.1:8000'
	const url = 'https://newinstagrambyme.herokuapp.com'
	let elements = []

	// Recuerda cambiarlo ------------------------------------------------
	// isAuth.isAuth

	if (isAuth.isAuth) {
		elements = [
			<Route path="/" exact key={1}>
				<Feed  url={url} />
			</Route>,
			<Route path="/profile/:username" exact key={2}>
				<Profile  url={url}/>
			</Route>,
			<Route path="/edit/profile" exact key={3}>
				<UpdateProfile  url={url}/>
			</Route>,
			<Route path="/search" exact key={4}>
				<Search  url={url}/>
			</Route>,						
			<Route path="/new-post" exact key={5}>
				<NewPost url={url}/>
			</Route>,
			<Route path="/follow-request" exact key={6}>
				<FollowRequest url={url}/>
			</Route>,
			<Route path="/messages" exact key={7}>
				<Messages url={url} />
			</Route>,						
			<Route path="/add-storie" exact key={8}>
				<AddStorie url={url}/>
			</Route>,
			<Route path="/stories/:index" exact key={9}>
				<FullPageStories url={url}/>
			</Route>,
			<Route path="/stories_by_user/:index" exact key={9}>
				<FullPageStories url={url} byUser={true} />
			</Route>
		]
	}else{
		elements.push(<Redirect to="/login" key={10}/>)
	}

	return(
		<Router>
			<Switch>
				<Route path="/login" exact>
					<Login  />
				</Route>
				<Route path="/signin" exact>
					<SignIn  />
				</Route>
				{elements}			
				<Route>
					<FourOFour />
				</Route>
			</Switch>			
		</Router>
	)
}

export default Routes