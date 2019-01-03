import React, { Component, Fragment } from "react";
import Item from "./Item.js";
import { connect } from 'react-redux'

class Items extends Component {
	render(){
		return (
			<Fragment>
        <ul>
          
            <Item handleCheck={this.props.handleCheck}  />
         
        </ul>
			</Fragment>
		)
	}
}

export default connect()(Items)