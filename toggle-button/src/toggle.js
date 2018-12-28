import React, { Component } from 'react';

export default class ToggleButton extends Component{
	constructor(props){
		super(props);
		this.state = {
			istoggleOn: true
		}
		this.handleClick = this.handleClick.bind(this)
	}
/*	handleClick = () => {
		if(this.state.istoggleOn){
			console.log("ToggleButton is :- ON" )
		}else {
			console.log("ToggleButton is :- OFF" )
		}
				console.log(this.state.istoggleOn)

		this.setState({
			istoggleOn: !this.state.istoggleOn
		}, () => {console.log(this.state.istoggleOn)})
	}*/

	async handleClick(){
			// console.log("ToggleButton is :- " + this.state.istoggleOn ? "ON" : "OFF")
		await this.setState({
			istoggleOn: !this.state.istoggleOn
		})
		
		console.log(this.state.istoggleOn  ? "ON" : "OFF")
	}




	render(){
		return (
			<div className = "toggle">
			<h1>ToggleButton is {this.state.istoggleOn ? "On" : "Off"}</h1>
			<label className="switch">
  		<input type="checkbox" className="inputcheck" checked={this.state.istoggleOn} onChange = {this.handleClick} />
  		<div className="slider round"></div>
			</label>
			<div>
  		<button className="toggle-btn" onClick = {this.handleClick}>{this.state.istoggleOn ? "ON" : "OFF"}</button>
  		</div>
			</div>
			);
	}
}