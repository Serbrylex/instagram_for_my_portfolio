import styled from 'styled-components'


export const TimeLineContainer = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 5px;	
	width: 90vw;
	height: 5px;
	@media (min-width: 500px){        
        width: 450px;        
    }
`

export const WhiteBar = styled.div`
	width: 100%;
	height: 5px;	
	margin: 0 1px;
	background-color: white;
	border-radius: 4px;
`

export const BlackBar = styled.div`
	width: 100%;
	height: 5px;
	margin: 0 1px;	
	background-color: grey;
	border-radius: 4px;
`