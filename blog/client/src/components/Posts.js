import React, {Component} from "react";
import {addPost, getAllArticles} from '../actionCreator/action.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
// import index from '../index.scss';

class Posts extends Component {
  state = {
      description: '',
      title: ''
    }
  
 handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addArticle = (e) => {
    e.preventDefault();
    this.props.dispatch(addPost(this.state, (succeed) => {
      if(succeed) {
          this.props.dispatch(getAllArticles())
      }
    }))
  }

  componentDidMount(){
    this.props.dispatch(getAllArticles())
  }

  render(){
    const {articles} = this.props;
    console.log(articles)
    return (
      <div className="home">
        <form>
          <input type="text" name="title" onChange={this.handleChange} placeholder="Title"/>
          <textarea cols="50" rows="10" name="description" onChange={this.handleChange} placeholder="Write story"/>
          <input type="button" value="Submit" onClick={this.addArticle}/> 
        </form>

        <ul>
        {
          articles && articles.map(article => 
          <li><Link to={`/article/${article._id}`}>{article.title}</Link></li>
          )
        }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.allArticles
  }
}

export default connect(mapStateToProps)(Posts);