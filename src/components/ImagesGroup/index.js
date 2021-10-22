import {
	ImagesContainer, ImagePost
} from './style'

const ImagesGroup = ({ images, size, onScrollEvent, post_id }) => {	

	return( 
		<ImagesContainer size={size} onScroll={e => onScrollEvent(e)} onClick={()=>console.log('hi')} id={`${post_id}-imagesGroup`}> 
			{images?.map((image, index)=>(								
				<ImagePost src={image} alt={image} key={index} size={size} />
			))}
		</ImagesContainer> 
	)
}

export default ImagesGroup