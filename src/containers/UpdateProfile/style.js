import styled, { css } from 'styled-components' 


export const UpdateProfileContainer = styled.div`
	width: 100vw;
	height: auto; 
	padding-top: 10px;
	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}
`

export const Header = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;	
	border-bottom: 1px solid grey;	 
	padding: 0 3vw;
	border: 1px solid #dbdbdb;

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
	    margin: 0 auto;
    }
`

export const BackButton = styled.div`
	cursor: pointer;
`

export const Title = styled.h3`
	font-weight: bold;
`

export const AcceptEdit = styled.div`
	color: blue;
	cursor: pointer;
`

export const DataUserProfile = styled.div`
	margin-top: 2vh;
	width: 100vw;
	height: auto;
	padding: 10px 3vw;	
`

export const ImageDataContainer = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;	
	border: 1px solid #dbdbdb;
	margin: 10px 0;

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
	    margin: 10px auto;
    }
`

export const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	object-fit: cover;
`

export const ChangeImageButton = styled.p`
	color: ${props => props.theme === 'light' ? 'black' : 'white'};
	font-size: 20px;
	width: auto;
	cursor: pointer;
`

export const FormUserData = styled.div`
	border: 1px solid #dbdbdb;
	padding: 10px 5px;

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
	    margin: 0 auto;
    }
`

export const Field = styled.div`
	margin: 15px 0;
`

export const Description = styled.p`
	color: #888;
	font-size: 14px;
`

export const Input = styled.input`
	width: 100%;
	height: 25px;
	margin: 5px 0;
	padding: 2px 5px;
	border: none;
	border: 1px solid #dbdbdb;
	color: black;
	font-size: 15px;

	${props => props.theme === 'light' && css`
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #3D3D3D;
		color: white;
	`}
`

export const IsPublicButtonsContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;	
	align-items: center;
	justify-content: space-evenly;
`

export const ButtonIsPublic = styled.button`
	width: 100px;
	height: 30px;
	border: 1px solid grey;
	padding: 2px 5px;
	border-radius: 4px;

	${props => props.theme === 'light' && css`
		background-color: ${props => props.isPublic  ? '#d2cdcc' : 'none'};		
		color: black;
	`}

	${props => props.theme === 'dark' && css`		
		background-color: ${props => props.isPublic  ? '#525252' : 'none'};
		color: white;
	`}

`
