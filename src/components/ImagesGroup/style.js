import styled, { css } from 'styled-components'

const size_c = 99
const size_i = 498

export const ImagesContainer = styled.div`
	display: flex;
	overflow-x: scroll;
	overflow-y: -moz-hidden-unscrollable;
	overflow-y: hidden-unscrollable;	
	scroll-behavior: smooth;
	background-color: black;

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}
	margin: auto;
	width: ${size_c}vw;
	height: ${size_c+1}vw;
	@media (min-width: 500px){
	    width: ${size_i}px;
	    height: ${size_i+2}px;
	}	
`
export const ImagePostContainer = styled.div`
	
	width: ${size_c}vw;
	height: ${size_c+1}vw;
	@media (min-width: 500px){
	    width: ${size_i}px;
	    height: ${size_i+2}px;
	}	
		
`
/*
	${props => props.size === '100vw' ? css`
		width: 100vw;
		@media (max-width: 100vw) and (min-width: 500px){
		    width: 500px;		    
    	}	
	` :
		css`
			width: props.size;
		`
	}; 
*/
export const ImagePost = styled.img`		
	width: ${size_c}vw;
	height: ${size_c+1}vw;
	@media (min-width: 500px){
	    width: ${size_i}px;
	    height: ${size_i+2}px;
	}	
	object-fit: cover;	
`