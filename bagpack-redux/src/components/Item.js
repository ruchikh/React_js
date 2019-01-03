import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import {removeItem, unCheck } from '../actions'

class Item extends Component {

  handleCheck = (id) => {
  const itemlist = this.props.itemList.map(item => {
    if(item.id == id){
      item.done = !item.done
    }
    return item
  })
 }



	render() {
    const { value, done, id } = this.props.itemList;

    return (
      <div>
      <h2>Unpacked Items</h2>
      {
        this.props.itemList.map((val, i) => {
          if(!val.done){
             return <li key={i}>
        <input type="checkbox" className="check" checked={val.done} onChange={() => this.props.unCheck(i)} />
        <span>{val.value}</span>
        <button className="delete__item" onClick = {() => this.props.removeItem(i)}>Delete</button>
      </li>

          }
       

      })
      }
      </div>
    );
  }
}

const mapDispatchToProps = {
  removeItem,
  unCheck
}

const mapToStateTOProps = (state) =>  {
  return state
}



export default connect(mapToStateTOProps, mapDispatchToProps)(Item)

