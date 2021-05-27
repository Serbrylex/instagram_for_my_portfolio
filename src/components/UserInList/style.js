import styled from 'styled-components'

export const LikeContainer = styled.div`
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid black;	
	padding: 5px 0;
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
`

export const Button = styled.button`
	width: 100px;
	height: 30px;
	text-align: center;
	color: white;
	background-color: blue;
`
