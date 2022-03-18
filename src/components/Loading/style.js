import styled from 'styled-components'

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 2;	
	background-color: ${props => props.theme === 'dark' ? '#1F1F1F' : rgba(81, 77, 76, 0.2)};
`

export const ImageLoading = styled.img`
	width: 25px;
	height: 25px;
`