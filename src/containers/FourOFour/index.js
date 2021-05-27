import {
	Container, Image
} from './style'

import fourofour from '../../images/FourOFour.svg'

const FourOFour = () => {
	
	return(
		<Container>
			<Image src={fourofour} alt='404' />
		</Container>
	)
}

export default FourOFour