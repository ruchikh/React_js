import React, { Component, Fragment } from 'react';

export default class Cart extends Component {
	
	render(){

		return (
			<div className="cart-container">
				<h1>{this.props.favourites.length}</h1>
			</div>
		)
	}
}