import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import noteModel from './notemodel';
import NoteForm from './noteform';
import NotesList from './noteslist';
import Controls from './controls';

class App extends Component{
	constructor(props){
		super(props);
		this.initialData=noteModel.noteList;
		this.state={
			notes:this.initialData,
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
				param: '',
				asc: false
			},
			term: '',
			mesages: {}
		};
		this.onSort = this.onSort.bind(this);
		this.setCompleted=this.setCompleted.bind(this);
		this.onEdit=this.onEdit.bind(this);
		this.onUpdate=this.onUpdate.bind(this);
		this.onDelete=this.onDelete.bind(this);
		this.onAdd=this.onAdd.bind(this);
		this.render=this.render.bind(this);
		this.clearForm=this.clearForm.bind(this);
		this.onSearch=this.onSearch.bind(this);
	}

	onSort (param){
		let notes = this.state.notes.slice();
		let asc = this.state.sorting.asc;
		let ordr = asc ? 1 : -1;
		notes.sort((item1, item2)=>{
			if(item1[param]===item2[param]) return 0;
			return item1[param]>item2[param] ? ordr*1 : ordr*-1;
		});
		this.setState({
			notes: notes,
			sorting: {
				param: param,
				asc: !asc
			}
		})
	}

	onSearch(e){
		let term = e.target.value;
		console.log(term)
		let notes = this.initialData.slice();
		let filter = notes.filter((item)=>{
			return ~(item.name.toLowerCase().indexOf(term))
		})
		this.setState({
			term: term,
			notes: filter
		})
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

	clearForm(){
		this.setState({
			noteEdit:{
				data:{
					id: '',
					name: '',
					date: '',
					text: '',
					completed: false	
				},
				action: 'CREATE'
			}
		})
	}

	onDelete(note){
    let notes = this.state.notes.filter(function(item) {
        return item.id !== note.id;
    });
		
    this.setState({ 
    	notes: notes,
    	noteEdit:{
	    	action: 'CREATE'
	    }
    });
	}
	
	onAdd (note){
		note.id=Date.now().toString();
		let notes = this.state.notes.slice();
		let isExist=notes.some((item)=>{
			item.id==note.id
		});
		if(isExist) {
			this.setState({messages: {
				isExist: 'This todo is already exist!'
			}})	
			return
		}
		notes.push(note);
		this.setState({notes: notes})
		console.log('Note Added: ',note)
	}

	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<Controls
								term={this.state.term}
								onSearch={this.onSearch}
								notes={this.state.notes}
								sorting={this.onSort}
								sortState={this.state.sorting}
							/>
						<NoteForm 
							onAdd={this.onAdd}
							onUpdate={this.onUpdate}
							onEdit={this.onEdit}
							clearForm={this.clearForm}
							noteEdit={this.state.noteEdit}
							notes={this.state.notes}
							messages={this.state.mesages}
						/>
					</div>
					<div className="col-md-7">
						<NotesList 
							notes={this.state.notes} 
							onEdit={this.onEdit} 
							setCompleted={this.setCompleted} 
							onDelete={this.onDelete} 
							noteEdit={this.state.noteEdit}
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default App