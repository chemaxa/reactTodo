import React, {Component} from 'react';
import NoteForm from './noteform';
import NotesList from './noteslist';
import Controls from './controls';
import noteModel from './notemodel';

class Dashboard extends Component{
		constructor(props){
		super(props);
		console.log(props);
	
		this.state={
			notes:[],
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
			messages: {},
			isLoading: true
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
		this.closeAlert=this.closeAlert.bind(this);

	}

	componentDidMount(){
			noteModel.getNotes()
			.then((data)=>{
				console.info(JSON.parse(data));
				this.setState({
					notes:JSON.parse(data),
					isLoading: false
				})
			})
			.catch((error)=>{
				console.error(error);
			})
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

	onSearch(term){
		let notes = this.initialData.slice();
		let filter = notes.filter(item=> ~(item.name.toLowerCase().indexOf(term)))
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
		this.initialData=notes;
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
	  this.initialData=notes;
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
    let notes = this.initialData.filter(item=> item.id !== note.id);
    this.setState({ 
    	notes: notes
    });
    this.initialData=notes;
	}
	
	onAdd (note){
		let notes = this.initialData;
		note.id=Date.now().toString();

		let isExist=notes.some(item => item.id==note.id );

		if(isExist) {
			this.setState({
				messages:{
					isExist: 'This todo is already exist!'
				}
			});
			return
		}
		notes.push(note);
		this.setState({notes: notes.slice()})
		console.log('Note Added: ',note)
		console.log('Notes',notes)
		this.onSearch('');
	}

	closeAlert(){
		this.setState({
			messages:{}
		})
	}
	render(){
		return(
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
						messages={this.state.messages}
						closeAlert={this.closeAlert}
					/>
				</div>
				<div className="col-md-7">
					<NotesList
						isLoading={this.state.isLoading}
						notes={this.state.notes} 
						onEdit={this.onEdit} 
						setCompleted={this.setCompleted} 
						onDelete={this.onDelete} 
						noteEdit={this.state.noteEdit}
					/>
				</div>
			</div>
		)
	}
}

export default Dashboard