import React, {Component} from "react";
import {updatePost} from '../actionCreator/action.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
// import index from '../index.scss';

class UpdatePost extends Component {
  state = {
    title: "",
    description: ''
  }

  handleUpdate = (e) => {
    this.setState({
    [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    const id = this.props.match.params.id;
    this.props.dispatch(updatePost(this.state, id, (succeed) => {
      if(succeed){
        this.props.history.push(`/article/${id}`)
      }
    }))
  }

  componentDidMount() {
    this.setState({
      title: this.props.article.title,
      description: this.props.article.description
    })
  }
  
  render(){
    const {article} = this.props;
    return (
      <div className="home">
        <input type="text" name="title" value={this.state.title}  onChange={this.handleUpdate}/>
        <textarea cols="10" rows="10" name="description" value={this.state.description} onChange={this.handleUpdate}/>
        <input type="button" value="Submit" onClick={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.singleArticle
  }
}

export default connect(mapStateToProps)(UpdatePost);