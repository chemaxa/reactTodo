import React, {Component} from 'react';
import utils from './utils'

class NoteForm extends Component{
	constructor (props) {
		super(props);
		this.state = this.props.noteEdit;
	}

	noteChange(e) {
		this.setState({
			noteEdit:{
				data:{
					id : this.state.data.id || '',
					name : e.target.name == 'name' ? e.target.value : this.state.data.name,
					date :e.target.name == 'date' ? e.target.value : this.state.data.date,
					text :e.target.name == 'text' ? e.target.value : this.state.data.text,
					completed :e.target.name == 'completed' ? e.target.checked : this.state.data.completed
				}
			}
		}
		);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.noteEdit.action=='DELETE'){
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
	stateButtonName () {
		if(this.state.action==='CREATE')
			return 'Create'
		if(this.state.action==='EDIT')
			return 'Update'
	}
	render(){
		return(
			<form onSubmit={this.onSubmit}>
				<input type="hidden" name="id" value={this.state.data.id}/>
				<div className="form-group">
					<label>Имя</label>
				  	<input type="text" required value={this.state.data.name} onChange={this.noteChange} name="name" className="form-control" placeholder="Имя"/>
				  	
				</div>
				<div className="form-group">
					<label>Дата</label>
				  	<input type="date" required value={this.state.data.date} onChange={this.noteChange} name="date" className="form-control" placeholder="Дата"/>
				</div>
				<div className="form-group">
					<label>Текст</label>
						<textarea cols="30" rows="10" required value={this.state.data.text} onChange={this.noteChange} name="text" className="form-control" placeholder="Описание" />
				</div>
				<div className="checkbox">
			    <label>
			      <input type="checkbox" checked={this.state.data.completed} onChange={this.noteChange} name="completed"/> Completed
			    </label>
			  </div>
					<button type="submit" className="btn btn-primary">{this.stateButtonName()}</button>&nbsp;
					<button type="reset" onClick={this.clearForm} className="btn btn-warning">Reset form</button>
			</form>
		)
	}
}

export default NoteForm