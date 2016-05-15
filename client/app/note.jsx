import React from 'react';
var Note=React.createClass({
	setCompleted: function (e) {
		e.stopPropagation();
		this.props.setCompleted();
	},
	render: function(){
		 	let {id, date,name,text,completed} = this.props.note;
			let {id:editId} = this.props.noteEdit;
			let itemClassDefault = "list-group-item";
			let itemClass=itemClassDefault;
			if(id == editId){
				itemClass +=" active ";
			}
			if(completed){
				itemClass +=" list-group-item-info ";
			}
			return (
				<a href="#" className={itemClass} onClick={this.props.onEdit}>
				    <button type="button" className="close" aria-label="Close" onClick={this.props.onDelete}><span aria-hidden="true">&times;</span></button>
		        <h4 className="list-group-item-heading">{name}</h4>
		        <p className="list-group-item-text">{text}</p>
		        <span className="label label-default">{date}</span>
		        <button type="button" className="btn btn-success pull-right btn-xs" onClick={this.setCompleted}>Set {completed ? 'uncompleted' : 'completed'}</button>
			  </a>
			)
	}
});

export default Note;