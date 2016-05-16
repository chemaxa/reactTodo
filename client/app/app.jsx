import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import noteModel from './notemodel';
import NoteForm from './noteform';
import NotesList from './noteslist';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			notes:noteModel.noteList,
			noteEdit:{
				id: '',
				data: {
					id: '',
					name: '',
					date: '',
					text: '',
					completed: false
				},
				action: 'CREATE'
			},
			sorting:{
				isSorted: false,
				param: '',
			} 
		};
		this.sorting = this.sorting.bind(this);
		this.setCompleted=this.setCompleted.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onUpdate=this.onUpdate.bind(this);
		this.onDelete=this.onDelete.bind(this);
		this.onAdd=this.onAdd.bind(this);
		this.render=this.render.bind(this);
	}

	sorting (param){
		console.log(param);
		let notes = this.state.notes.slice();

		notes.sort((item1, item2)=>{
			console.log(item1[param],item2[param])
			if(item1[param]===item2[param]) return 0;
			return item1[param]>item2[param] ? 1 : -1;
		});
		console.log('Initial: ');
		this.state.notes.forEach((item)=>console.log(item));
		console.log('Sorted: ');
		notes.forEach((item)=>console.log(item));
		/*this.state({
			sorting: {
				isSorted: !isSorted,
				param: arg
			}
		})*/

	}
	
	setCompleted (note) {
		note.completed=!note.completed;
		let notes = this.state.notes.map((item)=>{
			if(item.id == note.id){
				return {...note}
			}
			return item;
		});
		this.setState({notes: notes})
	}

	onEdit(note){
		this.setState({
			noteEdit: {
				id: note.id,
				className: "list-group-item active",
				data: note,
				action: 'EDIT'
			}
		});

	}

	onUpdate(note){
		let notes = this.state.notes.map((item)=>{
			if(item.id == note.id){
				return {...note}
			}
			return item;
		});
		this.setState({
			notes: notes,
			noteEdit:{
	    	id: note.id,
	    	data: note,
	    	action: 'UPDATE'
	    }
	  });
		console.log('Note Updated: ',note)
	}
	
	onDelete(note){
    let notes = this.state.notes.filter(function(item) {
        return item.id !== note.id;
    });
		
    this.setState({ 
    	notes: notes,
    },
	    ()=>{
	    	this.setState({
	    		noteEdit:{
		    		id: note.id,
		    		action: 'DELETE'
		    	}
		    })
	    }
    );

     

	}
	
	onAdd (note){
		note.id=Date.now().toString();
		let notes = this.state.notes.slice();
		notes.push(note);
		this.setState({notes: notes})
		console.log('Note Added: ',note)
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<NoteForm 
							onAdd={this.onAdd}
							onUpdate={this.onUpdate}
							onEdit={this.onEdit}
							noteEdit={this.state.noteEdit}
						/>
					</div>
					<div className="col-md-6">
						<NotesList 
							notes={this.state.notes} 
							onEdit={this.onEdit} 
							setCompleted={this.setCompleted} 
							onDelete={this.onDelete} 
							noteEdit={this.state.noteEdit}
							sorting={this.sorting}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App