import CNST from './constants'
import restHelper from './resthelper'

const noteModel = (function() {
	
	let noteList = [{
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

		let getNotes = ()=>{return restHelper('GET', CNST.GET_ALL)};

		let getNote = (id)=>{return restHelper('GET', CNST.GET_ALL+'/'+id)};

		let addNote=(note)=>{
			console.log(note)
			return restHelper('POST',CNST.ADD_ITEM,note);
		}

		let deleteNote=(id)=>{
			console.log(id)
			return restHelper('DELETE',CNST.DELETE_ITEM+'/'+id);
		}

		let updateNote=(note)=>{
			console.log(note)
			return restHelper('PUT',CNST.EDIT_ITEM+'/'+note.id,note);
		}		
		
		!(function init(){
				getNotes()
				.then((notes)=>{
					console.info(notes)
					noteList=notes;
				})
				.catch((error)=>{
					console.error(error);
				})
		})();

		return {
				addNote,
				deleteNote,
				updateNote,
				getNotes,
				getNote,
				noteList
		};
})();

export default noteModel;