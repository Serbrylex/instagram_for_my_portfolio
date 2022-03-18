// React
import {
	BrowserRouter,
	Routes as Switch,
	Route,
	Redirect
} from 'react-router-dom'

import { useEffect } from 'react'

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
import { useSelector } from 'react-redux'

const Routes = () => {

	const user = useSelector(store => store.user)
	
	let elements = []
			
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact element={<Feed  />} />
				<Route path="/login" exact element={<Login  />} />
				<Route path="/signin" exact element={<SignIn  />} />
				<Route path="/stories/:index" exact element={<FullPageStories />} />

				{user.isAuth && 
					<>						
						<Route path="/profile/:username" element={<Profile />} />
						<Route path="/edit/profile" exact element={<UpdateProfile />} />
						<Route path="/search" exact element={<Search />} />
						<Route path="/search/:searching" element={<Search />} />
						<Route path="/new-post" exact element={<NewPost />} />
						<Route path="/follow-request" exact element={<FollowRequest />} />
						<Route path="/messages" exact element={<Messages />} />
						<Route path="/add-storie" exact element={<AddStorie />} />
						<Route path="/stories_by_user/:username/:index" element={<FullPageStories byUser={true} />} />
						<Route path="*" element={<FourOFour />} />
					</>
				}

				{!user.isAuth && 
					<Route path="*" element={<Login />} />
				}
			</Switch>			
		</BrowserRouter>
	)
}

export default Routes