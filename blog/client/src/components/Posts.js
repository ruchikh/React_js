import React, {Component} from "react";
import {addPost} from '../actionCreator/action.js'
import {connect} from 'react-redux'
// import index from '../index.scss';

class Posts extends Component {
  state = {
      description: '',
      title: ''
    }
  
 handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addArticle = (e) => {
    e.preventDefault();
    console.log("fire");
    this.props.dispatch(addPost(this.state))
  }

  render(){
    return (
      <div className="home">
        <form>
          <input type="text" name="title" onChange={this.handleChange} placeholder="Title"/>
          <textarea cols="50" rows="10" name="description" onChange={this.handleChange} placeholder="Write story"/>
          <input type="button" value="Submit" onClick={this.addArticle}/> 
        </form>
      </div>
    )
  }
}

export default connect()(Posts);