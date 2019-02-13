import React, {Component} from "react";
import {connect} from 'react-redux';
import {getSingleBlog, addComment, allComment, deleteComment} from '../actionCreator/action';
import {Link} from "react-router-dom";


class PostDetails extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    });
  }

  handleClick = () => {
    const id = this.props.match.params.id;
    this.props.dispatch(addComment({
      postId: id,
      value: this.state.value
    }, (succeed) => {
      if(succeed){
        this.props.dispatch(allComment(id))
      }
    }))
  }

  handleRemove = (id) => {
    const postId = this.props.match.params.id;
    this.props.dispatch(deleteComment(id, postId))
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.dispatch(getSingleBlog(id));
    this.props.dispatch(allComment(id))
  }

  render(){
    const {article, Comments} = this.props
    return (
      <div className="post">
        <div>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <button><Link to={`/article/${article._id}/edit`}>update</Link></button>
        </div>

        <ul>
        {
          Comments && Comments.map(comment => 
          
          <div>
          <span>{comment.value}</span>
          <button onClick={() => this.handleRemove(comment._id)}>X</button>
          </div>
          
          )
        }
        </ul>

        <div>
          <textarea cols="30" rows="5" placeholder="Write Comment" onChange={this.handleChange}/>
          <input type="button" value="Comment" onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.singleArticle,
    Comments: state.comments
  }
}

export default connect(mapStateToProps)(PostDetails);