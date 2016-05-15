import Note from './note'
import React from 'react';
var NotesList = React.createClass({
	render: function(){
		let onNoteDelete = this.props.onDelete,
		 		onNoteEdit = this.props.onEdit,
		 		noteEdit = this.props.noteEdit,
		 		setCompleted = this.props.setCompleted;
		return (
			<div className="list-group">
				{this.props.notes.map(function(note){
					return <Note key={note.id} note={note} noteEdit={noteEdit} onDelete={onNoteDelete.bind(null, note)} setCompleted={setCompleted.bind(null, note)} onEdit={onNoteEdit.bind(null,note)}/>
				})}
			  
			</div>
		)
	}
});
export default NotesList