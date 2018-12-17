import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props){
  super(props);
  this.state = {
    items: [],
    currentText: ""
  }
 }

handleChange = (e) => {
  this.setState({currentText: e.target.value})
}


handleSubmit = (e) => {
  e.preventDefault();
  const newItem = this.state.currentText;
    if(!newItem) return
    // console.log(newItem)
    var newList = {
      name: newItem,
      id: Date.now(),
      done: false
    }
    console.log(newList)
    const items = [newItem, ...this.state.items]
    this.setState({
      items: items,
      currentText: ''
    })
}

// handleCheck = e => {
//   this.state.
// }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="todo" value={this.state.currentText} onChange={this.handleChange} placeholder="Enter Name" className="new_item" />
        <button type="submit">+Add</button>
        <h1>Unpacked Items</h1>
        {
          this.state.items.map(item =>(
          <p><input key={item.id} type="checkbox"/>{item}<button>Remove</button></p>))
        }
      </form>
    )
  }
}





export default App;
