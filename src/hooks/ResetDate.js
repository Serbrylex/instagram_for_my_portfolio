
const ResetDate = ({ created, language }) => {

	const time = new Date();
	let messageTime = ''

	const year = parseInt(time.getFullYear())
	const month = parseInt(time.getMonth() + 1)
	const day = parseInt(time.getDate())
	const hour = parseInt(time.getHours())
	const minute = parseInt(time.getMinutes())		


	// 2021-05-16 04:24:29.644404+00:00
	const ano = parseInt(created.slice(0, 4))
	const mes = parseInt(created.slice(5, 7))
	const dia = parseInt(created.slice(8, 10))
	const hora = parseInt(created.slice(11, 13))
	const minuto = parseInt(created.slice(14, 16))			

	let years_words = 'years ago'
	let year_words = 'year ago'
	let months_words = 'months ago'
	let month_words = 'month ago'
	let days_words = 'days ago'
	let day_words = 'day ago'	
	let hours_words = 'hours ago'
	let hour_words = 'hour ago'
	let minutes_words = 'minutes ago'
	let minute_words = 'minute ago'

	let aMoment = 'a moment'

	let firstWord = ''
	if (language === 'es') {
		firstWord = 'Hace '

		years_words = 'años'
		year_words = 'año'
		months_words = 'meses'
		month_words = 'mes'
		days_words = 'días'
		day_words = 'día'
		hours_words = 'horas'
		hour_words = 'hora'
		minutes_words = 'minutos'
		minute_words = 'minuto'

		aMoment = 'un momento'
	}

	if (year > ano) {
		if (year - ano === 1) {
			messageTime = `${firstWord}${year - ano} ${year_words}`
		} else {
			messageTime = `${firstWord}${year - ano} ${years_words}`
		}
	} else if (month > mes) {
		if (month - mes === 1) {
			messageTime = `${firstWord}${month - mes} ${month_words}`
		} else {
			messageTime = `${firstWord}${month - mes} ${months_words}`
		}
	} else if (day > dia) {
		if (day - dia === 1) {
			messageTime = `${firstWord}${day - dia} ${day_words}`
		} else {
			messageTime = `${firstWord}${day - dia} ${days_words}`
		}
	} else if (hour > hora) {		
		if (hour - hora === 1) {
			messageTime = `${firstWord}${hour - hora} ${hour_words}`
		} else {
			messageTime = `${firstWord}${hour - hora} ${hours_words}`
		}
	} else if (minute > minuto) {		
		if (minute - minuto === 1) {
			messageTime = `${firstWord}${minute - minuto} ${minute_words}`
		} else {
			messageTime = `${firstWord}${minute - minuto} ${minutes_words}`
		}
	} else {
		messageTime = `${firstWord} ${aMoment}`
	}			

	return messageTime
}


export default ResetDate