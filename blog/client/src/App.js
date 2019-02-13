import React, { Component } from 'react';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import UpdatePost from './components/UpdatePost';
import Header from './components/Header'
import {BrowserRouter, Switch, Route} from 'react-router-dom'



class App extends Component {

  render() {
    return (
    	<BrowserRouter>
      <div className="App" >
        <Header />
      	<Switch>
        <Route exact path="/" component={Posts}/>
        <Route exact path="/article/:id" component={PostDetails}/>
        <Route exact path="/article/:id/edit" component={UpdatePost}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
