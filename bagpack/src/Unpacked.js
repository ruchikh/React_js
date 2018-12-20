import React, { Component } from 'react';


export default class Unpacked extends Component {
	render(){
		return (
			<input type="submit" className="mark-btn" value = "marks All as Unpacked" onClick = {this.props.unpackAll} />
		);
	}
}	