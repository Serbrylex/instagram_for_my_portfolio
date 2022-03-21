// React
import React, { useContext } from 'react'

// Assets
import {
	CommentContainer, ImageProfile,
	CommentParagraph, Username
} from './style'

// Context

import { useSelector } from 'react-redux'

const Comment = ({ comment }) => {

	// Context
	const theme = useSelector(state => state.preference.theme)
	const url = useSelector(state => state.preference.url)

	return(
		<CommentContainer theme={theme}>			
			<ImageProfile src={`${url}${comment.picture}`} alt='Image Profile' />			
			<CommentParagraph theme={theme}>
				<Username to={`/profile/${comment.username}`} theme={theme}>{comment.username}</Username> {comment.comment}
			</CommentParagraph>			
		</CommentContainer>
	)
}

export default Comment