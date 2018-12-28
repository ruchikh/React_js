import React, { Component } from 'react';

class CheckItems extends Component {
 
  render() {
    return (
      <div className="data-container">
      {

        this.props.newArray.map((item, index) => {
          return (
            <div className="data-view"> 
              <img src={require("./image/5619496040738316_1.jpg")}  />
              <div className="dataInfo">
              <h2>{item.title}</h2>
              <hr />
              <p>{item.currencyFormat}{item.price}</p>
              <p>or {item.installments} X {item.currencyFormat} {item.installments}.00</p>
              <button className="add-btn" onClick = {() => this.props.handleChange(index)}>Add to Cart</button>

            </div>
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default CheckItems;
