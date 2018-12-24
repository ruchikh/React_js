import React, { Component } from 'react';
import DisplayData from './DisplayData.js';
import Compare from './Compare'

export default class UserData extends Component {
	constructor(){
		super();
		this.state = {
			users: [],
			compareList: [],
			count: null
		}
	}

	handleClick = (id) => {
		this.setState({compareList: [...this.state.compareList, this.state.users[id]],
			count: this.state.count + 1
		})
	}


	removeUser = (id) => {
		// var splArray = this.state.compareList.splice(id, 1)
		let newArray = this.state.compareList.slice();
		newArray.splice(id, 1);

		console.log(newArray)
		this.setState({
			compareList: newArray
		})
	
	}



	 componentWillMount = () => {
			fetch(`https://gist.githubusercontent.com/SiddharthShringi/e2ff958eb9a6fa2f8c2d412e3613fae7/raw/f336d8a27a46a5f0094d0796d326eaf1b1f86c0a/compareProfile.json`).then(d => d.json()).then(c => (this.setState({
			users: c.users
		})))
	}


	render(){
		return (
			<div>
			<DisplayData count={this.state.count} data = {this.state.users} compareList = {this.state.compareList} handleClick = {this.handleClick}  removeUser = {this.removeUser}/>
			</div>
			)
	}
}