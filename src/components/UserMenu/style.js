import styled, { css } from 'styled-components' 


export const UserMenuContainer = styled.div`
	position: fixed;	
	top: 0;
	right: 0;
	width: 100vw;
	height: 100vh;	
	background-color: rgba(0, 0, 0, 0.8);
	display: flex;
	justify-content: end;
	z-index: 100;
`

export const LayoutUserMenu = styled.div`
	width: 70vw;
	height: 100vh;
	border-radius: 10px 0 0 10px;	
	
	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #525252;
		color: white;
	`}

	@media (min-width: 500px){
	    width: 300px;	    
    }
`

export const SectionMenuContainer = styled.div`
	width: 100%;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
`

export const GoBack = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: end;
	border-bottom: 1px solid black;
	padding: 5px 5%;	
`

export const GoBackButton = styled.button`
	border: none;
	background-color: none;
`


export const SectionMenu = styled.div`
	width: 100%;
	height: auto;
	padding: 5px 5%;
`

export const TitleSection = styled.h3`
	margin-bottom: 20px;
`

export const RadioButtonContainer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	margin: 5px 10%;
`

export const RadioLabelContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: auto;
`

export const Description = styled.p`
	width: auto;
`

export const ListContainer = styled.div`
	width: 90%;
	margin-left: 10%;
	position: relative;
`

export const ButtonLanguage = styled.button`
	width: 90%;	
	height: 30px;
	border-radius: 4px;	
	cursor: pointer;

	${props => props.theme === 'light' && css`
		border: none;
		color: white;
		background-color: #0095f6;
	`}

	${props => props.theme === 'dark' && css`
		border: 1px solid white;
		color: white;
		background-color: #1F1F1F;
	`}
`

export const LanguageList = styled.ul`
	width: 90%;	
	height: auto;
	border-radius: 0 0 4px 4px;	
	position: absolute;	
	z-index: 100;
	top: 27px;

	${props => props.theme === 'light' && css`		
		color: white;
		background-color: #0095f6;
		border: 1px solid white;
	`}

	${props => props.theme === 'dark' && css`				
		color: white;
		background-color: #1F1F1F;
		border: 1px solid black;
	`}
`

export const EachLanguege = styled.li`
	cursor: pointer;	
	width: 100%;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const CloseSession = styled.button`
	color: white;
	width: 80%;
	margin: 10%;
	height: 30px;
	border-radius: 4px;	
	color: white;
	cursor: pointer;

	${props => props.theme === 'light' && css`		
		border: none;
		background-color: #ff5733;
	`}

	${props => props.theme === 'dark' && css`				
		border: 1px solid white;
		background-color: #1F1F1F;
	`}
`
