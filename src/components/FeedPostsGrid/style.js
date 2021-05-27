import styled from 'styled-components'

export const FeedImages = styled.div`
	display: grid;
	width: 100vw;
	height: 80vh;
	grid-template-columns: repeat(3,30vw);
	grid-template-rows: 30vw;
	grid-gap: 3vw;
	padding: 10px 2vw;
`

export const EachImageContainer = styled.div`
	position: relative;
`

export const IconContainer = styled.div`
	position: absolute;
	top: 5px;
	right: 5px;
	color: white;
`

export const ImagePost = styled.img`
	width: 100%;
	height: 100%;
	cursor: pointer;
	object-fit: cover;
`