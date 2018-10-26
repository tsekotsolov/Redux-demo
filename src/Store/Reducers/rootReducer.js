import toggle from './toggleReducer'
import counters from './countersReducer'
import { combineReducers } from 'redux'

const initalState = {
  counters: []
}

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
      // spreading the state and overwriting it`s isOn property
        ...state,
        toggle: toggle(state.toggle, action)
      }

    case 'ADD_COUNTER':
      return counters(state, action)

    case 'REMOVE_COUNTER':
      return counters(state, action)

    case 'INCREMENT':
      return counters(state, action)

    case 'DECREMENT':
      return counters(state, action)

    default:
      return state
  }
}

export default rootReducer
