import {
	ImagesContainer, ImagePost
} from './style'

const ImagesGroup = ({ images, size, onScrollEvent }) => {	

	return(
		<ImagesContainer size={size} onScroll={e => onScrollEvent(e)}> 
			{images?.map((image, index)=>(								
				<ImagePost src={image} alt={image} key={index} size={size}/>
			))}
		</ImagesContainer> 
	)
}

export default ImagesGroup