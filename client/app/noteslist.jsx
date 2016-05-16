import Note from './note'
import React, {Component} from 'react'


class NotesList extends Component{
	render(){
		let onNoteDelete = this.props.onDelete,
		 		onNoteEdit = this.props.onEdit,
		 		noteEdit = this.props.noteEdit,
		 		setCompleted = this.props.setCompleted,
		 		sorting=this.props.sorting;
		return (
			<div className="panel">
				<div className="list-group">
					{this.props.notes.map(function(note){
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
				<div className="panel panel-default">
					<div className="panel-body">
						<button type="button" className="btn btn-info" onClick={()=>sorting('name')}>Sort by Name</button>
						&nbsp;
						<button type="button" className="btn btn-info" onClick={()=>sorting('date')}>Sort by Date</button>
					</div>
				</div>
			</div>
		)
	}
}
export default NotesList