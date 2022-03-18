// React
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

// Assets
import {
	SearchContainer, Form, Input, Close, ImageProfile, Button
} from './style'

import { CgSearch, CgArrowLeft } from 'react-icons/cg'
import { AiOutlineSend } from 'react-icons/ai'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const SearchBar = ({ search, focus = false, setFocus = (some) => {}, fixed, handleSendComment = () => {} }) => { 
	 
	const size = '25px'	

	// Context
	const user = useSelector(store => store.user)
 	const { theme, url } = useSelector(store => store.preference)

	// Language hook
 	const words = useGetWords({ component: 'search_bar' })

	return(
		<SearchContainer fixed={fixed}>
			<Form> 
				{focus &&
					<Close onClick={()=> setFocus(false)}>
						<CgArrowLeft size={size}/>
					</Close> 
				}
				{fixed === 'bottom' &&					
					<ImageProfile src={`${url}${user.user.profile.picture}`} /> 
				}
				<Input {...search} onFocus={()=>setFocus(true)} onKeyUp={(event)=>event.keyCode === 13 ? handleSendComment() : false} theme={theme} />
				{fixed === 'bottom' ?
					<Button onClick={handleSendComment}>
						<AiOutlineSend size={size} color={theme === 'light' ? 'black' : 'white'}/>
					</Button>		
					:
					<Button>
						<CgSearch size={size} color={theme === 'light' ? 'black' : 'white'}/>
					</Button>
				}
			</Form>
		</SearchContainer>
	)
}

export default SearchBar