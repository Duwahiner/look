import { Box } from 'rebass'
import Proptypes from 'prop-types'
import { Title } from './style'

export const StateNumber = ({ counter }) => {
  return (
    <Box width='auto'> 
      <Title> {counter} </Title>
    </Box>
  )
}

StateNumber.propTypes = {
  counter: Proptypes.number
}

StateNumber.defaultProps = {
  counter: 0
}
