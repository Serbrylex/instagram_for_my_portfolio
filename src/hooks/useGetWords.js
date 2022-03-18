// React
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Translations
import espanol from "../assets/language/es/translation.json"
import english from "../assets/language/en/translation.json"

export const useGetWords = ({ container = '', component = '' }) => {
	const language = useSelector(store => store.preference.language)
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