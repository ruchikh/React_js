import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

function Product(props) {

const { productArray, handleClick } = props;

	return (
		<div className="data-container">
			{

				productArray.map((item, index) => {
				return (
					<div className="data-view" key={index}> 
						<img src={require(`./image/${item.sku}_1.jpg`)}  />
						<div className="dataInfo">
							<h2>{item.title}</h2>
							<hr />
							<p>{item.currencyFormat}{item.price}</p>
							<p>or {item.installments} X {item.currencyFormat} {item.installments}.00</p>
							<button className="add-btn" onClick = {() =>handleClick(item)}>Add to Cart</button>
						</div>
					</div>
				)
			})
		}
		</div>
	)
	
}


export default Product
