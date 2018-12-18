import React, { Component } from 'react';


export default class Unpacked extends Component {
	render(){
		return (
			<input type="submit" value = "marks as Unpacked" onClick = {this.props.unpackAll} />
		)
	}
}	