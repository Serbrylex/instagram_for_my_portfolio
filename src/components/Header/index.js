import { useLocation } from 'react-router-dom'

import {
	HeaderContainer, Title, ListIcons, Form, Input, Submit,
	ProfileData, Username, ListIconsProfile, Link
} from './style'
 

import { CgAddR } from 'react-icons/cg'
import { 
	AiOutlineHeart, AiOutlineSend, AiOutlineSearch, AiOutlineLock, AiOutlineUnlock 
} from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useInputValue } from '../../hooks/useInputValue'
 
const Header = () => { 

	let site = useLocation();
	site = site.pathname
	const searchInput = useInputValue('Search')

	const size = '22px'

 	return(
 		<HeaderContainer>
 			{site === '/' &&
 				<>
	 				<Title>Instagram</Title>
	 				<ListIcons>
	 					<Link to='/new-post'>
	 						<CgAddR size={size} />
	 					</Link>
	 					<Link to='/favorites'>
	 						<AiOutlineHeart size={size} />
	 					</Link>
	 					<Link to='/message'>
							<AiOutlineSend size={size} />
						</Link>
	 				</ListIcons>
	 			</>
 			}

 			{site === 'search' && 
 				<>
 					<Form>
 						<Input type='text' {...searchInput} />
 						<Submit>
 							<AiOutlineSearch size={size} />
 						</Submit>
 					</Form>
 				</>
 			}

 			{site.includes('/profile/') &&
 				<>
 					<ProfileData>
 						{true ?
 							<AiOutlineLock size={size} /> :
 							<AiOutlineUnlock size={size} />
 						}
 						<Username>Serbrylez</Username>
 						<MdKeyboardArrowDown size={size} onClick={()=>console.log('Desplega la wea')}/>
 					</ProfileData>
 					<ListIconsProfile>
 						<Link to='/new-post'>
 							<CgAddR size={size} />
 						</Link> 						
 						<GiHamburgerMenu size={size} onClick={console.log('burguer button')}/>
 						
 					</ListIconsProfile>
 				</>
 			}
 		</HeaderContainer>
 	)
 }

export default Header