// React
import { useState, useEffect, useContext } from 'react'

// Context
import LanguageContext from '../context/language'

// Translations
import espanol from "../assets/language/es/translation.json"
import english from "../assets/language/en/translation.json"

export const useGetWords = ({ container = '', component = '' }) => {
	const { language } = useContext(LanguageContext)
	const [words, setWords] = useState({})

	useEffect(()=>{
		let data = {}

		if (language === 'es') {
			data = espanol
		} else {
			data = english
		}		

		let response = ''
		if (container.length > 0) {
	  		if (data.containers[container]) {
	  			response = data.containers[container]
	  		} else {
	  			response = 'Error xd'
	  		}
			} else if (component.length > 0) {
				if (data.components[component]) {
	  			response = data.components[component]
	  		} else {
	  			response = 'Error xd'
	  		}
		}

		setWords(response)		
	}, [language])

	return words
}