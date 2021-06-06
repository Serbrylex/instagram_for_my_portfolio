// React
import { useContext } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

// Assets
import {
	HeaderContainer, Title, ListIcons, Form, Input, Submit,
	ProfileData, Username, Link, ImageProfile
} from './style' 

import imageTest from '../../assets/images/agujero-del-tiempo.jpg'
 
// Icons
import { CgAddR } from 'react-icons/cg'
import { 
	AiOutlineHeart, AiOutlineSend, AiOutlineSearch, AiOutlineLock, 
	AiOutlineUnlock, AiFillHome, AiOutlineHome
} from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImSearch } from 'react-icons/im'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'

// Context
import ThemeContext from '../../context/theme' 
import UserContext from '../../context/users'

 
const Header = ({ setShowUserMenu, url }) => { 

	// Context
	const { theme } = useContext(ThemeContext)
	const { isAuth } = useContext(UserContext) 	 	

	// Url location
	let site = useLocation();
	site = site.pathname

	const searchInput = useInputValue('Search')
	
	// Variables
	const history = useHistory()
	const size = '22px'
	const color = theme === 'light' ? 'black' : 'white'
	

 	return(
 		<HeaderContainer theme={theme}>
 			{site === '/' &&
 				<>
	 				<Title>Instagram</Title>
	 				<ListIcons>
	 					<Link to='/new-post'>
	 						<CgAddR size={size} color={color}/>
	 					</Link>
	 					<Link to='/'>
							{site === '/' ?
								<AiFillHome size={size} color={color} /> :
								<AiOutlineHome size={size} color={color} />
							}
						</Link>
						<Link to='/search'>
							{site === '/search' ?
								<ImSearch size={size} color={color} /> :
								<AiOutlineSearch size={size} color={color} />
							}
						</Link>
						<Link to={`/profile/${isAuth.user.username}`}>
							{site === '/profile' ?
								<ImageProfile src={isAuth.user.profile?.picture ? `${url}${isAuth.user.profile.picture}` : imageTest} alt="Profile Image" border={color}/> : 
								<ImageProfile src={isAuth.user.profile?.picture ? `${url}${isAuth.user.profile.picture}` : imageTest} alt="Profile Image" border={''}/>
							}
						</Link>
	 				</ListIcons>
	 			</>
 			}

 			{site === '/search' && 
 				<>
	 				<Title>Search</Title>
	 				<ListIcons>
	 					<Link to='/new-post'>
	 						<CgAddR size={size} color={color}/>
	 					</Link>
	 					<Link to='/'>
							{site === '/' ?
								<AiFillHome size={size} color={color} /> :
								<AiOutlineHome size={size} color={color} />
							}
						</Link>
						<Link to='/search'>
							{site === '/search' ?
								<ImSearch size={size} color={color} /> :
								<AiOutlineSearch size={size} color={color} />
							}
						</Link>
						<Link to={`/profile/${isAuth.user.username}`}>
							{site === '/profile' ?
								<ImageProfile src={isAuth.user.profile?.picture ? `${url}${isAuth.user.profile.picture}` : imageTest} alt="Profile Image" border={color}/> : 
								<ImageProfile src={isAuth.user.profile?.picture ? `${url}${isAuth.user.profile.picture}` : imageTest} alt="Profile Image" border={''}/>
							}
						</Link>
	 				</ListIcons>
	 			</>
 			}

 			{site.includes('/profile/') &&
 				<>
 					<ProfileData>
 						{true ?
 							<AiOutlineLock size={size} color={color}/> :
 							<AiOutlineUnlock size={size} color={color}/>
 						}
 						<Username>{isAuth.user.username}</Username>
 						<MdKeyboardArrowDown size={size} onClick={()=>console.log('Desplega la wea')} color={color}/>
 					</ProfileData>
 					<ListIcons>
 						<Link to='/new-post'>
 							<CgAddR size={size} color={color}/>
 						</Link>
 						<Link to='/'>
							{site === '/' ?
								<AiFillHome size={size} color={color} /> :
								<AiOutlineHome size={size} color={color} />
							}
						</Link>
						<Link to='/search'>
							{site === '/search' ?
								<ImSearch size={size} color={color} /> :
								<AiOutlineSearch size={size} color={color} />
							}
						</Link>											
 						<GiHamburgerMenu size={size} onClick={()=>setShowUserMenu(true)} color={color}/>
 						
 					</ListIcons>
 				</>
 			}
 		</HeaderContainer>
 	)
 }

export default Header