import Note from './note'
import React, {Component} from 'react'

class NotesList extends Component{
	render(){
		let {onDelete,onEdit,noteEdit,notes,setCompleted} = this.props;		 		 
		if(!notes.length){
			return(
				<h3>Nothing found :(</h3>
			)
		}
		console.log(notes);

		return (
				<div className="list-group">
					{notes.map(function(note){
						return (<Note 
										key={note.id} 
										note={note}
										noteEdit={noteEdit} 
										onDelete={onDelete.bind(null, note)} 
										setCompleted={setCompleted.bind(null, note)}
										onEdit={onEdit.bind(null,note)}
						/>)
					})}
				</div>
		)
	}
}
NotesList.propTypes = {
	notes:  React.PropTypes.array,
	noteEdit: React.PropTypes.object,
	setCompleted: React.PropTypes.func,
	onDelete: React.PropTypes.func,
	onEdit: React.PropTypes.func,
	setCompleted:React.PropTypes.func,
}
export default NotesList