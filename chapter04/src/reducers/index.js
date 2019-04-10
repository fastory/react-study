import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import users from './users'

export default combineReducers({
  todos,
  users,
  visibilityFilter
})
