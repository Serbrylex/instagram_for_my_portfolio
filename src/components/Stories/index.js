// React
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useSelector } from 'react-redux'

// Assets
import { 
	ListOfStories, Stori, StoriContainer, UsernameShort, ImgageStorie,
	ArrowsContainer, ListOfStoriesFor
} from './style'
 
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'
 
 
const Stories = ({ add, stories, isMyProfile = false }) => {
 
	// Context
	const user = useSelector(store => store.user)
 	const { theme, url } = useSelector(store => store.preference)

	// Variables
	const history = useNavigate()
	const color = theme === 'light' ? 'black' : 'white'
	const size = '22px'
	const [storiesReference, setStoriesReference] = useState(false)
	// Esto sirver para saber en página de las Stories te encuentras,
	// lo maximo de stories por página es de 6
	const [storiesIndex, setStoriesIndex] = useState(0)

	// Language hook
 	const words = useGetWords({ component: 'stories' }) 	

 	useEffect(()=>{ 		
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
				<ArrowsContainer theme={theme} orientation={'left'}>
					<IoIosArrowBack 
						size={size} 
						color={theme === 'light' ? 'white' : 'black'}
						onClick={()=>handleMoveArrow(true)}
					/>
				</ArrowsContainer>
			}
			{stories.length > 4 &&
				<ArrowsContainer theme={theme} orientation={'right'}>
					<IoIosArrowForward 
						size={size} 
						color={theme === 'light' ? 'white' : 'black'}
						onClick={()=>handleMoveArrow(false)}
					/>
				</ArrowsContainer>
			}
			<ListOfStories theme={theme} id='list-of-stories'>	
				{add === 'last' && isMyProfile &&
					<Stori onClick={()=> history('/add-storie') }>
						<StoriContainer theme={theme} style={{border: `1px solid ${color}`}}>						
							<AiOutlinePlus color={color}/>
						</StoriContainer>
						<UsernameShort theme={theme}>{words?.new_storie}</UsernameShort>
					</Stori>	
				}		
				{stories?.map((eachUserStorie, index)=>(
					<Stori key={index} onClick={()=>{history(eachUserStorie.eventAddOrGo)}}>
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