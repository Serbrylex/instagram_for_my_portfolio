// Assets
import circle from '../../assets/images/circle.svg' 

// Redux
import { useSelector } from 'react-redux'
import React from 'react'

import {
	ImageLoading, Container
} from './style'


const Loading = () => {

	const theme = useSelector(store => store.preference.theme)

	return(
		<Container theme={theme}>
			<ImageLoading src={circle} alt='loading' />
		</Container>
	)
}

export default Loading