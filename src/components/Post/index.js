// React 
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom' 
 
// Assets
import {	
	PostContainer, UserPost, UserDataLeft, ImageUser, Username, Count, 
	InterectiveSection, Left, Dots, Dot, Likes, Paragraph, Comments, Time, 
	ExtradataContainer, DotsButtonMenu, ButtonLeft, ButtonRight, ImagesGroupContainer
} from './style'
 
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { AiOutlineHeart, AiFillHeart, AiOutlineComment, AiOutlineSend } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Components
import ImagesGroup from '../ImagesGroup'
import CommentsList from '../CommentsList'
import LikesList from '../LikesList'
import PostOptions from '../PostOptions'

// API
import apiCall from '../../api/apiCall'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'

let element


const Post = ({ post, url }) => {
		
	// Context
	const { isAuth } =  useContext(UserContext) 	
 	const { theme } = useContext(ThemeContext) 	

	// Language hook
 	const words = useGetWords({ component: 'post' }) 		 		

	const [like, setLike] = useState(post.user_liked)
	const [showLikes, setShowLikes] = useState(false)
	
	const [showComments, setShowComments] = useState(false)
	const [totalLikes, setTotalLikes] = useState(post.all_likes)

	const [showMenuPost, setShowMenuPost] = useState(false)

	const [showPost, setShowPost] = useState(true)

	const [imageIndex, setImageIndex] = useState(0)	

	const [referenceId, setReferenceId] = useState(false)
	const [arrowClicked, setArrowClicked] = useState(false)

	// Variables
	const size = '22px'
	const history = useHistory()	 
	const color = theme === 'light' ? 'black' : 'white'

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
		if (!arrowClicked) {			
			element = e.target		
			let division = Math.round(element.scrollLeft/500)
			let forwhile = Math.round(element.scrollWidth/500)
			//element.scrollWidth
			//element.scrollLeft
			//element.clientWidth
			if (element.clientWidth > 500) {				
				division = Math.round(element.scrollLeft/element.clientWidth)
				forwhile = Math.round(element.scrollWidth/element.clientWidth)
			}

			for (var x = 0; x < forwhile; x++) {
				if (division === x) {
					setImageIndex(x)
				}
			}
		}
	}

	useEffect(()=>{
		setReferenceId(document.getElementById(`${post.post_id}-imagesGroup`))		
	}, [])

	const handleDotClick = index => {
		setArrowClicked(true)
		let result = window.screen.width * index
		if (window.screen.width > 500) {
			result = 500 * index
		}		

		if (referenceId !== false) {
			referenceId.scroll({
				left: result
			})

			setImageIndex(index)			
		}
		setArrowClicked(false)
	}

	const handleMoveArrow = (whatDoYouWant) => {
		setArrowClicked(true)
		let actualNotAsyncImageIndex = imageIndex
		if (whatDoYouWant) {
			if (imageIndex > 0) {
				actualNotAsyncImageIndex -= 1 
				setImageIndex(actualNotAsyncImageIndex)
			}
		} else {
			if (imageIndex < post.images.length - 1) {
				actualNotAsyncImageIndex += 1
				setImageIndex(actualNotAsyncImageIndex)	
			}
		}


		if (referenceId !== false) {
			if (window.screen.width > 500) {
				referenceId.scroll({
					left: 500 * actualNotAsyncImageIndex
				})
			} else {
				referenceId.scroll({
					left: window.screen.width * actualNotAsyncImageIndex
				})
			}
		}
		setArrowClicked(false)
	}


	if (showPost) {
		return(
			<PostContainer>
				{showComments &&  
					<CommentsList url={url} setShowComments={setShowComments} post_id={post.post_id}/>
				}
				{showLikes && 
					<LikesList url={url} setShowLikes={setShowLikes} post_id={post.post_id}/>
				}
				{showMenuPost && 
					<PostOptions 
						setShowMenuPost={setShowMenuPost} 
						post_data={{
							username: post.username,
							user_id: post.user_id,
							post_id: post.post_id
						}}
						isAuth={isAuth}	
						setShowPost={setShowPost}
					/>
				}								
				<UserPost>
					<UserDataLeft>
						<ImageUser src={post.picture} alt='User post' />
						<Username to={`profile/${post.username}`} theme={theme}>{post.username}</Username>
					</UserDataLeft>
					<DotsButtonMenu onClick={()=>setShowMenuPost(true)}>
						<BiDotsVerticalRounded size='20px' color={color}/>
					</DotsButtonMenu>
				</UserPost>
				<ImagesGroupContainer>
					<Count theme={theme}>{imageIndex+1}/{post.images?.length}</Count>
					<ButtonLeft theme={theme} onClick={()=>handleMoveArrow(true)}><IoIosArrowBack size={size} color={theme === 'light' ? 'white' : 'black'} /></ButtonLeft>
					<ButtonRight theme={theme} onClick={()=>handleMoveArrow(false)}><IoIosArrowForward size={size} color={theme === 'light' ? 'white' : 'black'} /></ButtonRight>
					<ImagesGroup images={post.images} size='100vw' onScrollEvent={handleControlScrollImage} post_id={post.post_id} />
				</ImagesGroupContainer>
				<Dots>
					{post.images?.map((image, index)=>(
						<Dot key={index} onClick={()=> handleDotClick(index)}>
							<GoPrimitiveDot size='10px' color={index <= imageIndex ? 'blue' : color} />
						</Dot>
					))}
				</Dots>
				<InterectiveSection>							
					<Left>
						{ like ? <AiFillHeart  size={size} onClick={()=>handleLike()} color={color}/> :
						<AiOutlineHeart  size={size} onClick={()=>handleLike()}/> }					
						<AiOutlineComment  size={size} onClick={()=>setShowComments(true)} color={color}/>
						<AiOutlineSend size={size}  onClick={()=>console.log("send")} color={color}/>
					</Left>				
				</InterectiveSection>
				<Likes onClick={()=>setShowLikes(true)}>{totalLikes} {words?.likes}</Likes>
				
				<Paragraph>
					<Username to={`/profile/${post.username}`} theme={theme}>{post.username}</Username> {post.description}
				</Paragraph>						
				<ExtradataContainer>
					<Comments onClick={()=>setShowComments(true)}>
						{post.all_comments} {words?.comments}
					</Comments>
					<Time>{post.created}</Time>
				</ExtradataContainer>
			</PostContainer>
		)
	} else {
		return ''
	}
}

export default Post