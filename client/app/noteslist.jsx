import Note from './note'
import React, {Component} from 'react'

class NotesList extends Component{
	render(){
		let {onDelete,onEdit,noteEdit,notes,setCompleted,isLoading} = this.props;		 		 
		if(!notes.length && !isLoading){
			return(
				<h3>Nothing found :(</h3>
			)
		}
		if(isLoading){
			return(
				<div className="text-center">
					<img src="/assets/img/preload.gif" alt="preloader"/>
				</div>
			)
		}
		

		return (
				<div className="list-group">
					{
						notes.map((note)=>{
							return (
								<Note 
										key={note._id} 
										note={note}
										noteEdit={noteEdit} 
										onDelete={onDelete.bind(null, note)} 
										setCompleted={setCompleted.bind(null, note)}
										onEdit={onEdit.bind(null,note)}
								/>
							)
						}
						)
					}
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