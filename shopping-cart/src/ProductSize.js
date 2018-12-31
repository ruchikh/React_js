import React, { Component } from 'react';

class ProductSize extends Component {
 
  render() {
    return (
      <div className="product-size">

      <ul>
        <li>
          <input type="checkbox" id="check_1" name="check_1" value="S" onChange={this.props.handleCheck}/>
          <label for="check_1">S</label>
        </li>
        <li>
          <input type="checkbox" id="check_2" name="check_2" value="XS" onChange={this.props.handleCheck}/>
          <label for="check_2">XS</label>
        </li>
        <li>
          <input type="checkbox" id="check_3" name="check_3" value="M" onChange={this.props.handleCheck}/>
          <label for="check_3">M</label>
        </li>
        <li>
          <input type="checkbox" id="check_4" name="check_4" value="L" onChange={this.props.handleCheck}/>
          <label for="check_4">L</label>
        </li>
        <li>
          <input type="checkbox" id="check_5" name="check_5" value="XL" onChange={this.props.handleCheck}/>
          <label for="check_5">XL</label>
        </li>
        <li>
          <input type="checkbox" id="check_6" name="check_6" value="XXL" onChange={this.props.handleCheck}/>
          <label for="check_6">XXL</label>
        </li>
      </ul>

      </div>
    );
  }
}

export default ProductSize;
