import styled from '@emotion/styled'

const Describe = styled.span`
  font-family: RalewayBold;
  font-size: 1.3em;
  color: #dee2e6;
`
const Text = styled.span`
  font-family: RalewayBold;
  font-size: 1em;
  color: #FF5733;
`

const Button = styled.button`
  width: 130px;
  height: 45px;
  font-family: RalewayBold;
  font-size: 1em;
  color: #000;
  background: transparent;
  border: solid 1px #000;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const Display = styled.input`
  width: 105px;
  height: 45px;
  padding: 0px 20px;
  font-family: RalewayBold;
  font-size: 1.5em;
  color: #000;
  outline: none;
  background: transparent;
  border: solid 1px #000;
  border-radius: 40px;
  transition: all 0.3s;
  &::placeholder {
    color: #dee2e6;
    font-family: RalewayRegular;
    font-size: 0.9em;
  }
`

export { Button, Describe, Display, Text }
