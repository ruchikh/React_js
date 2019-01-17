import React, { Component } from 'react';
import User from './User.js';
import Compare from './Compare.js';



export default class DisplayData extends Component {

	render(){
		const { count } = this.props;
		console.log(count)
		return (
			<div>
			<h1>Compare GitHub Users</h1>
				<div className="data-container">
				{
					this.props.data.map( (data, index) => {
					return 	<User count={count} UserInfo={data} key={index} id={index} handleClick={this.props.handleClick}  />
					})
				}
				</div>
				<Compare compareList = {this.props.compareList} removeUser = {this.props.removeUser}/>
				</div>
			)
	}
}
