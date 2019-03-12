import React, { Component } from 'react';
import { connect } from "react-redux";
import {createUser} from '../actions'

class SignUp extends Component {

	state = {
		username: "",
		email: "",
		password: ""
	}

	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value,

		})
	}

handleSubmit= (e) => {
	e.preventDefault();
	console.log("Created User Submit")
	this.props.dispatch(createUser(this.state, (succeed) => {
		if(succeed){
			this.props.history.push('/signin')
		}
	}));
}

  render() {
    return (
      <div className="signup">
	      <form>
	        <input type="text" placeholder="Enter Username" name="username" onChange={this.handleChange}/>
	        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
	       	<input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
	        <button onClick={this.handleSubmit}>Submit</button>
	      </form>
	      
      </div>
    );
  }
}



export default connect()(SignUp);