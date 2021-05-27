import styled from 'styled-components' 


export const UpdateProfileContainer = styled.div`
	width: 100vw;
	height: auto;
`

export const Header = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	border-bottom: 1px solid grey;
	top: 0;
	padding: 0 3vw;
`

export const BackButton = styled.div`
	cursor: pointer;
`

export const Title = styled.div`
	font-weight: bold;
`

export const AcceptEdit = styled.div`
	color: blue;
	cursor: pointer;
`

export const DataUserProfile = styled.div`
	margin-top: 12vh;
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
`

export const Image = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	object-fit: cover;
`

export const ChangeImageButton = styled.p`
	color: blue;
	font-size: 20px;
	width: auto;
	cursor: pointer;
`

export const FormUserData = styled.form`
	
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
	height: 20px;
	margin: 5px 0;
	padding: 1px 5px;
	border: none;
	border-bottom: 1px solid grey;
	color: black;
	font-size: 15px;
`
