import React, { Component } from 'react'
import NewsDetails from './NewsDetails'
import country from './CountryName'
import CountryData from './CountryData'
import CategoryData from './CategoryData'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



export default class App extends Component{
	render(){
		
		return (
			<Router>
        <div>
            <Route path='/' component={CountryData} />
            <Route path='/country/:name'  component={NewsDetails} />
            <Route path='/country/:name/:category'  component={CategoryData} />

        </div>
      </Router>
		)
	}
}