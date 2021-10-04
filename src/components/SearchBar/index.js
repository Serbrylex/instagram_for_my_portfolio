// React
import { useContext, useEffect } from 'react'

// Assets
import {
	SearchContainer, Form, Input, Close, ImageProfile, Button
} from './style'

import { CgSearch, CgArrowLeft } from 'react-icons/cg'
import { AiOutlineSend } from 'react-icons/ai'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const SearchBar = ({ search, focus = false, setFocus = (some) => {}, fixed, url, handleSendComment }) => { 
	 
	const size = '25px'

	// Context
	const { isAuth } = useContext(UserContext)
 	const { theme } = useContext(ThemeContext) 	

	// Language hook
 	const words = useGetWords({ component: 'search_bar' })

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
				<Input {...search} onFocus={()=>setFocus(true)} onKeyUp={(event)=>event.keyCode === 13 ? handleSendComment() : false} />
				{fixed === 'bottom'  && 
					<Button onClick={handleSendComment} >
						<AiOutlineSend size={size}/>
					</Button>
				}
			</Form>
		</SearchContainer>
	)
}

export default SearchBar