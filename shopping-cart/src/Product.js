import React, { Component, Fragment } from 'react';

export default class Product extends Component {
	
	render(){

		return (
			<div className="data-container">
				{

					this.props.shopingItems.map((item, index) => {
					return (
						<div className="data-view"> 
							<img src={require(`./image/${item.sku}_1.jpg`)}  />
							<div className="dataInfo">
								<h2>{item.title}</h2>
								<hr />
								<p>{item.currencyFormat}{item.price}</p>
								<p>or {item.installments} X {item.currencyFormat} {item.installments}.00</p>
								<button className="add-btn" onClick = {() => this.props.handleChange(index)}>Add to Cart</button>
							</div>
						</div>
					)
				})
			}
			</div>
		)
	}
}