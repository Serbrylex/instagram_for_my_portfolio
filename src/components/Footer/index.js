// React
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import React from 'react'

// Assets
import { 
	FooterContainer, Link, ImgageProfile 
} from './style'

import { AiFillHome, AiOutlineHome, AiOutlineSearch } from 'react-icons/ai'
import { ImSearch } from 'react-icons/im'

import imageTest from '../../assets/images/agujero-del-tiempo.jpg'


const Footer = () => {
	
	// Context
	const theme = useSelector(store => store.preference.theme)

	// Location
	let site = useLocation();	
	site = site.pathname
 	
	if (site.includes('profile')) {
		site = '/profile'
	} else if (site.includes('search')) {
		site = '/search'
	}	

	// Variables
	const size = '25px'
	const color = theme === 'light' ? 'black' : 'white'

	return(
		<FooterContainer theme={theme}>
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
			<Link to='/profile/Serbrylex'>
				{site === '/profile' ?
					<ImgageProfile src={imageTest} alt="Profile Image" border={color}/> : 
					<ImgageProfile src={imageTest} alt="Profile Image" border={''}/>
				}
			</Link>
		</FooterContainer>
	)
}

export default Footer