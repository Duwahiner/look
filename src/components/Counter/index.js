import { useCallback, useContext } from 'react'
import { Flex } from 'rebass'
import { CounterCurrent } from '../CounterCurrent'
import { AppContex } from '../../contex'

const Counter = (props) => {
  const { state, dispatch } = useContext(AppContex)

  const handleChange = useCallback(({ target }) => {
    if (target.value !== '') {
    if (target.value > -1 && target.value < 11 )
    dispatch({ type: 'GET_VALUE', payload: { increment: +target.value }})
    }
  }, [ dispatch ])

  const handleIncrem = useCallback(() => {
    dispatch({ type: 'INCREMENT', payload: { counter: state.increment }})
  }, [ state, dispatch ])

  const handleDecrem = useCallback(() => {
    if( state.counter !== 0)
      dispatch({ type: 'DECREMENT', payload: { counter: state.increment }})
  }, [ state, dispatch ])

  return (
   <Flex width={1}>
    <CounterCurrent
      handleChange={handleChange}
      handleIncrem={handleIncrem}
      handleDecrem={handleDecrem}
      value={state.increment}
      counter={state.counter}
    />
   </Flex>
  )
}

export default Counter