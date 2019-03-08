import React, { Component } from 'react';
import { connect } from "react-redux";
import {addItems, getItems, editItem} from '../actions'

class Home extends Component {

	state = {
		item: "",
		quantity: "",
		isAvailable: true

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
	      			<p>Item: {item.item}</p>
	      			<p>Quantity: {item.quantity}</p>
	        		<button onClick={() => {this.handleEdit(item._id)}}>Edit</button>
	      		</div>

	      		)
	      	}
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