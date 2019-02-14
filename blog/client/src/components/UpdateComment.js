import React, {Component} from "react";
import {updatePost} from '../actionCreator/action.js'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
// import index from '../index.scss';

class UpdateComment extends Component {
  state = {
    value: "",
  }

  handleUpdate = (e) => {
    this.setState({
    value: e.target.value
    })
  }

  handleSubmit = (e) => {
    const id = this.props.match.params.id;
    this.props.dispatch(editComment(this.state, id, (succeed) => {
      if(succeed){
        this.props.history.push(`/article/${id}`)
      }
    }))
  }

  componentDidMount() {
    this.setState({
      value: this.props.article.title,
    })
  }
  
  render(){
    const {Commnets} = this.props;
    return (
      <div className="home">
        <input type="text" name="title" value={this.state.value}  onChange={this.handleUpdate}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Comments: state.comments
  }
}

export default connect(mapStateToProps)(UpdateComment);