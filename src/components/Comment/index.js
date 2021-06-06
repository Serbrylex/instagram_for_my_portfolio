// React
import { useContext } from 'react'

// Assets
import {
	CommentContainer, DataLeft, ImageProfile, DataRight, 
	CommentParagraph, Username
} from './style'

// Context
import ThemeContext from '../../context/theme'

const Comment = ({ comment, url }) => {

	// Context
	const { theme } = useContext(ThemeContext) 	

	return(
		<CommentContainer>
			<DataLeft>
				<ImageProfile src={`${url}${comment.picture}`} alt='Image Profile' />
			</DataLeft>
			<DataRight>
				<CommentParagraph theme={theme}>
					<Username to={`/profile/${comment.username}`} theme={theme}>{comment.username}</Username> {comment.comment}
				</CommentParagraph>
			</DataRight>
		</CommentContainer>
	)
}

export default Comment