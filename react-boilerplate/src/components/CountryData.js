import React, { Component } from 'react'
import NewsDetails from './NewsDetails'
import country from './CountryName'
import {getCountryData, getNewsByCategory} from './../actions/actionCreator'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CountryData extends Component{
constructor(props){
	super(props);
	this.state = {
		data: [],
		currentCountry: '',
		value: 'favorites',
		// option: 'category'
	}
	// this.componentWillMount = this.componentWillMount.bind(this)
	this.handleChange = this.handleChange.bind(this)
	this.handleClick = this.handleClick.bind(this)
	}

	handleChange(e){
			this.setState({
				currentCountry: e.target.value
			})
			this.props.dispatch(getCountryData(e.target.value))
			this.props.history.push(`/country/${e.target.value}`)
	}

	handleClick(e){
		this.props.dispatch(getNewsByCategory(this.state.currentCountry, e.target.value))
		this.props.history.push(`/country/${this.state.currentCountry}/${e.target.value}`)

	}

	render(){
		var cName = []
		let category = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']

		for(let key in country){
			cName.push(country[key])
		}
		return (
			<div className="header">
			<h1>Right Side News</h1>
			<div>---------</div>
			<div className="main-page">
			<h1>NewsHack</h1>
			<h3>Select Country</h3>
			<div className = "select__option">
				<select onChange={this.handleChange} >

					<option value="Select">Select</option>

					{
						cName.map((value, i) => {
							return  <option key={i} value={Object.keys(country)[i]}>{value}</option>

						})
					}
				</select>
				</div>
				<div className="category_name">
					<h3>Select Category</h3>
					<div className = "select__option">
						<select onChange={this.handleClick} >
							<option value="Select">Select</option>
							{
								category.map((value, i) => {
									return  <option key={i} value={value}>{value}</option>
								})
							}
						</select>
					</div>
				</div>
				</div>


			</div>
		)
	}
}

export default connect()(CountryData)