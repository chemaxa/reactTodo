var utils={
	convertDate:function (dateStr) {
		let YYYY = (new Date(dateStr)).getFullYear();
		let MM = (new Date(dateStr)).getMonth() + 1 ;
		if(MM<10){
			MM='0'+MM;
		}
		let DD = (new Date(dateStr)).getDate();
		if(DD<10){
			DD='0'+DD;
		}
		return {
			YYYY: YYYY,
			MM: MM,
			DD: DD
		}
	}
};

export default utils