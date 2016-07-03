const xhr = new XMLHttpRequest();
const restHelper = (method, url, data) =>{
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
export default restHelper;