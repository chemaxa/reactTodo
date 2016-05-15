import React from 'react';
import utils from './utils'
var NoteForm = React.createClass({
	getInitialState: function () {
		return this.props.noteEdit.data;
	},
	noteChange: function (e) {
		this.setState({
			id : this.state.id || '',
			name : e.target.name == "name" ? e.target.value : this.state.name,
			date :e.target.name == "date" ? e.target.value : this.state.date,
			text :e.target.name == "text" ? e.target.value : this.state.text,
			completed :e.target.name == "completed" ? e.target.checked : this.state.completed
		});
	},

	componentWillReceiveProps: function(nextProps) {
		let {date,id,text,completed,name} = nextProps.noteEdit.data;
		let {YYYY,MM,DD}=utils.convertDate(date);
  	this.setState({date:`${YYYY}-${MM}-${DD}`,id,text,completed,name});
	},

	onSubmit: function (e) {
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
	},

	clearForm: function () {
		this.setState({
			id: '',
			name: '',
			date: '',
			text: '',
			completed: false	
		})
	},
	render: function(){
		console.log(this.props.noteEdit);
		return(
			<form onSubmit={this.onSubmit}>
				<input type="hidden" name="id" value={this.state.id}/>
				<div className="form-group">
					<label>Имя</label>
				  	<input type="text" required value={this.state.name} onChange={this.noteChange} name="name" className="form-control" placeholder="Имя"/>
				  	
				</div>
				<div className="form-group">
					<label>Дата</label>
				  	<input type="date" required value={this.state.date} onChange={this.noteChange} name="date" className="form-control" placeholder="Дата"/>
				</div>
				<div className="form-group">
					<label>Текст</label>
						<textarea cols="30" rows="10" required value={this.state.text} onChange={this.noteChange} name="text" className="form-control" placeholder="Описание" />
				</div>
				<div className="checkbox">
			    <label>
			      <input type="checkbox" checked={this.state.completed} onChange={this.noteChange} name="completed"/> Completed
			    </label>
			  </div>
					<button type="submit" className="btn btn-primary">Create</button>&nbsp;
					<button type="reset" onClick={this.clearForm} className="btn btn-warning">Reset form</button>
			</form>
		)
	}
});

export default NoteForm