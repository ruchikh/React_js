import React from "react"
import PropTypes from "prop-types";
import {connect} from "react-redux";

const Message = ({ message, author }) => (
  <p>
    <i>{author}</i>: {message}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		message : state.message
	}
}


export default Message;