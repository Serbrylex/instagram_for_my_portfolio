import { useLocation } from 'react-router-dom'

import { 
	FooterContainer, Link, ImgageProfile
} from './style'

import { AiFillHome, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { ImSearch } from 'react-icons/im'

import imageTest from '../../images/agujero-del-tiempo.jpg'


const Footer = () => {
	
	let site = useLocation();	
	site = site.pathname
 	
	if (site.includes('profile')) {
		site = '/profile'
	} else if (site.includes('search')) {
		site = '/search'
	}	

	const size = '25px'

	return(
		<FooterContainer>
			<Link to='/'>
				{site === '/' ?
					<AiFillHome size={size} /> :
					<AiOutlineHome size={size} />
				}
			</Link>
			<Link to='/search'>
				{site === '/search' ?
					<ImSearch size={size} /> :
					<AiOutlineSearch size={size} />
				}
			</Link>
			<Link to='/profile/Serbrylex'>
				{site === '/profile' ?
					<ImgageProfile src={imageTest} alt="Profile Image" border={'true'}/> : 
					<ImgageProfile src={imageTest} alt="Profile Image" />
				}
			</Link>
		</FooterContainer>
	)
}

export default Footer