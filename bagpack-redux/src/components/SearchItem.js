import React, { Component } from 'react';


export default class SearchItem extends Component{
	render(){
		return (
			<input type="search" onChange={this.props.searchItem}/>
		)	
	}
}
