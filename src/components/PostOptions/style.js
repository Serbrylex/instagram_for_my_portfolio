import styled, { css } from 'styled-components'

export const PostOptionsPage = styled.div`
	position: fixed;	 
	width: 100%;
	height: 100%;		
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	${props => props.theme === 'light' && css`		
		background-color: rgba(0, 0, 0, 0.8);		
	`}

	${props => props.theme === 'dark' && css`
		background-color: rgba(255, 255, 255, 0.5);
	`}
`

export const PostOptionsContainer = styled.div`
	width: 60%;
	height: auto;
	border-radius: 4px;
	background-color: ${props => props.theme === 'light' ? 'white' : '#0A0A0A'};
	@media (max-width: 100vw) and (min-width: 500px){
	    width: 300px;	    
    }
`

export const Option = styled.div`
	width: 100%;
	height: 50px;		
	display: flex;
	align-items: center;	
	justify-content: center;	
	border-bottom: ${props => props.end === 'true' ? 'none' : '1px solid grey'};	
	color: ${props => props.color};
	cursor: pointer;	
`
