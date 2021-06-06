import styled, { css } from 'styled-components'

export const LikeContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid #dbdbdb;
	margin: 5px 0;
	padding: 5px;
`

export const Picture = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 100%;
`

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 100%;
	object-fit: cover;	
	cursor: pointer;
`

export const Username = styled.p`
	width: 50%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: start;
	cursor: pointer;
	color: ${props => props.theme === 'light' ? 'black' : 'white'};
`

export const Button = styled.button`
	width: 100px;
	height: 30px;
	text-align: center;
	color: white;
	cursor: pointer;
	border-radius: 4px;
	${props => props.theme === 'light' && css`
		background-color: #0095f6;		
		color: white;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;
		color: white;		
	`}
`
