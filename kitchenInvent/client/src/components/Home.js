import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import {addItems, getItems, editItem} from '../actions'

class Home extends Component {

	state = {
		item: "",
		quantity: "",
		isAvailable: true,
		outOfStockItems: []

	}

	handleChange = (e) => {
		this.setState({
		[e.target.name]: e.target.value,

		})
	}

handleSubmit= (e) => {
	e.preventDefault();
	this.props.dispatch(addItems(this.state, (succeed) => {
		if(succeed){
			this.props.dispatch(getItems())
		}
	}))
	this.state.item = ""
}

handleEdit = () => {
	const itemid = this.props.match.params.id
 this.props.dispatch(editItem(itemid))
}

filterOutofStockItems = () => {
	console.log("filter item")
	this.setState({
		outOfStockItems:this.props.items.filter(item => item.quantity == 0 || item.quantity == null)
	})
}

componentDidMount(){
	const itemid = this.props.match.params.id
	console.log(itemid)
	this.props.dispatch(getItems(itemid))
}

  render() {
  	const {items} = this.props;
    return (
      	<div className="home">
	      <form>
	        <input type="text" placeholder="Enter Item" name="item" onChange={this.handleChange}/>
	        <input type="text" placeholder="Enter quantity" name="quantity" onChange={this.handleChange}/>
	        <button onClick={this.handleSubmit}>Submit</button>
	      </form>
	      <div>
	      		<h3>Kitchen Inventory</h3>
	      	{
	      		items && items.map(item => 
	      		<div className="itemlist">
	      			<p>Item Name: {item.item}</p>
	      			<p>Quantity: {item.quantity}</p>
	        		<Link to={`/items/${item._id}/edit`}>Edit</Link>
	      		</div>

	      		)
	      	}
	      </div>

	      <div>
      	<button onClick={this.filterOutofStockItems}>OutOfStockItems</button>
      	<div>
      		{
      			this.state.outOfStockItems && this.state.outOfStockItems.map(item =>
      			<h2>{item.item}</h2>
      			 )
      		}
      	</div>
      	</div>
      </div>
    );
  }
}




const mapStateToProps = (state) =>{
  return {
  	items: state.itemList
  }
}



export default connect(mapStateToProps)(Home);