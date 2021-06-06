// React
import { useState } from 'react'

import LanguageContext from './index' 


const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => {		
		const cookie = window.sessionStorage.getItem('language')
		if (cookie === undefined || cookie === null){
			return navigator.language || navigator.userLanguage
		} else {
			return cookie
		}
	}) 	

	const value = {
		language,			
		setTheLanguage: ({ language }) => {
			window.sessionStorage.setItem('language', language)
			setLanguage(language)
		}
	}

	return (
		<LanguageContext.Provider value={value} >
			{children}
		</LanguageContext.Provider>
	)
}

export default LanguageProvider