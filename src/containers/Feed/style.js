import styled, { css } from 'styled-components' 
import { Link } from 'react-router-dom'

export const FeedContainer = styled.div`
	width: 100%;	
	height: 100vh;
	overflow-y: scroll;	
	padding-top: 50px;	

	-ms-overflow-style: none;
	scrollbar-width: none; 

	&::-webkit-scrollbar { 
		display: none;
	}

	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}	
`
 
// Feed ----------------------------------------------- 
export const FeedImages = styled.div`
	width: 100%;
	height: auto;	
	margin: 10px auto;	
	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;
		color: white;
	`}
	@media (min-width: 500px){
	    width: 500px;	    
    }
`

export const LoadingBottom = styled.div`
	height: 10vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;	
	margin: 0 auto 15vh auto;
`

export const ImageLoading = styled.img`
	height: 30px;
	width: 30px;
`

export const ContainerButtonFor = styled.div`
	width: 100%;
	height: 500px;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ButtonToSearch = styled.p`
	width: auto;	
`

export const LinkFor = styled(Link)`	
	text-decoration: none;
`

export const ButtonsPagination = styled.div`
	width: auto;
	height: auto;
	margin: 20px auto;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ButtonPage = styled.button`
	width: 100px;
	height: 30px;	
	cursor: pointer;
	border-radius: 5px;
	background-color: #b2dffc;
	margin: 0 5px;
`

