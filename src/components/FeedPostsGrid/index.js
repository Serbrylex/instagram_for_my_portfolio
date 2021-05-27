// Assets
import {
	FeedImages, EachImageContainer, IconContainer, ImagePost
} from './style'

import { RiCheckboxMultipleBlankLine } from 'react-icons/ri'

const FeedPostsGrid = ({ posts, setKindOfView }) => {

	const size = '25px'
	 
	return(
		<FeedImages> 
			{posts?.map((post, index)=>(	
				<EachImageContainer key={index}>
					{post.images.length > 0 &&
						<IconContainer>
							<RiCheckboxMultipleBlankLine size={size} />
						</IconContainer>
					}
					<ImagePost src={post.images[0]} key={index} onClick={()=>setKindOfView(true)}/>
				</EachImageContainer>				
			))}
		</FeedImages>
	)
}

export default FeedPostsGrid