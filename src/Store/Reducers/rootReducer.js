import toggle from './toggleReducer'
import counters from './countersReducer'
import { combineReducers } from 'redux'

let rootReducer = combineReducers({
  toggle,
  counters
})

export default rootReducer
