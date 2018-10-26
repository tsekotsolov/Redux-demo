
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':

      return {
        ...state,
        // modifies counters array in an immutable way
        // adds an element at the end of the array
        counters: [...state.counters, {
          count: 0,
          color: 'green'
        }]
      }

    case 'REMOVE_COUNTER':

      return {
        ...state,
        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the part AFTER the given index
        // the element at the given index is immutably removed
        counters: [...state.counters.slice(0, action.index),
          ...state.counters.slice(action.index + 1)]
      }

    case 'INCREMENT':
      return {
        ...state,
        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the updated NEW value and after, that concats it with the part AFTER the given index
        counters: [...state.counters.slice(0, action.index),
          { count: state.counters[action.index].count + 1, color: 'blue' },
          ...state.counters.slice(action.index + 1)]
      }

    case 'DECREMENT':

      return {
        ...state,
        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the updated NEW value and after, that concats it with the part AFTER the given index
        counters: [...state.counters.slice(0, action.index),
          { count: state.counters[action.index].count - 1, color: 'red' },
          ...state.counters.slice(action.index + 1)]
      }

    default:
      return state
  }
}

export default counterReducer
