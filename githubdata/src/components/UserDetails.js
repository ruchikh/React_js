import React, { Component } from 'react';
import User from "./User.js"

class UserDetails extends Component {
	state = {
		userData: null,
		user: ''
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			user: e.target.value
		})
	}

	handleClick = (e) =>  {
		e.preventDefault();
		fetch(`https://api.github.com/users/${this.state.user}`).then(res => res.json()).then(data => {
			this.setState({
				userData: data
			})
		})
	}

  render() {
  	const {userData} = this.state;
  	console.log(userData)
    return (
      <div className="user-data">
      <form onSubmit={this.handleClick}>
        <input type="text" placeholder="Enter User Name" onChange={this.handleChange}/>
        <input type="Submit" value="Submit" />
      </form>

      <div>
      	{
      			(userData) ? 
      			<div>
      			<img src={userData.avatar_url}/>
      			<a href="">{userData.name}</a> 
      			</div>
      			: <div></div>
      	}
      </div>

      <User user={this.state.userData}/>
      </div>
    );
  }
}

export default UserDetails;
