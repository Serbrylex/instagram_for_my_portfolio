import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const CommentContainer = styled.div`
	width: 90%;
	height: auto;
	display: flex;	
	margin: 0 auto;
	border-bottom: 1px solid black;	
	padding: 10px 0;
`

export const DataLeft = styled.div`
	width: 60px;	
	height: 100%;
	text-align: center;
`

export const ImageProfile = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	object-fit: cover;
`

export const DataRight = styled.div`
	width: 100%;
	height: auto;
`

export const CommentParagraph = styled.div`

`

export const Username = styled(Link)`
	font-weight: bold;
	color: black;
	text-decoration: none;
`
