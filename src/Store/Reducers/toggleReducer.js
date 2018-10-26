
const toggleReducer = (stateProperty = false, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return !stateProperty
    default:
      return stateProperty
  }
}

export default toggleReducer
