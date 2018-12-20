import React, { Component } from 'react';


export default class AddItems extends Component {
 constructor(){
  super();
  this.state = {
    currentText: ""
  }
 }

handleChange = e => {
	this.setState({
		currentText: e.target.value
	})
}

handleSubmit= (e) => {
	e.preventDefault();
	this.props.add({
		value: this.state.currentText,
		id: Date.now(),
		done: false
	})
	this.state.currentText = ""
}

render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo" value={this.state.currentText} onChange={this.handleChange} placeholder="Enter Name" className="new_item" />
        <button className="add-btn" type="submit">+Add</button>
      </form>
    )
  }
}
