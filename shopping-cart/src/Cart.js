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
					// <div className="data-view"> 
     //          <img src={require("./image/5619496040738316_1.jpg")}  />
     //          <div className="dataInfo">
	    //           <h2>{this.props.favourites.title}</h2>
	    //           <hr />
	    //           <p>{this.props.favourites.currencyFormat}{this.props.favourites.price}</p>
     //      		</div>
     //      		</div>