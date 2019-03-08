import React, { Component } from 'react';
import { connect } from "react-redux";
import {getItems, editItem} from '../actions'

class EditItem extends Component {

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

	handleSubmit = (itemsid) => {
		const itemId = this.props.match.params.id;
		console.log(itemId)
		this.props.dispatch(getItems())
		this.props.dispatch(editItem(this.state, itemsid))
	}

	componentDidMount(){
		this.props.dispatch(getItems())
	}

  render() {
  	const {items} = this.props;
  	console.log(items)
    return (
      <div className="editpage">
	      <form>
	        <input type="text" placeholder="Enter Item" name="item" value={items.item} onChange={this.handleChange}/>
	        <input type="text" placeholder="Enter quantity" name="quantity" value={items.quantity} onChange={this.handleChange}/>
	        <button onClick={() => {this.handleSubmit(items._id)}}>Submit</button>
	      </form>
      </div>
    );
  }
}




const mapStateToProps = (state) =>{
  return {
  	items: state.itemList
  }
}



export default connect(mapStateToProps)(EditItem);