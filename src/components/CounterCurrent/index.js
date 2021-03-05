import { Flex, Box } from 'rebass'
import Proptypes from 'prop-types'
import { Button, Describe, Display, Text } from './style'
import { StateNumber } from '../StateNumber'

export const CounterCurrent = ({
  handleIncrem,
  handleDecrem,
  handleChange,
  value,
  counter
}) => {

  return (
    <Flex width={1} flexDirection='column'>
        <Flex width={1} flexDirection='column' alignItems='center' mt='-70px'>
          <StateNumber counter={counter} />
          <Box mt={-2} display='inline'> 
            <Describe> Contador incremental React contex </Describe>
          </Box>
        </Flex>

        <Flex mt={6} justifyContent='center'>
            <Box width='auto' > <Button onClick={handleDecrem}> Decrem - </Button> </Box>
            <Flex flexDirection='column' alignItems='center' mx='20px' mt='-30px'>
              <Box mb='10px'>
                <Text> Inicialización de incremento </Text>
              </Box>

              <Box width='auto' mx='20px'>
                <Display placeholder='Value:' type='number' value={value} onChange={handleChange} />
              </Box>
            </Flex>
            <Box width='auto'> <Button onClick={handleIncrem}> Increm + </Button> </Box>
        </Flex>
    </Flex>
  )
}

CounterCurrent.propTypes = {
  handleIncrem: Proptypes.func,
  handleDecrem: Proptypes.func,
  handleChange: Proptypes.func,
  value: Proptypes.number,
  counter: Proptypes.number
}

CounterCurrent.defaultProps = {
  value: 0,
  counter: 0
}
