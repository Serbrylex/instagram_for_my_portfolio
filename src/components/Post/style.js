import styled, { css } from 'styled-components'
 
import { Link as Linked } from 'react-router-dom'
 

export const PostContainer = styled.div`
	width: 100%;
	height: auto;
	position: relative;	
	margin: 10px 0;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
`

export const UserPost = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 2vw;
`

export const UserDataLeft = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	justify-content: start;
	align-items: center;	

`

export const ImageUser = styled.img`
	border-radius: 100%;
	width: 30px;
	height: 30px;	
	margin-right: 5px;
	object-fit: cover;	
	border: 1px solid gray;
`

export const Username = styled(Linked)`
	width: auto;
	margin: 0;
	padding: 0;
	height: auto;
	color: black;
	text-decoration: none;
	font-weight: 600;
	color: ${props => props.theme === 'light' ? 'black' : 'white'};
`

export const InterectiveSection = styled.div`
	width: 96%;
	height: 35px;	
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;	
	padding: 5px 2vw;
`

export const Left = styled.div`
	display: flex;
	width: 30%;
	align-items: center;
	justify-content: space-between;	
	z-index: 2;
`

export const Dots = styled.div`
	text-align: center;
	display: flex;
	width: 100%;
	height: 10px;
	margin: 10px auto;
	align-items: center;
	justify-content: center;	
`

export const Dot = styled.div`		
	width: 12px;
	height: auto;
	cursor: pointer;
`

export const Likes = styled.p`
	cursor: pointer;
	font-weight: 600;
	width: 96%;
	padding: 1px 2vw;
`

export const Paragraph = styled.p`
	width: 96%;
	padding: 5px 2vw;
	height: 40px;		
`

export const Comments = styled.p`
	color: grey;
	width: 96%;
	padding: 5px 2vw;
	cursor: pointer;
	text-decoration: none;
`

export const Time = styled.small`
	color: grey;
	font-size: 12px;
	width: 96%;
	padding: 5px 2vw;
`

export const ExtradataContainer = styled.div`
	width: 100%;
	height: 10vh;
`

export const DotsButtonMenu = styled.button`
	border: none;
	background-color: none;
	cursor: pointer;
`

export const ImagesGroupContainer = styled.div`
	width: 100%;
	height: auto;
	position: relative;
`

export const ButtonLeft = styled.button`
	cursor: pointer;
	position: absolute;
	top: 50%;
	bottom: 50%;
	left: 5px;		
	background-color: ${props => props.theme === 'light' ? 'black' : 'white'};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	width: 30px;
	height: 30px;
`

export const ButtonRight = styled.button`
	cursor: pointer;
	position: absolute;
	top: 50%;	
	bottom: 50%;
	right: 5px;	
	background-color: ${props => props.theme === 'light' ? 'black' : 'white'};
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	width: 30px;
	height: 30px;
`

export const Count = styled.p`
	position: absolute;
	right: 5px;
	top: 5px;
	padding: 5px 10px;
	border-radius: 5px;
	
	${props => props.theme === 'light' && css`
		background-color: white;		
		color: black;
		border: 1px solid black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: black;		
		color: white;
		border: 1px solid white;
	`}
`