import styled from 'styled-components' 

export const FeedContainer = styled.div`
	width: 100%;	
	height: 100vh;
	overflow-y: scroll;
`
 
// Feed ----------------------------------------------- 
export const FeedImages = styled.div`
	width: 100vw;
	height: auto;	
	margin: 10px auto;
`

export const LoadingBottom = styled.div`
	height: 10vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;	
	margin: 0 auto 15vh auto;
`

export const ImageLoading = styled.img`
	height: 30px;
	width: 30px;
`