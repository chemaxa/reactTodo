import React from 'react';
import ReactDOM from 'react-dom';
import todoModel from './todomodel';
import NoteForm from './noteform';
import NotesList from './noteslist';

var App=React.createClass({
	getInitialState: function(){
		return {
			notes:[
				{
					id: Date.now().toString(),
					name: 'Todo 1',
					date: "2016-05-14",
					text: 'Some text',
					completed: false
				},
				{
					id: (Date.now()+1).toString(),
					name: 'Todo 2',
					date: "2016-03-12",
					text: 'Other text',
					completed: false
				},
			],
			noteEdit:{
				id: '',
				data: {
					id: '',
					name: '',
					date: '',
					text: '',
					completed: false
				},
				action: ''
			} 
		};
	},
	
	setCompleted: function (note) {
		note.completed=!note.completed;
		let notes = this.state.notes.map((item)=>{
			if(item.id == note.id){
				return {...note}
			}
			return item;
		});
		this.setState({notes: notes})
	},

	onEdit: function(note){
		this.setState({
			noteEdit: {
				id: note.id,
				className: "list-group-item active",
				data: note,
				action: 'EDIT'
			}
		});
	},

	onUpdate: function(note){
		let notes = this.state.notes.map((item)=>{
			if(item.id == note.id){
				return {...note}
			}
			return item;
		});
		this.setState({notes: notes})
		console.log('Note Updated: ',note)
	},
	
	onDelete: function(note){
    let notes = this.state.notes.filter(function(item) {
        return item.id !== note.id;
    });
		
    this.setState({ 
    	notes: notes,
    	noteEdit: {
    		data: ''
    	}
    });
  	
	},
	
	onAdd: function(note){
		note.id=Date.now().toString();
		let notes = this.state.notes.slice();
		notes.push(note);
		this.setState({notes: notes})
		console.log('Note Added: ',note)
	},

	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<NoteForm onAdd={this.onAdd} onUpdate={this.onUpdate} onEdit={this.onEdit} noteEdit={this.state.noteEdit}/>
					</div>
					<div className="col-md-6">
						<NotesList notes={this.state.notes} onEdit={this.onEdit} setCompleted={this.setCompleted} onDelete={this.onDelete} noteEdit={this.state.noteEdit}/>
					</div>
				</div>
			</div>
		)
	}
})

export default App