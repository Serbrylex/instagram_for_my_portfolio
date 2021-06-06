import styled, { css } from 'styled-components' 


export const SearchContainer = styled.div`
	width: 100%;
	height: auto; 
	padding: 60px 0 0 0;
	
	${props => props.theme === 'light' && css` 
		background-color: white;
		color: black;
	`}

	${props => props.theme === 'dark' && css`
		background-color: #141414;
		color: white;
	`}
`
 
export const SearchInput = styled.div`
	width: 100%;
	height: auto;		

	@media (min-width: 500px){
	    width: 500px;	   	    		
	    margin: 0 auto;
    }
`

export const HeaderSection = styled.div`
	width: 100%;
	height: 10vh;
	padding: 2px 2vw;
	display: flex;
	align-items: center;
	justify-content: start;		

	@media (min-width: 500px){
	    width: 500px;	   	       
		border: 1px solid #dbdbdb;	  		    
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

export const NavBarFilters = styled.div`
	width: 100%;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const Filter = styled.p`
	width: 25%;
	height: auto;
	text-align: center;
	cursor: pointer;
	display: flex;
	align-items: end;
	justify-content: center;
`

export const ListOfFilter = styled.div`
	width: 100%;
	height: 80vh;	
	padding: 0 1%;
	
	@media (min-width: 500px){
	    width: 500px;	   	    		
	    margin: 0 auto;
    }
`
