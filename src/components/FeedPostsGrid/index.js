// React
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

// Assets
import {
	FeedImages, EachImageContainer, IconContainer, ImagePost, AddNewPost
} from './style'

import { RiCheckboxMultipleBlankLine } from 'react-icons/ri'

const FeedPostsGrid = ({ posts, setKindOfView }) => {
 
	const theme = useSelector(store => store.preference.theme)
	const size = '25px'
	const navigate = useNavigate()
	 
	return(
		<FeedImages theme={theme}> 
			{posts.length === 0 && 
				<AddNewPost onClick={() => navigate('/new-post')}>
					<p>+</p>
				</AddNewPost>				
			}
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