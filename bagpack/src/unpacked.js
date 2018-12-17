
import React, { Component } from 'react';


class TodoList extends Component{

render(){
	return (
		<ul>
		<li>{this.props.currentText}</li>
		</ul>

	);
	}
}



