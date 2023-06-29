import {forwardRef} from 'react'
import styled from "styled-components";

const InputContainer= styled.div`
  width: 100%;

`
const StyleLabel= styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-botton: 5px

`

const StyleInput= styled.input`
  width: 100%;
  border: 1px solid ${props=> props.theme.inputBorder};
  background-color:${props=> props.theme.inputBackground};
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 10px;

`

const Input= forwardRef(
  ({Label, ...props}, ref)=> {
    return(
      <InputContainer>
        <StyleLabel>{Label}</StyleLabel>
        <StyleInput placeholder={Label} {...props} ref={ref}/>
      </InputContainer>

    )

})

export default Input