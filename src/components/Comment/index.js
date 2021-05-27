// Assets
import {
	CommentContainer, DataLeft, ImageProfile, DataRight, 
	CommentParagraph, Username
} from './style'


const Comment = ({ comment, url }) => {

	return(
		<CommentContainer>
			<DataLeft>
				<ImageProfile src={`${url}${comment.picture}`} alt='Image Profile' />
			</DataLeft>
			<DataRight>
				<CommentParagraph>
					<Username to={`/profile/${comment.username}`} >{comment.username}</Username> {comment.comment}
				</CommentParagraph>
			</DataRight>
		</CommentContainer>
	)
}

export default Comment