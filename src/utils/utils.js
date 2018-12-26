export default {
	formateDate(time) {
		if (!time) return '';
		let date = new Date(time);
		let dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
		return dateString;
	}
};