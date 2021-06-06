import styled, { css } from 'styled-components'

export const ImagesContainer = styled.div`
	display: flex;
	overflow-x: scroll;	
	height: auto;
	scroll-behavior: smooth;

	-ms-overflow-style: none;
	scrollbar-width: none;

	&::-webkit-scrollbar {
		display: none;
	}

	${props => props.size === '100vw' ? css`
		width: 100vw;
		@media (min-width: 500px){
		    width: 498px;
    	}	
	` :
		css`
			width: props.size;
		`
	}; 
`

export const ImagePost = styled.img`	
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
	height: auto;	
`