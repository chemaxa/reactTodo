import React from 'react';
import ReactDOM from 'react-dom';
import todoModel from './todoModel';

console.log(todoModel.todoList)
class TestInput extends React.Component{
	
  onBtnClickHandler(){
    console.log(this.refs);
    console.log(ReactDOM.findDOMNode(this.refs.myTestInput).value);
  };

  render(){
    return (
      <div>
        <input
          className='test-input'
          defaultValue=''
          placeholder='введите значение'
          ref='myTestInput'
        />
        <button onClick={this.onBtnClickHandler.bind(this)} ref='alert_button'>Показать значение</button>
      </div>
    );
  }
};

class App extends React.Component{
  render(){
    return ( 
			<div className="page__wrapper">
				<div className="container">
			  	<div className="row">
			    	<div className="col-md-12">
							<TestInput /> 
			      </div>
			    </div>
			  </div>
			</div>
    );
  }
}
  

export default App