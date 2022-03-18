import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CommentContainer = styled.div`
	width: 90%;
	height: auto;
	display: grid;	
	margin: 0 auto;	
	border-bottom: 1px solid ${props => props.theme === 'light' ? 'black' : 'white'};
	padding: 10px 0;
	grid-template-columns: 20% 80%;
`

export const ImageProfile = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	object-fit: cover;
`

export const CommentParagraph = styled.div`	
	color: ${props => props.theme === 'light' ? 'black' : 'white'};
	margin: auto 0;
`

export const Username = styled(Link)`
	font-weight: bold;	
	text-decoration: none;	
	color: ${props => props.theme === 'light' ? 'black' : 'white'};
`
