import styled from 'styled-components'

export const ImagesContainer = styled.div`
	display: flex;
	overflow-x: scroll;	
	width: ${props => props.size}; 
	height: auto;
	scroll-behavior: smooth;
`

export const ImagePost = styled.img`	
	width: ${props => props.size};
	height: auto;	
`