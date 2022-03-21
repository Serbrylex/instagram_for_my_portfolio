import {
	ImagesContainer, ImagePostContainer, ImagePost
} from './style'

import React from 'react'

const ImagesGroup = ({ images, size, onScrollEvent, post_id }) => {	

	return( 
		<ImagesContainer size={size} onScroll={e => onScrollEvent(e)} id={`${post_id}-imagesGroup`}> 
			{images?.map((image, index)=>(	
				<ImagePostContainer key={index}>
					<ImagePost src={image} alt={image} size={size} />
				</ImagePostContainer>
			))}
		</ImagesContainer> 
	)
}

export default ImagesGroup