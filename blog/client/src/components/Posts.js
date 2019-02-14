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
    return (
      <div className="home">
        <form>
          <input type="text" name="title" onChange={this.handleChange} placeholder="Title"/>
          <textarea cols="50" rows="10" name="description" onChange={this.handleChange} placeholder="Write story"/>
          <div>
          <button onClick={this.addArticle}>Submit</button> 
          <hr></hr>
          </div>
        </form>

        <ul >
        {
          articles && articles.map(article => 
          <div className="article-list">
            <h2><Link to={`/article/${article._id}`}>{article.title}</Link></h2>
          </div>
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