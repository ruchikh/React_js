import React, { Component, Fragment } from "react";
import Item from "./Item.js";

export default class Items extends Component {
	render(){
		return (
			<Fragment>
				<h1>{this.props.title} {this.props.length}</h1>
        <ul>
          {this.props.items.map(item => (
            <Item key={item.id} handleCheck={this.props.handleCheck} itemList={item} RemoveItem={this.props.RemoveItem} />
          ))}
        </ul>
			</Fragment>
		)
	}
}