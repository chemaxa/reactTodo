import CNST from './constants'
import utils from './utils'

const noteModel = (function() {
	
	/*let noteList = [{
				name: 'bac',
				text: 'Start with React',
				date: '2016-03-14',
				completed: true
		}, {
				id: 1,
				name: 'abg',
				text: 'Lets go controller with React',
				date: '2015-10-04',
				completed: false
		},
		{
				id: 3,
				name: 'duy',
				text: 'Lets go controller with React',
				date: '2016-03-24',
				completed: false
		}, {
				id: 4,
				name: 'cop',
				text: 'Testing with React',
				date: '2016-08-04',
				completed: true
		}];
		let noteList=[];
		*/

		let getNotes = ()=>{return utils.restHelper('GET', CNST.GET_ALL)};

		let getNote = (id)=>{return utils.restHelper('GET', CNST.GET_ALL+'/'+id)};

		let addNote=(note)=>{
			console.log(note)
			return utils.restHelper('POST',CNST.ADD_ITEM,note);
		}

		let deleteNote=(id)=>{
			console.log(id)
			return utils.restHelper('DELETE',CNST.DELETE_ITEM+'/'+id);
		}

		let updateNote=(note)=>{
			console.log(note)
			return utils.restHelper('PUT',CNST.EDIT_ITEM+'/'+note.id,note);
		}		
		/*!(function init(){
				getNotes()
				.then((notes)=>{
					console.info(notes)
					noteList=notes;
				})
				.catch((error)=>{
					console.error(error);
				})
		})();*/
		return {
				addNote,
				deleteNote,
				updateNote,
				getNotes,
				getNote
		};
})();

export default noteModel;