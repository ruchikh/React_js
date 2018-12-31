import React, { Component } from 'react';
import './App.css'
import Cart from './components/Cart'
import ProductSize from './components/ProductSize'
import Product from './components/Product';
import {displayData, addToCart, sortedData, filterSize, getSizesMenu} from './actions'
import { connect } from 'react-redux'

class App extends Component {
 
 componentWillMount() {
    fetch("https://gist.githubusercontent.com/SiddharthShringi/00b55e2aed2dc0512621bfb42c609659/raw/0590c7f044ad3264d9586251e2a5da03659f835f/shoppingKartData.json").then(
      res => res.json()).then(data => this.props.displayData(data.products))
  }

  componentWillUpdate() {
    this.props.getSizesMenu()
  }


  handleClick = (index) => {
    this.props.addToCart(index)
  }


  handleSelect = (e) => {
   (e.target.value === "heighest to Lowest") ? this.props.itemsDisplay.sort((a, b) => (b.price - a.price)) : this.props.itemsDisplay.sort((a, b) => (a.price - b.price))
   this.props.sortedData()
  }
  
  handleCheck = (e) => {
    this.props.filterSize(e.target.value)

  }
  render() {

    return (
      <div className="App">
        <Cart cartItems={this.props.addItems} handleClick={this.handleClick} />
          <header className="App-header">
            <a className="App-link"> Sizes: </a> 
            <a className="App-link">{}item Founds</a>
            <a className="App-link" >Order By </a>
            <form>
              <select className="option-val" onChange={(e) => this.handleSelect(e)}>
                <option value="select">select</option>
                <option value="heighest to Lowest">heighest to Lowest</option>
                <option value="Lowest to heighest">Lowest to heighest</option>
              </select>
            </form>
          </header>
          <div className="main-container">
          <ProductSize product={this.props.itemsDisplay} handleCheck={(e)=>this.handleCheck(e)}/>
       
          <div>
            {
              (this.props.sorted.length) ? <Product productArray={this.props.sorted} handleClick={this.handleClick}/> : <Product productArray={this.props.itemsDisplay} handleClick={this.handleClick}/>
            }
          </div>
          </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  displayData,
  addToCart,
  sortedData,
  filterSize,
  getSizesMenu
}

const mapStateToProps = (state) => {
 return {
  itemsDisplay: state.shoppingItems,
  addItems: state.favourites,
  sorted: state.sortedArray,
  arraySize: state.newArray
 } 
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
