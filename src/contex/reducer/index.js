
export const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + payload.counter
      }

    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - payload.counter
      }

    case 'GET_VALUE':

      return {
        ...state,
        increment: payload.increment
      }
    
    default:
    return state
  }
}