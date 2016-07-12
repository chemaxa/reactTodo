import API from './apiurls'
import utils from './utils'

const noteModel = (function() {
	
		let getList = ()=>{
			return utils.restHelper('GET', API.GET_ALL)
		};

		let readNote = (id)=>{
			return utils.restHelper('GET', API.GET_ALL+'/'+id)
		};

		let createNote=(note)=>{
			return utils.restHelper('POST',API.ADD_ITEM,note);
		}

		let deleteNote=(id)=>{
			return utils.restHelper('DELETE',API.DELETE_ITEM+'/'+id);
		}

		let updateNote=(note)=>{
			return utils.restHelper('PUT',API.EDIT_ITEM+'/'+note._id,note);
		}

		let clearCompleted=(notesArray)=>{
			return utils.restHelper('POST',API.CLEAR_COMPLETED,notesArray);
		}		

		return {
				createNote,
				deleteNote,
				updateNote,
				getList,
				readNote,
				clearCompleted
		};
})();

export default noteModel;