import React, {Component} from 'react'

class Controls extends Component{
	getSortByNameClassName(){
		if(this.props.sortState.param=='name'){
			return this.props.sortState.asc ?  "glyphicon glyphicon-sort-by-alphabet-alt" : "glyphicon glyphicon-sort-by-alphabet"
		}
	}
	getSortByDateClassName(){
		if(this.props.sortState.param=='date'){
			return this.props.sortState.asc ? "glyphicon glyphicon-sort-by-order-alt": "glyphicon glyphicon-sort-by-order"  
		}
	}
	getSortByStatusClassName(){
		if(this.props.sortState.param=='completed'){
			return this.props.sortState.asc ? "glyphicon glyphicon-sort-by-attributes-alt": "glyphicon glyphicon-sort-by-attributes"  
		}
	}
	
	render(){
		let sorting=this.props.sorting;
		return(
			<div className="panel panel-default">
					<div className="panel-body">
						<button type="button" className="btn btn-info" onClick={()=>sorting('name')}>
						 <span className={this.getSortByNameClassName()} aria-hidden="true"></span>
							Sort by Name
						</button>
						&nbsp;
						<button type="button" className="btn btn-info" onClick={()=>sorting('date')}>
						 <span className={this.getSortByDateClassName()} aria-hidden="true"></span>
							Sort by Date
						</button>
						&nbsp;
						<button type="button" className="btn btn-info" onClick={()=>sorting('completed')}>
						 <span className={this.getSortByStatusClassName()} aria-hidden="true"></span>
							Sort by status
						</button>
						
					</div>
					<form className="input-group panel-body" onSubmit={this.onSubmit}>
				      <input type="text" value={this.props.term} onChange={this.props.onSearch} className="form-control" placeholder="Search for..."/>
				      <span className="input-group-btn">
				        <button className="btn btn-default" type="submit">Go!</button>
				      </span>
				  </form>
				</div>
			)
	}
}
export default Controls