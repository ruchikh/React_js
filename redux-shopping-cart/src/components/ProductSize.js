import React, { Component } from 'react';
import { connect } from 'react-redux'

class ProductSize extends Component{
    render() {
        const {product, handleCheck, sizeArray} = this.props

    return (
      <div className="product-size">
       {
        
        sizeArray.map((value, i) => {
          return (
            
            <ul>
            {
              
            <li>
              <input type="checkbox" id={i} name="check_1" value={value} onClick={handleCheck} />
              <label for={i} >{value}</label>
            </li>

            }
            </ul>
          ) 
        })
        
      }
      </div>
    );

    }
  
}


const mapStateToProps = (state) => {
  return {
    sizeArray: state.availSizes
  }
}


export default connect(mapStateToProps)(ProductSize);
