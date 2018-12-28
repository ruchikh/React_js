import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import Counter from './reducer'
import {increment, decrement} from './action/action'

class App extends Component {

	handleInc = (e) => {
		e.preventDefault();
		this.props.increment()
	}

	handleDec = (e) => {
		e.preventDefault();
		this.props.decrement()
	}

  render() {
    return (
      <div className="App">
      	<h1>{this.props.value}</h1>
	      <button onClick={this.handleInc}>inc</button>
	      <button onClick={this.handleDec}>dec</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch(increment()),
		decrement: () => dispatch(decrement())

	}
}

const mapStateToProps = (state) => {
	return {
		value: state.number
	}
}

export default connect(mapStateToProps,
	mapDispatchToProps)(App);
