import React, { Component } from 'react';
import { connect } from "react-redux";
import {getItems, editItem, getSingleItems} from '../actions'

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

	handleSubmit = (e) => {
		e.preventDefault();
		const itemId = this.props.match.params.item_id;
		this.props.dispatch(editItem(this.state, itemId, (succeed) => {
			if(succeed){
				this.props.history.push('/')
			}
		}))
	}

	componentDidMount(){
		const itemId = this.props.match.params.item_id;
		console.log(itemId)
		this.props.dispatch(getSingleItems(itemId, (succeed, data) =>{
			if(succeed){
				this.setState({
					item: data.item,
					quantity: data.quantity
				})
			}
		}))
	}

  render() {
  	const {singleItem} = this.props;
    return (
      <div className="editpage">
	      <form onSubmit={this.handleSubmit}>
	        <input type="text" placeholder="Enter Item" value={this.state.item} name="item" onChange={this.handleChange}/>
	        <input type="text" placeholder="Enter quantity" value={this.state.quantity} name="quantity" onChange={this.handleChange}/>
	        <button onClick={this.handleSubmit}>Submit</button>
	      </form>
      </div>
    );
  }
}




const mapStateToProps = (state) =>{
  return {
  	singleItem: state.singleItem
  }
}



export default connect(mapStateToProps)(EditItem);