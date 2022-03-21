import {
	WhiteBar, BlackBar, TimeLineContainer
} from './style'

import React from 'react'

const TimeLine = ({ size, where }) => {
	
	let allBars = []

	for (var i = 0; i < size; i++) {
		
		if (i <= where) {
			allBars.push(<WhiteBar key={i}/>)
		} else {
			allBars.push(<BlackBar key={i}/>)
		}

	}	

	return(
		<TimeLineContainer>
			{allBars}
		</TimeLineContainer>				
	)
}

export default TimeLine