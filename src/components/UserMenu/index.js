// React
import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Context
import UserContext from '../../context/users'
import ThemeContext from '../../context/theme' 
import LanguageContext from '../../context/language' 

// Assets
import {
	UserMenuContainer, LayoutUserMenu, SectionMenuContainer, GoBack, GoBackButton, 
	SectionMenu, TitleSection, RadioButtonContainer, RadioLabelContainer, 
	ListContainer, ButtonLanguage, LanguageList, EachLanguege, 
	CloseSession, Description
} from './style'
 
import { MdKeyboardArrowDown } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi'

// Hooks
import { useGetWords } from '../../hooks/useGetWords'


const UserMenu = ({ setShowUserMenu }) => {

 	// Just variables
 	const size = '22px'
 	const [showLanguageList, setShowLanguageList] = useState(false)

 	// Context
 	const { isAuth, removeAuth } = useContext(UserContext) 	 	
 	const { theme, setTheTheme } = useContext(ThemeContext) 	

 	const { language, setTheLanguage } = useContext(LanguageContext)

 	// Language hook
 	const words = useGetWords({ component: 'user_menu' })


 	// Router history
 	const history = useHistory() 	

 	const handleSetLanguage = (language) => {
 		setShowLanguageList(false)
 		setTheLanguage({ language }) 		
 	}

 	const handleSetTheme = (e) => {
		let themeSelected = e.target.id

		if (themeSelected == 'dark' || themeSelected == 'light') {
			setTheTheme({ newTheme: themeSelected })
		}
 	}

 	const handleCloseSession = () => {
 		removeAuth()
 		history.push('/login')
 	}

	return(	
		<UserMenuContainer>
			<LayoutUserMenu theme={theme}>
				<GoBack>
					<GoBackButton onClick={()=>setShowUserMenu(false)}><GiHamburgerMenu size={size} color={theme === 'light' ? 'black' : 'white'}/></GoBackButton>
				</GoBack>				
				<SectionMenuContainer>
					<SectionMenu>				
						<TitleSection>{words?.theme}</TitleSection>
						<RadioButtonContainer>
							<RadioLabelContainer>
								<Description>{words?.dark}</Description><input type="radio" id="dark" name="theme" value="Dark" onChange={(e) => handleSetTheme(e)} checked={theme === 'dark' ? true : false}/>
							</RadioLabelContainer>
							<RadioLabelContainer>
								<Description>{words?.light}</Description><input type="radio" id="light" name="theme" value="Light" onChange={(e) => handleSetTheme(e)} checked={theme !== 'dark' ? true : false} />
							</RadioLabelContainer>
						</RadioButtonContainer>				
					</SectionMenu>
					<SectionMenu>
						<TitleSection>{words?.language}</TitleSection>
						<ListContainer>
							<ButtonLanguage onClick={()=>setShowLanguageList(!showLanguageList)} theme={theme}>{language === 'es' ? 'Español' : 'English'}<MdKeyboardArrowDown /></ButtonLanguage>
							{showLanguageList &&
								<LanguageList theme={theme} >
									<EachLanguege onClick={()=>handleSetLanguage('es')}>Español</EachLanguege>
									<EachLanguege onClick={()=>handleSetLanguage('en')}>English</EachLanguege>
								</LanguageList>
							}
						</ListContainer>
					</SectionMenu>
					<SectionMenu>
						<CloseSession onClick={()=>handleCloseSession()} theme={theme}>
							{words?.close_session}
						</CloseSession>
					</SectionMenu>
				</SectionMenuContainer>
			</LayoutUserMenu>
		</UserMenuContainer>
	)
}

export default UserMenu