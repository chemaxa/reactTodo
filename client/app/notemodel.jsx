import {Constants as CNST} from './constants'
const xhr = new XMLHttpRequest();
const noteModel = (function() {
		
		let noteList = [{
				id: 2,
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

		
		let addNote=function(note){
			return new Promise(function(success, error) {
				xhr.open('POST', CNST.API_POST_URL, true);
				xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
				xhr.send(JSON.stringify(note));
				xhr.onload=success;
				xhr.onerror=error;
			})
		}
		let getNotes=function(){
			return new Promise(function(success, error) {
				xhr.open('GET', CNST.API_GET_ALL_URL, true);
				xhr.send();
				xhr.onload=success;
				xhr.onerror=error;
			})
		}
		
		return {
				addNote: addNote,
				getNotes: getNotes,
				noteList: noteList
		};
})();

export default noteModel;