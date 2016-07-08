const xhr = new XMLHttpRequest();
const utils={
	convertDate: (dateStr) =>{
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
	},
	restHelper : (method, url, data) =>{
  return new Promise((success, error) =>{
    xhr.open(method, url, true);
    xhr.onload = function() {
      if (this.status == 200) {
        success(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        error(error);
      }
    };
    xhr.onerror = function() {
      error(new Error("Network Error"));
    };
    
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
  });
	}
};

export default utils