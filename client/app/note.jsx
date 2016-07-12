import React, {Component} from 'react';
class Note extends Component{

	setCompleted (e) {
		e.preventDefault();
		e.stopPropagation();
		this.props.setCompleted();
	}
	onEdit(e){
		e.preventDefault();
		this.props.onEdit();
	}
	onDelete(e){
		e.preventDefault();
		e.stopPropagation();
		this.props.onDelete()
	}
	render(){
		 let {_id, date,name,text,completed} = this.props.note;
		 let options = {
			  year: 'numeric',
			  month: 'numeric',
			  day: 'numeric',
			};
		 date = new Date(date).toLocaleString("ru", options);
			let itemClass= "list-group-item";
			let editId=this.props.noteEdit.data._id;
			if(_id == editId){
				itemClass +=" active ";
			}
			if(completed){
				itemClass +=" list-group-item-info ";
			}
			return (
				<a href={_id} className={itemClass} onClick={this.onEdit.bind(this)}>
				    <button type="button" className="close" aria-label="Close" onClick={this.onDelete.bind(this)}><span aria-hidden="true">&times;</span></button>
		        <h4 className="list-group-item-heading">{name}</h4>
		        <p className="list-group-item-text">{text}</p>
		        <span className="label label-default">{date}</span>
		        <button type="button" className="btn btn-success pull-right btn-xs" onClick={this.setCompleted.bind(this)}>Set {completed ? 'uncompleted' : 'completed'}</button>
			  </a>
			)
	}
}
Note.propTypes = {
	date: React.PropTypes.string,
	name: React.PropTypes.string,
	text: React.PropTypes.string,
	completed: React.PropTypes.bool,
	onDelete: React.PropTypes.func,
	onEdit: React.PropTypes.func,
	setCompleted:React.PropTypes.func,
	noteEdit: React.PropTypes.object
};
export default Note;