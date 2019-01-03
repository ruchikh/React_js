import React, { Component } from 'react';
import './App.css';
import AddItems from "./components/AddItems.js";
import Unpacked from "./components/Unpacked.js";
import PackItem from './components/PackItem.js'

// import SearchItem from "./components/SearchItem.js";
import { connect } from 'react-redux';
import { removeItem } from './actions'
import Item from "./components/Item.js";



class App extends Component {

 
  unpackAll = () => {
  var unpack = this.props.itemList.map(item => {
    item.done = false
    return item
  })
 } 

 SearchItem = (e) => {
  console.log(e.target.value)
  var findValue = this.props.itemList.filter((val, i) => {
  console.log(val.value.includes(val))
  })
    this.setState({itemList: findValue})
  }
 
  render() {


    return (
      <div className="wrapper">
        <AddItems />

        <div className="main-container">

        <Item  />

        <PackItem />
        </div>

      </div>
    )
  }
}



const mapStateToProps = (state) =>{
  return state
}



export default connect(mapStateToProps)(App);
