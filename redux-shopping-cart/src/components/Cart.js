import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

let mapStateToProps = state => {
  return state;
}

class  Cart extends Component{
 state = {
 	isShowing: false
 }

  handleClick = () => {
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
									<div>
									<div className="data-views" key={index}> 
										<img src={require(`./image/${item.sku}_1.jpg`)}  />
										<h6>{item.title}</h6>
										<p>{item.currencyFormat}{item.price}</p>
									</div>
									</div>

								)
							})
						}
					</div>)
			 : `${this.props.cartItems.length}`
			}
			<div>
			</div>
	</div>
	)
}
		
}

export default connect(mapStateToProps)(Cart);

