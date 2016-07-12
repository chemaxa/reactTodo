import React, {Component, PropTypes} from 'react';
import NoteForm from './noteform';
import NotesList from './noteslist';
import Controls from './controls';
import noteModel from './notemodel';

class Dashboard extends Component{
		constructor(props){
		super(props);
		console.log('Dashboard props: ',props);
		
		this.state={
			notes:[],
			noteEdit: {
				data: {
					_id: '',
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
		this.clearCompleted=this.clearCompleted.bind(this);
	}

	componentDidMount(){
		noteModel
			.getList()
			.then((data)=>{
				let notes = JSON.parse(data),
								noteEdit = {
									data: {
										_id: '',
										name: '',
										date: '',
										text: '',
										completed: false
									},
									action: 'CREATE'
								};
			
				if(this.props.params.todoId){
						noteEdit.data=notes.filter((item)=>{
							return item._id===this.props.params.todoId
						})[0];
						
				}
				console.log('NoteEdit: ',noteEdit);
				this.setState({
					noteEdit,
					notes,
					isLoading: false
				})
				this.initialData=notes.slice();
				
			})
			.catch((error)=>{
				console.error(error);
			})
		
			//console.log(this.props.params.todoId);
	}
	componentWillReceiveProps(nextProps) {
		if(!nextProps.params.todoId){
			this.setState({
				noteEdit: {
					data: {
							_id: '',
							name: '',
							date: '',
							text: '',
							completed: false
						},
						action: 'CREATE'
					}
			});
		}
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

	onEdit(note){
		this.setState({
			noteEdit: {
				data: note,
				action: 'EDIT'
			}
		});
 	this.context.router.push(`/dashboard/${note._id}`)
	}
	
	clearCompleted(){
		let completed = this.state.notes.filter(item=>item.completed);
		noteModel
			.clearCompleted(completed)
			.then((data)=>{
				let notes = JSON.parse(data);
				this.setState({notes: notes});
				this.initialData=notes;
				console.log('Response: ', notes);
			})
			.catch((error)=>{
				console.error(error);
			});

		console.dir(completed);
	}

	setCompleted (note) {
		note.completed=!note.completed;
		noteModel
			.updateNote(note)
			.then((data)=>{
				let notes = JSON.parse(data);
				this.setState({notes})
				this.initialData=notes.slice();
			})
			.catch((error)=>{
				console.error(error);
			});
	}

	onUpdate(note){
		noteModel
			.updateNote(note)
			.then((data)=>{
				let notes = JSON.parse(data);
				this.setState({
					notes,
					noteEdit:{
			  	data: note,
			  	action: 'UPDATE'
			  }
			 });
			 this.initialData=notes;
			})
			.catch((error)=>{
				console.error(error);
			});
	}

	onDelete(note){
  noteModel
			.deleteNote(note._id)
			.then((data)=>{
				let notes = JSON.parse(data);
				this.setState({ 
			 	notes: notes
			 });
			 this.initialData=notes;
			})
			.catch((error)=>{
				console.error(error);
			});
	}
	
	onAdd (note){
		noteModel
		 .createNote(note)
			.then((data)=>{
				let notes = JSON.parse(data);
				this.setState({notes: notes});
				this.initialData=notes;
			})
			.catch((error)=>{
				console.error(error);
			});
		this.onSearch('');
	}

	clearForm(){
		this.setState({
			noteEdit:{
				data:{
					_id: '',
					name: '',
					date: '',
					text: '',
					completed: false	
				},
				action: 'CREATE'
			}
		})
		this.context.router.push('/dashboard')
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
							clearCompleted={this.clearCompleted}
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


Dashboard.contextTypes = {
  router: PropTypes.object.isRequired
}
export default Dashboard