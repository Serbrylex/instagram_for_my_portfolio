
const ResetDate = ({ created }) => {
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

	if (year > ano) {
		messageTime = `Hace ${year - ano} años`
	} else if (month > mes) {
		messageTime = `Hace ${month - mes} meses`
	} else if (day > dia) {
		messageTime = `Hace ${day - dia} días`
	} else if (hour > hora) {
		messageTime = `Hace ${hour - hora} horas`
	} else if (minute > minuto) {
		messageTime = `Hace ${minute - minuto} minutos`
	} else {
		messageTime = `Hace un momento`
	}			

	return messageTime
}


export default ResetDate