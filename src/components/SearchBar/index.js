// React
import { useContext } from 'react'

// Assets
import {
	SearchContainer, Form, Input, Close, ImageProfile, Button
} from './style'

import { CgSearch, CgArrowLeft } from 'react-icons/cg'

// Context
import UserContext from '../../context/users'

const SearchBar = ({ search, focus, setFocus, fixed, url, handleSendComment }) => { 
	
	const size = '25px'
	const { isAuth } = useContext(UserContext)

	return(
		<SearchContainer fixed={fixed}>
			{focus &&
				<Close onClick={()=> setFocus(false)}>
					<CgArrowLeft size={size}/>
				</Close>
			}
			<Form>
				{fixed === 'bottom' ? 
					<ImageProfile src={`${url}${isAuth.user.profile.picture}`} /> :
					<CgSearch size={size}/>
				}
				<Input {...search} onFocus={()=>setFocus(true)}/>
				{fixed === 'bottom'  && 
					<Button onClick={handleSendComment} >
						Publicar
					</Button>
				}
			</Form>
		</SearchContainer>
	)
}

export default SearchBar