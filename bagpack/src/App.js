import React, { Component } from 'react';
import './App.css';
// import Check from "./Check.js";
import AddItems from "./AddItems.js";
import Unpacked from "./Unpacked.js";
import Items from "./Items.js";
import SearchItem from "./SearchItem.js";



class App extends Component {
 constructor(){
  super();
  this.state = {
    items: []
  }
 }

 add = (value) => {
  if(!value.value) return 
  this.setState({items: [value, ...this.state.items]});
 }

unpackAll = () => {
  var unpack = this.state.items.map(item => {
    item.done = false
    return item
  })
  this.setState({item: unpack})
}

 handleCheck = (id) => {
  const itemlist = this.state.items.map(item => {
    if(item.id == id){
      item.done = !item.done
    }
    return item
  })
  this.setState({items: itemlist})
 }

 RemoveItem = (id) => {
  const removeList = this.state.items.filter(item => item.id !== id)
 this.setState({items: removeList})
 }

 SearchItem = (e) => {
  console.log(e.target.value)
  var findValue = this.state.items.filter((val, i) => {
   console.log(val.value.includes(val))
  })
    this.setState({items: findValue})
  }
 
  render() {
    const unpacked = this.state.items.filter(item => !item.done);
    const packed = this.state.items.filter(item => item.done);

    return (
      <div className="wrapper">
        <AddItems add = {this.add} />

        <Items
        title="UnPacked Items"
          items={unpacked}
          handleCheck={this.handleCheck}
          RemoveItem={this.RemoveItem}

        />

        <SearchItem searchItem = {this.SearchItem} />

        <Items
        title="Packed Items"
          items={packed}
          handleCheck={this.handleCheck}
          RemoveItem={this.RemoveItem}
        />
        <Unpacked unpackAll = {this.unpackAll} />

      </div>
    )
  }
}





export default App;
