import React, {Component} from 'react';
import utils from './utils'

class NoteForm extends Component{
	constructor (props) {
		super(props);
		this.state = this.props.noteEdit;
		this.noteChange=this.noteChange.bind(this);
		this.componentWillReceiveProps=this.componentWillReceiveProps.bind(this);
		this.onSubmit=this.onSubmit.bind(this);
		
		this.clearForm=this.clearForm.bind(this);
		this.render=this.render.bind(this);
		
	}

	noteChange(e) {
		let self = this;
		this.setState({
				data:{
					id : this.state.data.id || '',
					name : e.target.name == 'name' ? e.target.value : self.state.data.name,
					date :e.target.name == 'date' ? e.target.value : this.state.data.date,
					text :e.target.name == 'text' ? e.target.value : this.state.data.text,
					completed :e.target.name == 'completed' ? e.target.checked : this.state.data.completed
				}
		});
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps)
		if(nextProps.noteEdit.action=="DELETE"){
			this.clearForm()
			return
		}
		let {date,id,text,completed,name} = nextProps.noteEdit.data;
		
		let {YYYY,MM,DD}=utils.convertDate(date);
  	this.setState({
				data:{
					date:`${YYYY}-${MM}-${DD}`,
					id,
					text,
					completed,
					name
				},
				action: 'EDIT'
		});
  }

	onSubmit  (e) {
		e.preventDefault();
		let note={
			id: e.target.elements.id.value,
			name: e.target.elements.name.value,
			date: e.target.elements.date.value,
			text: e.target.elements.text.value,
			completed: e.target.elements.completed.checked
		}
		if(note.id)
			this.props.onUpdate(note)
		else
			this.props.onAdd(note)
	}

	clearForm () {
		this.setState({
			data:{
				id: '',
				name: '',
				date: '',
				text: '',
				completed: false	
			},
			action: 'CREATE'
		})
	}
	
	render(){

		let {id,name,text,date,completed,action} = this.state.data;
		return(
			<form onSubmit={this.onSubmit}>
				<input type="hidden" name="id" value={id}/>
				<div className="form-group">
					<label>Имя</label>
				  	<input type="text" required value={name} onChange={this.noteChange} name="name" className="form-control" placeholder="Имя"/>
				  	
				</div>
				<div className="form-group">
					<label>Дата</label>
				  	<input type="date" required value={date} onChange={this.noteChange} name="date" className="form-control" placeholder="Дата"/>
				</div>
				<div className="form-group">
					<label>Текст</label>
						<textarea cols="30" rows="10" required value={text} onChange={this.noteChange} name="text" className="form-control" placeholder="Описание" />
				</div>
				<div className="checkbox">
			    <label>
			      <input type="checkbox" checked={completed} onChange={this.noteChange} name="completed"/> Completed
			    </label>
			  </div>
					<button type="submit" className="btn btn-primary">{action==='CREATE' ? 'Create' : 'Update' }</button>&nbsp;
					<button type="reset" onClick={this.clearForm} className="btn btn-warning">Reset form</button>
			</form>
		)
	}
}

export default NoteForm