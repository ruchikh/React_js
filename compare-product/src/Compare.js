import React, { Component } from 'react';
import User from './User.js';

export default class Compare extends Component {



	render(){
		let item;
		console.log(this.props.compareList)
		const { compareList } = this.props;
		if(!compareList.length) {
			return (
				item = <div></div>
				) 
		} else {
					return (
					<div className="Compare-user">
					<div className="inline">
						{
							compareList && compareList.map( (data, index) => {
							return (	
							<div>

							<div className ="compare-list" id={index}>
								<table className = "img-bg">
								<tr>
								<td>{data.name}</td>
								<td>{data.followers}</td>
								<td>{data.following}</td>
								<td>{data.public_repos}</td>
								</tr>
								</table>
							</div>		
							</div>
							)
							})
						}
						</div>
					</div>
			)
		}

	}
}

							// <button className="user-btn" onClick = {() => {this.props.removeUser(index)}}>Remove</button>
