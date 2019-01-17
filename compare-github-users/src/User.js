import React, { Component } from 'react';
import Compare from './Compare.js';

export default class User extends Component {

 handleUser = () => {
 	console.log(this.props.UserInfo)
 }

	render(){
		// const { count } = this.props;
		// let item;
		// if(count > 0) {
		// 	item = <div className ="compare-list">
		// 		<div className = "img-bg">
		// 		<img className="avatar"src={this.props.UserInfo.avatar_url} />
		// 		<h3>{this.props.UserInfo.name}</h3>
		// 		<h4>followers :- {this.props.UserInfo.followers}</h4>
		// 		<h4>following :- {this.props.UserInfo.following}</h4>
		// 		<h4>public_repos :- {this.props.UserInfo.public_repos}</h4>
		// 		<button className="user-btn" onClick = {() => {}}>Remove</button>
		// 		</div>
		// 	</div>
		// } else {
		// 	item = <div className ="compare-list">
		// 		<div className = "img-bg">
		// 		<img className="avatar"src={this.props.UserInfo.avatar_url} />
		// 		<h3>{this.props.UserInfo.name}</h3>
		// 		<h4>followers :- {this.props.UserInfo.followers}</h4>
		// 		<h4>following :- {this.props.UserInfo.following}</h4>
		// 		<h4>public_repos :- {this.props.UserInfo.public_repos}</h4>
		// 		<button className="user-btn" onClick = {() => this.props.handleClick(this.props.id)}>Compare</button>
		// 		</div>
		// 	</div>	
		// }
		return (
			<div className ="compare-list">
				<div className = "img-card">
				<img className="avatar"src={this.props.UserInfo.avatar_url} />
				<h3>{this.props.UserInfo.name}</h3>
				<h4>followers :- {this.props.UserInfo.followers}</h4>
				<h4>following :- {this.props.UserInfo.following}</h4>
				<h4>public_repos :- {this.props.UserInfo.public_repos}</h4>
				<button className="user-btn" onClick = {() => this.props.handleClick(this.props.id)}>Compare</button>
				</div>
			</div>		
		)
	}
}