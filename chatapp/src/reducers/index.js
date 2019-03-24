import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"

const chatApp = combineReducers({
  messages,
  users
});

export default chatApp