import React, { Component } from 'react';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails'
import {BrowserRouter, Switch, Route} from 'react-router-dom'



class App extends Component {

  render() {
    return (
    	<BrowserRouter>
      <div className="App" >
      	<Switch>
        <Route exact path="/" component={Posts}/>
        <Route exact path="/article/:id" component={PostDetails}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
