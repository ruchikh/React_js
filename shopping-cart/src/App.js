import React, { Component } from 'react';
import logo from './logo.svg';
import Product from './Product';
import ProductSize from './ProductSize';
import CheckItems from './CheckItems';
import Cart from './Cart'
import './App.css';

class App extends Component {
 constructor(){
    super();
    this.state = {
      shopingItems: [],
      favourites: [],
      newArray: []
    }
  }

 componentWillMount() {
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json").then(
      res => res.json()).then(data => {
        console.log("state",this.state ,"data",data)
        this.setState(function() {
          return {
            shopingItems: data.products
          }
        })
      })
  }


  handleChange = (index) => {
    console.log(index)
    this.setState({
      favourites: [...this.state.favourites, this.state.shopingItems[index]]
    })
  }

  handleSelect = (e) => {
    (e.target.value === "heighest to Lowest") ? this.setState({
        shopingItems: this.state.shopingItems.sort((a, b) => (b.price - a.price))
      }): this.setState({
        shopingItems: this.state.shopingItems.sort((a, b) => (a.price - b.price))
      }) 
  }

  handleCheck = (e) => {
    let checkItem = this.state.shopingItems.filter((v, i) => v.availableSizes.includes(e.target.value));
    console.log(checkItem)
    this.setState({
      newArray: checkItem
    })    
    console.log("filter")
  }


  render() {
    return (
      <div className="App">
        <Cart favourites={this.state.favourites} handleChange = {this.handleChange}/>
        <header className="App-header">
          <a
            className="App-link"
            href="http://ruchikh.github.io"
            target="_blank"
            rel="noopener noreferrer"
          > Sizes:
          </a>
          <h4>
          {
            (this.state.newArray.length) ? this.state.newArray.length : this.state.shopingItems.length
          } Items Found
          </h4>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >Order By
          </a>
         <form>
          <select className="option-val" onClick={(e) => this.handleSelect(e)}>
            <option value="select">select</option>
            <option value="heighest to Lowest">heighest to Lowest</option>
            <option value="Lowest to heighest">Lowest to heighest</option>
          </select>
        </form>
      </header>
        <div className="main-container">
        <ProductSize shopingItems={this.state.shopingItems} handleCheck={this.handleCheck}/>
        {
          (this.state.newArray.length) ? <CheckItems newArray={this.state.newArray} handleChange = {this.handleChange}/> : <Product shopingItems = {this.state.shopingItems} handleChange = {this.handleChange} />

        }
        </div>

      </div>
    );
  }
}

export default App;
