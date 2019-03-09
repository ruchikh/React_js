import React, { Component } from 'react';
import { connect } from "react-redux";
// import {addItems, getItems, editItem} from '../actions'

class SignUp extends Component {

	state = {
		Username: "",
		Email: "",
		password: ""

	}

	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value,

		})
	}

handleSubmit= (e) => {
	
}


  render() {
    return (
      <div className="signup">
	      <form>
	        <input type="text" placeholder="Enter Username" name="item" onChange={this.handleChange}/>
	        <input type="text" placeholder="Email" name="email" onChange={this.handleChange}/>
	       	<input type="password" placeholder="password" name="password" onChange={this.handleChange}/>
	        <button onClick={this.handleSubmit}>Submit</button>
	      </form>
	      
      </div>
    );
  }
}



export default connect()(SignUp);