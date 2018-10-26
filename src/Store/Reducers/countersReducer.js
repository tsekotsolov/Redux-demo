
const counterReducer = (counters = [], action) => {
  switch (action.type) {
    case 'ADD_COUNTER':

      return (
        // modifies counters array in an immutable way
        // adds an element at the end of the array
        [...counters, {
          count: 0,
          color: 'green'
        }]
      )

    case 'REMOVE_COUNTER':

      return (

        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the part AFTER the given index
        // the element at the given index is immutably removed
        [...counters.slice(0, action.index),
          ...counters.slice(action.index + 1)]
      )

    case 'INCREMENT':
      return (
        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the updated NEW value then, concats it with the part AFTER the given index
        [...counters.slice(0, action.index),
          { count: counters[action.index].count + 1, color: 'blue' },
          ...counters.slice(action.index + 1)]
      )

    case 'DECREMENT':

      return (
        // modifies counters array in an immutable way
        // takes the part of the array PRIOR the given index an concats it with the updated NEW value then, concats it with the part AFTER the given index
        [...counters.slice(0, action.index),
          { count: counters[action.index].count - 1, color: 'red' },
          ...counters.slice(action.index + 1)]
      )

    default:
      return counters
  }
}

export default counterReducer
