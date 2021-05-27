// React
import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Assets
import {	
	PostContainer, UserPost, UserDataLeft, ImageUser, Username, Count, 
	InterectiveSection, Left, Dots, Dot, Likes, Paragraph, Comments, Time, 
	ExtradataContainer
} from './style'

import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineSend } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'

// Components
import ImagesGroup from '../ImagesGroup'
import CommentsList from '../CommentsList'
import LikesList from '../LikesList'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'

let element

const Post = ({ post, url }) => {
		
	const { isAuth } =  useContext(UserContext) 	
	const [like, setLike] = useState(post.user_liked)
	const [showLikes, setShowLikes] = useState(false)
	const [showComments, setShowComments] = useState(false)
	const [totalLikes, setTotalLikes] = useState(post.all_likes)

	const [imageIndex, setImageIndex] = useState(0)	

	const size = '25px'
	const history = useHistory()	 

	const handleLike = async () => {
		setTotalLikes(!like ? totalLikes - 1 : totalLikes + 1 )
		
		const token = `Token ${isAuth.access_token}`		
		await apiCall({			
			urlDirection: `set-like/${post.post_id}/`, 			
			method: !like ? 'DELETE' : 'POST',
			headers: {
				'Authorization': token,				
			}
		}) 

		setLike(!like)
	}

	const handleControlScrollImage = e => {
		element = e.target		
		//element.scrollWidth
		//element.scrollLeft
		//element.clientWidth
		let division = Math.round(element.scrollLeft/element.clientWidth)			

		for (var x = 0; x < element.scrollWidth/element.clientWidth; x++) {
			if (division === x) {
				setImageIndex(x)
			}
		}
	}

	const handleDotClick = index => {
		element.scrollLeft = element.clientWidth * index
		setImageIndex(index)
	}

	return(
		<PostContainer>
			{showComments &&  
				<CommentsList url={url} setShowComments={setShowComments} post_id={post.post_id}/>
			}
			{showLikes && 
				<LikesList url={url} setShowLikes={setShowLikes} post_id={post.post_id}/>
			}
			<Count>{imageIndex+1}/{post.images?.length}</Count>
			<UserPost>
				<UserDataLeft>
					<ImageUser src={post.picture} alt='User post' />
					<Username to={`profile/${post.username}`}>{post.username}</Username>
				</UserDataLeft>
				<BiDotsVerticalRounded size={size} />
			</UserPost>
			<ImagesGroup images={post.images} size='100vw' onScrollEvent={handleControlScrollImage} />
			<Dots>
				{post.images?.map((image, index)=>(
					<Dot key={index} onClick={()=> handleDotClick(index)}>
						<GoPrimitiveDot size='10px' color={index <= imageIndex ? 'black' : 'blue'} />
					</Dot>
				))}
			</Dots>
			<InterectiveSection>							
				<Left>
					{ like ? <AiFillHeart  size={size} onClick={()=>handleLike()}/> :
					<AiOutlineHeart  size={size} onClick={()=>handleLike()}/> }					
					<AiOutlineComment  size={size} onClick={()=>setShowComments(true)}/>
					<AiOutlineSend size={size}  onClick={()=>console.log("send")}/>
				</Left>				
			</InterectiveSection>
			<Likes onClick={()=>setShowLikes(true)}>{totalLikes} likes</Likes>
			
			<Paragraph>
				<Username to={`/profile/${post.username}`}>{post.username}</Username> {post.description}
			</Paragraph>						
			<ExtradataContainer>
				<Comments onClick={()=>setShowComments(true)}>
					Ver los {post.all_comments} comentarios
				</Comments>
				<Time>{post.created}</Time>
			</ExtradataContainer>
		</PostContainer>
	)
}

export default Post