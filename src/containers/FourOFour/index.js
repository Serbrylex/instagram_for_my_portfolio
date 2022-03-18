import {
	Container, Image
} from './style'

import fourofour from '../../assets/images/FourOFour.svg'

const FourOFour = () => {
	
	alert('Something is wrong in the rooter')

	return(
		<Container>
			<Image src={fourofour} alt='404' />
		</Container>
	)
}

export default FourOFour