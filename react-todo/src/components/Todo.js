import React, { Component } from 'react';
import { addTodo, removeTodo } from './../actions/action'
import { connect } from 'react-redux'

 class Todo extends Component{
	constructor(){
		super();
		this.state = {
			value: ""
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("check1")
		this.props.addTodo(this.state.value)
	}

	listRemove = (e) => {
		let id = e.target.id;
		this.props.removeTodo(id);
	}

	render(){
		console.log(this.props.allTodos)
		return (
			<div className ="main-contain">
				<form onSubmit={this.handleSubmit}>
					<input required type="text" onChange={this.handleChange} className="input-text" placeholder="Add Todo"/>
					<button className="submit-btn" >Submit</button>
				</form>

				<div>

				{
					this.props.allTodos.map((item, index) => {
						return(
							<div key={index}>
							<h2>{item}</h2>
							<button id={index} onClick={this.listRemove}>Remove</button>
						</div>
							) 
						
					})
				}

				</div>
			</div>
			)
	}
}

const mapDispatchToProps = {
		addTodo,
		removeTodo
}

const mapStateToProps = (state) => {
	return {
		allTodos: state.todos
	}
}

export default connect(mapStateToProps,
	mapDispatchToProps)(Todo)
