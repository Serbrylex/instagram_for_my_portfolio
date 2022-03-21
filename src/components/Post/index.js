// React 
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'
 
// Assets 
import {	
	PostContainer, UserPost, UserDataLeft, ImageUser, Username, Count, 
	InterectiveSection, Left, Dots, Dot, Likes, Paragraph, Comments, Time, 
	ExtradataContainer, DotsButtonMenu, ButtonArrow, ImagesGroupContainer
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

// Hooks
import { useGetWords } from '../../hooks/useGetWords'

let element


const Post = ({ post }) => {
		
	// Context
	const user = useSelector(store => store.user)
	const { theme, url } = useSelector(store => store.preference)

	// Language hook
 	const words = useGetWords({ component: 'post' }) 	 	

	const [like, setLike] = useState(()=>{		
		if (user.isAuth) {
			if (post.users_liked.find((actualUser)=>user.user.id===actualUser)) {
				return true
			}
		 	return false
		} 		
		return false	
	})
	const [showLikes, setShowLikes] = useState(false)
	
	const [showComments, setShowComments] = useState(false)
	const [totalLikes, setTotalLikes] = useState(post.all_likes)

	const [showMenuPost, setShowMenuPost] = useState(false)

	const [showPost, setShowPost] = useState(true)

	const [imageIndex, setImageIndex] = useState(0)	

	const [referenceId, setReferenceId] = useState(false)

	// Variables
	const size = '22px'
	const history = useNavigate()	 
	const color = theme === 'light' ? 'black' : 'white'

	const handleLike = async () => {

		if (user.isAuth) {
			setTotalLikes(like ? totalLikes - 1 : totalLikes + 1 )
			
			const token = `Token ${user.access_token}`		
			await apiCall({			
				url: url + `/set-like/${post.post_id}/`, 			
				method: like ? 'DELETE' : 'POST',
				headers: {
					'Authorization': token,				
				}
			}) 

			setLike(!like)
		} else {
			history('/login')
		}
	}

	const handleControlScrollImage = e => {				
		element = e.target		
		let division = Math.round(element.scrollLeft/500)
		let forwhile = Math.round(element.scrollWidth/500)

		if (element.clientWidth < 500) {				
			division = Math.round(element.scrollLeft/element.clientWidth)
			forwhile = Math.round(element.scrollWidth/element.clientWidth)
		}
			
		setImageIndex(division)							
	}

	useEffect(()=>{
		setReferenceId(document.getElementById(`${post.post_id}-imagesGroup`))		
	}, [])

	const handleDotClick = index => {		
		let result = window.screen.width * index
		if (window.screen.width > 500) {
			result = 500 * index
		}		

		if (referenceId !== false) {
			referenceId.scroll({
				left: result
			})					
		}		
	}

	const handleMoveArrow = (whatDoYouWant) => {		
		let actualNotAsyncImageIndex = imageIndex
		if (whatDoYouWant) {
			if (imageIndex > 0) {
				actualNotAsyncImageIndex -= 1 				
			}
		} else {
			if (imageIndex < post.images.length - 1) {
				actualNotAsyncImageIndex += 1				
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
	}
	
	return(
		<PostContainer>
			{showComments &&  
				<CommentsList setShowComments={setShowComments} post_id={post.post_id}/>
			}
			{showLikes && 
				<LikesList setShowLikes={setShowLikes} post_id={post.post_id}/>
			}
			{showMenuPost && 
				<PostOptions
					setShowMenuPost={setShowMenuPost} 
					post_data={{
						username: post.username,
						user_id: post.user_id,
						post_id: post.post_id
					}}					
					setShowPost={setShowPost}
				/>
			}								
			<UserPost>
				<UserDataLeft>
					<ImageUser src={post.picture} alt='User post' />
					<Username to={`/profile/${post.username}`} theme={theme}>{post.username}</Username>
				</UserDataLeft>
				<DotsButtonMenu onClick={()=>{ user.isAuth ? setShowMenuPost(true) : history('/login')}}>
					<BiDotsVerticalRounded size='20px' color={color}/>
				</DotsButtonMenu>
			</UserPost>
			<ImagesGroupContainer>
				<Count theme={theme}>{imageIndex+1}/{post.images?.length}</Count>
				{post.images?.length > 1 &&
					<>
					<ButtonArrow orientation={'left'} theme={theme} onClick={()=>handleMoveArrow(true)}>
						<IoIosArrowBack size={size} color={theme === 'light' ? 'white' : 'black'} />
					</ButtonArrow>
					<ButtonArrow orientation={'right'} theme={theme} onClick={()=>handleMoveArrow(false)}>
						<IoIosArrowForward size={size} color={theme === 'light' ? 'white' : 'black'} />
					</ButtonArrow>
					</>
				}
				<ImagesGroup images={post.images} size='100vw' onScrollEvent={handleControlScrollImage} post_id={post.post_id}/>
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
					{ like ? <AiFillHeart size={size} onClick={()=>{user.isAuth ? handleLike() : history('/login')}} color={color}/> :
					<AiOutlineHeart size={size} onClick={()=>{user.isAuth ? handleLike() : history('/login')}}/> }					
					<AiOutlineComment size={size} onClick={()=>{user.isAuth ? setShowComments(true) : history('/login')}} color={color}/>
					<AiOutlineSend size={size}  onClick={()=>console.log("send")} color={color}/>
				</Left>				
			</InterectiveSection>
			<Likes onClick={()=>{user.isAuth ? setShowLikes(true) : history('/login')}}>{totalLikes} {words?.likes}</Likes>
			
			<Paragraph>
				<Username to={`/profile/${post.username}`} theme={theme}>{post.username}</Username> {post.description}
			</Paragraph>						
			<ExtradataContainer>
				<Comments onClick={()=>{user.isAuth ? setShowComments(true) : history('/login')}}>
					{post.all_comments} {words?.comments}
				</Comments>
				<Time>{post.created}</Time>
			</ExtradataContainer>
		</PostContainer>
	)	
}

export default Post