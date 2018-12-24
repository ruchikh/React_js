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
							<div className ="compare-list" id={index}>
								<div className = "img-bg">
								<img className="avatar"src={data.avatar_url} />
								<h3>{data.name}</h3>
								<h4>followers :- {data.followers}</h4>
								<h4>following :- {data.following}</h4>
								<h4>public_repos :- {data.public_repos}</h4>
								<button className="user-btn" onClick = {() => {this.props.removeUser(index)}}>Remove</button>
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

