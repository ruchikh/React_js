import React from 'react'
import PropTypes from 'prop-types';
import { addMessage } from '../actions';
import {connect} from "react-redux";


const AddMessage = (props) => {
  let input

  return (
    <section id="new-message">
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          props.dispatch(input.value, 'Me')
          input.value = ''
        }
      }}
        type="text"
        ref={(node) => {
        input = node
      }}
      />
    </section>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatch: (message, author) => {
    dispatch(addMessage(message, author))
  }
})

export default connect(() => ({}), mapDispatchToProps)(AddMessage)
