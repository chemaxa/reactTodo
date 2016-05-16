import Note from './note'
import React, {Component} from 'react'

class NotesList extends Component{
	render(){
		let onNoteDelete = this.props.onDelete,
		 		onNoteEdit = this.props.onEdit,
		 		noteEdit = this.props.noteEdit,
		 		notes=this.props.notes,
		 		setCompleted = this.props.setCompleted;
		if(!notes.length){
			return(
				<h3>Nothing found :(</h3>
			)
		}
		return (
				<div className="list-group">
					{notes.map(function(note){
						return (<Note 
										key={note.id} 
										note={note}
										noteEdit={noteEdit} 
										onDelete={onNoteDelete.bind(null, note)} 
										setCompleted={setCompleted.bind(null, note)}
										onEdit={onNoteEdit.bind(null,note)}
						/>)
					})}
				</div>
		)
	}
}
export default NotesList