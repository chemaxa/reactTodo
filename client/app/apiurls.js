import CONFIG from './config'

const API={
	ADD_ITEM: CONFIG.APIHOST+'/api/todos',
	EDIT_ITEM: CONFIG.APIHOST+'/api/todos',
	GET_ALL: CONFIG.APIHOST+'/api/todos',
	DELETE_ITEM: CONFIG.APIHOST+'/api/todos',
	CLEAR_COMPLETED: CONFIG.APIHOST+'/api/todos/clear'
};

export default API;