const noteModel = (function() {
		
		let noteList = [{
				id: 2,
				name: 'b',
				text: 'Start with React',
				date: '2016-03-14',
				completed: true
		}, {
				id: 1,
				name: 'a',
				text: 'Lets go controller with React',
				date: '2015-10-04',
				completed: false
		},
		{
				id: 4,
				name: 'd',
				text: 'Lets go controller with React',
				date: '2016-08-24',
				completed: false
		}, {
				id: 3,
				name: 'c',
				text: 'Testing with React',
				date: '2016-08-04',
				completed: true
		}];

		let getNote = function(id){
				return noteList[id];
		}

		return {
				noteList: noteList,
				getNote: getNote
		};
})();

export default noteModel;