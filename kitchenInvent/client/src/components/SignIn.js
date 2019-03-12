import React, { Component } from 'react';
import { connect } from "react-redux";
import {loginUser} from '../actions'

class SignIn extends Component {

	state = {
		username: "",
		password: ""

	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
		[e.target.name]: e.target.value,

		})
	}

handleSubmit= (e) => {
	e.preventDefault();
	console.log("login Submit")
	this.props.dispatch(loginUser(this.state));
}


  render() {
    return (
      <div className="signin">
	      <form>
	        <input type="text" placeholder="Enter Username" name="username" onChange={this.handleChange}/>
	       	<input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
	        <button onClick={this.handleSubmit}>Submit</button>
	      </form>
	      
      </div>
    );
  }
}


export default connect()(SignIn);