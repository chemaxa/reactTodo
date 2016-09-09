import utils from './utils'
import CONFIG from './config'

let Auth = ()=>{

	let checkPermissions = (credentials)=>{
		console.log(credentials);
		return utils.restHelper('POST',CONFIG.AUTHHOST,credentials);
	}
 	

	
	return{
		checkPermissions
	}
}
export default Auth();