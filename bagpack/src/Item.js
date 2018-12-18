import React, { Component, Fragment } from "react";

export default class Item extends Component {
	render() {
    const { value, done, id } = this.props.itemList;
    return (
      <li>
        <input type="checkbox" checked={done} onChange={() => this.props.handleCheck(id)} />
        <span>{value}</span>
        <button className="delete__item" onClick = {() => this.props.RemoveItem(id)}>Delete</button>
      </li>
    );
  }
}