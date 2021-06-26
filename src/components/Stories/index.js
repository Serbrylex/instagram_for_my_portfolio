// React
import { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom' 

// Assets
import {
	ListOfStories, Stori, StoriContainer, UsernameShort, ImgageStorie,
	ButtonLeft, ButtonRight, ListOfStoriesFor
} from './style'
 
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'
 
 
const Stories = ({ add, stories, url }) => {
 
	// Context
	const { isAuth } = useContext(UserContext)
 	const { theme } = useContext(ThemeContext) 	

	// Variables
	const history = useHistory()
	const color = theme === 'light' ? 'black' : 'white'
	const size = '22px'
	const [storiesReference, setStoriesReference] = useState(false)
	const [storiesIndex, setStoriesIndex] = useState(0)

	// Language hook
 	const words = useGetWords({ component: 'stories' }) 	

 	useEffect(()=>{
 		console.log(stories)
 		setStoriesReference(document.getElementById('list-of-stories'))
 	}, [])

	const handleMoveArrow = (whatDoYouWant) => {				
		let actualNotAsyncImageIndex = storiesIndex
		if (whatDoYouWant) {
			if (storiesIndex > 0) {
				actualNotAsyncImageIndex -= 1 
				setStoriesIndex(actualNotAsyncImageIndex)
			}
		} else {
			if (storiesIndex < stories.length - 1) {
				actualNotAsyncImageIndex += 1
				setStoriesIndex(actualNotAsyncImageIndex)	
			}
		}


		if (storiesReference !== false) {
			if (window.screen.width > 500) {
				storiesReference.scroll({
					left: 500 * actualNotAsyncImageIndex
				})
			} else {
				storiesReference.scroll({
					left: window.screen.width * actualNotAsyncImageIndex
				})
			}
		}		
	}


	return (
		<ListOfStoriesFor>	
			{storiesIndex !== 0 &&
				<ButtonLeft theme={theme} onClick={()=>handleMoveArrow(true)}><IoIosArrowBack size={size} color={theme === 'light' ? 'white' : 'black'} /></ButtonLeft>
			}
			{storiesIndex !== (stories.length - 1) / 6 &&
					<ButtonRight theme={theme} onClick={()=>handleMoveArrow(false)}><IoIosArrowForward size={size} color={theme === 'light' ? 'white' : 'black'} /></ButtonRight>
				}
			<ListOfStories theme={theme} id='list-of-stories'>	
				{add === 'last' &&
					<Stori onClick={()=> history.push('/add-storie') }>
						<StoriContainer theme={theme} style={{border: `1px solid ${color}`}}>						
							<AiOutlinePlus color={color}/>
						</StoriContainer>
						<UsernameShort theme={theme}>{words?.new_storie}</UsernameShort>
					</Stori>	
				}		
				{stories?.map((eachUserStorie, index)=>(
					<Stori key={index} onClick={()=>{history.push(eachUserStorie.eventAddOrGo)}}>
						<StoriContainer theme={theme}>						
							<ImgageStorie src={eachUserStorie.user.picture} alt={eachUserStorie.user.username} />
						</StoriContainer>
						<UsernameShort theme={theme}>{eachUserStorie.user.username}</UsernameShort>
					</Stori>
				))}						
			</ListOfStories>
		</ListOfStoriesFor>
	)
}

export default Stories