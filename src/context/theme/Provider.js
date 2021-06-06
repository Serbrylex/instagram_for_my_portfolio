import { useState } from 'react'

import ThemeContext from './index'
import apiCall from '../../api/apiCall'


const ThemeProvider = ({ children }) => {

	// Light or dark
	const [theme, setTheme] = useState(() => {		
		const cookie = window.sessionStorage.getItem('theme')
		if (cookie === undefined || cookie === null){
			window.sessionStorage.setItem('theme', 'light')
			return 'light'
		} else {
			return cookie
		}
	}) 

	const value = {
		theme,		
		setTheTheme: ({ newTheme }) => {
			setTheme(newTheme)
			window.sessionStorage.setItem('theme', newTheme)
		}
	}

	return (
		<ThemeContext.Provider value={value} >
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider