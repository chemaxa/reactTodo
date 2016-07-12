let apiUrl= 'http://localhost:3000';
const API={
	ADD_ITEM: apiUrl+'/api/todos',
	EDIT_ITEM: apiUrl+'/api/todos',
	GET_ALL: apiUrl+'/api/todos',
	DELETE_ITEM: apiUrl+'/api/todos',
	CLEAR_COMPLETED: apiUrl+'/api/todos/clear'
};
export default API;