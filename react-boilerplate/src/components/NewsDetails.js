import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class NewsDetails extends Component{
	render(){
		const { countryData } = this.props;
		return(
				<div >
				{	
					countryData.map((val, i)=>{
						return (
						<div className="company__details" key={i}>
						<div>
						<img src={val.urlToImage} />
						</div>
						<div className="news_details">
						<h3>{val.title}</h3>
						<p>{val.description}</p>
						<p>{val.content}></p>
						<a href={val.url}>{val.url}</a>
						</div>

						</div>
						)
					})
				}
				</div>
			)
	}
}

const mapStateToProps = (state) => {
	return {
		countryData: state.data
	}
}

export default connect(mapStateToProps)(NewsDetails)