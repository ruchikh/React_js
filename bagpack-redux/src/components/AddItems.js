import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItems, undoItem, removeItem, redoItem} from '../actions';



class AddItems extends Component {
 constructor(){
  super();
  this.state = {
    currentText: ""
  }
 }

handleChange = e => {
	this.setState({
		currentText: e.target.value
	})
}

handleSubmit= (e) => {
	e.preventDefault();
	this.props.addItems({
		value: this.state.currentText,
		id: Date.now(),
    done: false
	})
	this.state.currentText = ""
}


undoItems = (e) => {
  this.props.undoItem()

}

redoItems = () => {
  this.props.redoItem()
}

render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" className="inputbox" value={this.state.currentText} onChange={this.handleChange} placeholder="Enter Name" className="new_item" />
          <button className="add-btn" type="submit">+Add</button>
        </form>
        <div>
          <button className="undo-btn" onClick={this.undoItems}>Undo</button>
          <button className="undo-btn" onClick={this.redoItems}>Redo</button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = {
  addItems,
  undoItem,
  redoItem

}

const mapStateToProps = (state) =>{
  return state
}



export default connect(mapStateToProps, mapDispatchToProps)(AddItems);