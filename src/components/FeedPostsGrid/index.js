// React
import { useContext } from 'react'

// Assets
import {
	FeedImages, EachImageContainer, IconContainer, ImagePost
} from './style'

import { RiCheckboxMultipleBlankLine } from 'react-icons/ri'

// Context
import ThemeContext from '../../context/theme'

const FeedPostsGrid = ({ posts, setKindOfView }) => {
 
	const { theme } = useContext(ThemeContext) 	
	const size = '25px'
	 
	return(
		<FeedImages theme={theme}> 
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