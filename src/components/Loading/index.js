// Assets
import circle from '../../images/circle.svg' 

import {
	ImageLoading, Container
} from './style'


const Loading = () => {
	return(
		<Container>
			<ImageLoading src={circle} alt='loading' />
		</Container>
	)
}

export default Loading