// React
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'


// Assets
import {
	HeaderContainer, Title, ListIcons, ProfileData, 
	Username, Link, ImageProfile, FormContainer, Input,
	LinkSearch
} from './style' 

import imageTest from '../../assets/images/agujero-del-tiempo.jpg'
 
// Icons
import { CgAddR } from 'react-icons/cg'
import { 
	AiOutlineSearch, AiOutlineLock, AiOutlineUnlock, AiFillHome, AiOutlineHome
} from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImSearch } from 'react-icons/im'

// Hooks
import { useInputValue } from '../../hooks/useInputValue'

 
const Header = ({ setShowUserMenu }) => { 

	// Context
	const { theme, url } = useSelector(store => store.preference)
	const user = useSelector(store => store.user)
	const searching = useInputValue('Search')

	// Url location
	let site = useLocation();
	site = site.pathname
	const navigate = useNavigate()
	
	// Variables
	const size = '22px'
	const color = theme === 'light' ? 'black' : 'white'

	let title = 'Instagram'		
	// Because if footer is showed, we don't need this
	let show_elements = window.screen.width > 400

 	return(
 		<HeaderContainer theme={theme}>
 			{!site.includes('/profile/') && 			
	 			<Title>{title}</Title> 			
	 		}
 			{site.includes('/profile/') && 				
				<ProfileData>
					{user.user.is_public ?
						<AiOutlineLock size={size} color={color}/> :
						<AiOutlineUnlock size={size} color={color}/>
					}
					<Username>{user.user?.username ? user.user?.username : 'Unknown'}</Username>
					<MdKeyboardArrowDown size={size} onClick={()=>console.log('Desplega la wea')} color={color}/>
				</ProfileData> 				
 			}
 			<FormContainer>
 				<Input {...searching} onSubmit={e => console.log('hihi')}/>
 				<LinkSearch to={`/search/${searching.value}`} id='search'>														
					<AiOutlineSearch size={size} color={color} />
				</LinkSearch>
 			</FormContainer>
	 		<ListIcons>
				{user.isAuth && show_elements && 
					<>
						<Link to='/' id='feed'>							
							<AiFillHome size={size} color={color} />							
						</Link>
						<Link to='/new-post' id='new_post'>
							<CgAddR size={size} color={color}/>
						</Link>					
					</>
				}
	 			<Link to={user.user?.username ? `/profile/${user.user.username}` : '/login/'} id='user_picture' onClick={()=>navigate(`/profile/${user.user.username}`)}>
					<ImageProfile src={user.user.profile?.picture ? `${url}${user.user.profile.picture}` : imageTest} alt="Profile Image" border={''}/>
				</Link>
	 			{site !== '/' && !site.includes('search') &&
	 				<GiHamburgerMenu size={size} onClick={()=>setShowUserMenu(true)} color={color} id='hamburguer_button' />
	 			}
	 		</ListIcons>
 		</HeaderContainer>
 	)
 }

export default Header