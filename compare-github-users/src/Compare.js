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
						<table className = "img-bg">
							<tr>
								<th>Name</th>
								<th>Followers</th>
								<th>Following</th>
								<th>Public Repos</th>
							</tr>
						{
							compareList && compareList.map( (data, index) => {
							return (
									<tr>
										<td>{data.name}</td>
										<td>{data.followers}</td>
										<td>{data.following}</td>
										<td>{data.public_repos}</td>
									</tr>
							)
							})
						}
								</table>
						</div>
					</div>
			)
		}

	}
}

							// <button className="user-btn" onClick = {() => {this.props.removeUser(index)}}>Remove</button>
