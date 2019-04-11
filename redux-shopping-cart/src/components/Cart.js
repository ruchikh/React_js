import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return state;
}

class  Cart extends Component{
 state = {
 	isShowing: false,
 	cart: []
 }

  handleClick = () => {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  handleCheckout = () => {	 
		alert(`Checkout - Subtotal  : $${this.props.cartItems.reduce((acc, v) => {
			acc = acc+v.price
			return  acc
		}, 0)}`)
  }

  handleDelete = (index) => {
  	this.props.cartItems.splice(index, 1)
  	this.setState({
  		isShowing: !this.state.isShowing
  	})
  }

	render(){
		return (
			<div className="cart-container" onClick = {this.handleClick}>

				{(this.state.isShowing) ? 

					(<div className = "cart__items">

						{
							this.props.cartItems.map((item, index) => {
								return (
									<div className="cart_item">
									<div className="data-views" key={index}> 
										<img src={require(`./image/${item.sku}_1.jpg`)}  />
										<h6>{item.title}</h6>
										<p>{item.currencyFormat}{item.price}</p>
										<p>Quantity : 0</p>	
							
										<div className="cart-delete" onClick ={() => {this.handleDelete(index)}}>X</div>
									</div>

									------------------------------------------------------------
									</div>

								)
							})
						}
						<div className="subtotal">
							<h2>Total Price  :  
								{
									this.props.cartItems.reduce((acc, v) => {
										acc = acc+v.price
										return acc
									}, 0)
								}
							</h2>
							<button className="cart-btn" onClick={this.handleCheckout}>CHECKOUT</button>
						</div>
					</div>)
			 : `${this.props.cartItems.length}`
			}			
	</div>
	)
}
		
}

export default connect(mapStateToProps)(Cart);

