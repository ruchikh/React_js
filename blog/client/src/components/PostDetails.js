import React, {Component} from "react";
import {connect} from 'react-redux';
import {getSingleBlog, addComment, allComment, deleteComment, deletePost} from '../actionCreator/action';
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

  removePost = () => {
    const postId = this.props.match.params.id;
    this.props.dispatch(deletePost(postId , (succeed) => {
      if(succeed){
        this.props.history.push('/')
      }
    }));   
  }

  commentEdit = (id) => {
    const postId = this.props.match.params.id;
    this.props.dispatch(editComment(id, postId))

  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.dispatch(getSingleBlog(id));
    this.props.dispatch(allComment(id));
  }

  render(){
    const {article, Comments} = this.props
    return (
      <div className="post">
        <div className="post-details">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <button className="post-btn"><Link to={`/article/${article._id}/edit`}>Edit</Link></button>
          <button className="post-btn" onClick={this.removePost}><Link to={`/article/${article._id}`}>Delete</Link></button>
        </div>
        <p>Comment here...</p>
        <div>
        {
          Comments && Comments.map(comment => 
          
          <div className="comment-text">
          <span>{comment.value}</span>
          <button  onClick={() => this.handleRemove(comment._id)}>Delete</button>
          <button  onClick={() => this.commentEdit(comment._id)}>Edit</button>
          </div>
          
          )
        }
        </div>

        <div className="comment-box">
          <textarea cols="30" rows="5" placeholder="Write Comment" onChange={this.handleChange}/>
          <input className="comment-btn" type="button" value="Comment" onClick={this.handleClick}/>
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