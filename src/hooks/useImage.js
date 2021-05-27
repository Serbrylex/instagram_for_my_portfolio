import { useState } from 'react'

import imageTest from '../images/agujero-del-tiempo.jpg'

export const useImage = (defaultImage = imageTest) => {
	const [image, setImage] = useState([defaultImage])
	const [fileImage, setFileImage] = useState([])

	return {
		image,
		setImage,
		fileImage, 
		setFileImage
	}
}