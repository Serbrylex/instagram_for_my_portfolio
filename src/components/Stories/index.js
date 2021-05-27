// React
import { useHistory } from 'react-router-dom'

// Assets
import {
	ListOfStories, Stori, StoriContainer, UsernameShort, ImgageStorie
} from './style'
 
import { AiOutlinePlus } from 'react-icons/ai'
 
 
const Stories = ({ add, stories, url }) => {

	const history = useHistory()

	return (
		<ListOfStories>			
			{stories?.map((eachUserStorie, index)=>(
				<Stori key={index} onClick={()=>{history.push(eachUserStorie.eventAddOrGo)}}>
					<StoriContainer>						
						<ImgageStorie src={eachUserStorie.user.picture} alt={eachUserStorie.user.username} />
					</StoriContainer>
					<UsernameShort>{eachUserStorie.user.username}</UsernameShort>
				</Stori>
			))}			
			{add === 'last' &&
				<Stori onClick={()=> history.push('/add-storie') }>
					<StoriContainer>						
						<AiOutlinePlus />
					</StoriContainer>
					<UsernameShort>Nuevo</UsernameShort>
				</Stori>	
			}
		</ListOfStories>
	)
}

export default Stories