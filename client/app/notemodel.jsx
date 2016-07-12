import CNST from './constants'
import utils from './utils'

const noteModel = (function() {
	
		let getList = ()=>{
			return utils.restHelper('GET', CNST.GET_ALL)
		};

		let readNote = (id)=>{
			return utils.restHelper('GET', CNST.GET_ALL+'/'+id)
		};

		let createNote=(note)=>{
			return utils.restHelper('POST',CNST.ADD_ITEM,note);
		}

		let deleteNote=(id)=>{
			return utils.restHelper('DELETE',CNST.DELETE_ITEM+'/'+id);
		}

		let updateNote=(note)=>{
			return utils.restHelper('PUT',CNST.EDIT_ITEM+'/'+note._id,note);
		}		

		return {
				createNote,
				deleteNote,
				updateNote,
				getList,
				readNote
		};
})();

export default noteModel;