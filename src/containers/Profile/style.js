import styled from 'styled-components' 


export const ProfileContainer = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column; 
	align-items: center;
`
 
export const DataProfile = styled.div`
	width: 96vw; 
	padding: 5px 2vw;
	display: flex;
	flex-direction: column;
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

`

export const UserDescription = styled.div`
	width: 100%;
	height: 70px;	
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
	border: 1px solid black;
	backgroud-color: grey;
	padding: 5px 0;
	text-align: center;
	border-radius: 4px;
	cursor: pointer;
`

export const ButtonsContainer = styled.div`
	width: 95%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Following = styled.div`
	width: 40%;
	height: 30px;
	border: 1px solid black;
	backgroud-color: grey;
	padding: 5px 0;
	text-align: center;
	border-radius: 4px;	
`

export const Message = styled.div`
	width: 40%;
	height: 30px;
	border: 1px solid black;
	backgroud-color: grey;
	padding: 5px 0;
	text-align: center;
	border-radius: 4px;
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
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 10vh;
	padding: 2px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;	
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