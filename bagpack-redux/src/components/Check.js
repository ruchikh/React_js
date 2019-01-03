import React, { Component } from 'react';

export default class Check extends Component {
 constructor(){
  super();
  this.state = {
    currentText: ""
  }
 }
 human;
 render() {
    return (
    	<button onClick = {this.props.change}>click here</button>
    )
  }
}