import styled, { css } from 'styled-components' 

export const ProfileContainer = styled.div` 
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column; 
	align-items: center;	
	padding: 60px 0 50px 0;
	margin: 0 auto;
	overflow-y: scroll;
	overflow-x: hidden;
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
 
export const DataProfile = styled.div`
	width: 100%; 
	padding: 5px 2vw;
	display: flex;
	flex-direction: column;
	@media (min-width: 500px){	    
	    border: 1px solid #dbdbdb;	    
	    width: 500px;
	    margin: 0 auto;
    }	
`

export const SectionImage = styled.div`
	width: 100%;
	height: 100px;	
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Image = styled.img`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	margin-right: auto;
	object-fit: cover;	
	border: 1px solid black;
`

export const GeneralData = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	font-weight: bold;
	justify-content: space-between;
`

export const Data = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`

export const Count = styled.p`
	font-weight: 500;
`

export const Description = styled.p`
	cursor: pointer;
`

export const UserDescription = styled.div`
	width: 100%;
	height: auto;	
	margin-bottom: 10px;
`

export const Username = styled.h2`
	font-size: 16px;
`

export const Information = styled.p`
	
`

export const Link = styled.p`
	
`

export const EditProfile = styled.button`
	width: 95%;
	height: 30px;	
	padding: 5px 0;
	text-align: center;
	border-radius: 4px;
	cursor: pointer;	
	${props => props.theme === 'light' && css`
		border: 1px solid black;
		background-color: white;			
		color: black;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #1F1F1F;		
		border: 1px solid white;
		color: white;		
	`}
	@media (min-width: 500px){	    	    
	    width: 500px;
	    margin: 10px auto 0 auto;
    }	
`

export const ButtonsContainer = styled.div`
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 5px 0;
	@media (min-width: 500px){	    	    
	    width: 500px;
	    margin: 10px auto;
    }	
`

export const ButtonUserFunction = styled.div`
	width: 40%;
	height: 30px;
	padding: 5px 0;
	text-align: center;
	border-radius: 4px;	
	cursor: pointer;
	${props => props.theme === 'light' && css`
		border: 1px solid black;
		background-color: white;			
		color: black;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;		
		border: 1px solid white;
		color: white;		
	`}
`

export const Down = styled.div`
	width: 30px;
	height: 30px;
	border: 1px solid black;
	backgroud-color: grey;
	padding: 5px;
	text-align: center;
	border-radius: 4px;
	text-align: center;
	cursor: pointer;
	${props => props.theme === 'light' && css`
		border: 1px solid black;
		background-color: white;			
		color: black;		
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;		
		border: 1px solid white;
		color: white;		
	`}
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 10vh;
	padding: 2px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;	
	@media (min-width: 500px){	    
	    border: 1px solid #dbdbdb;	    
		width: 500px;
	    margin: 0 auto;	    
    }	
`

export const Close = styled.div`
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const Title = styled.h1`
	margin-left: 10px;
`