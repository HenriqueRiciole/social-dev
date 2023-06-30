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

  ${props=> props.error && `border:2px solid ${props.theme.error};`}

  &:focus{
    outline:none;
  }

`

const ErrorLabel= styled.span`
 color:${props=> props.theme.error};
 font-weight: bold;
 font - size: 14px;
`

const errorMessage={
  'string.empty': 'Este campo é obrigatório',
  'string.email': 'Por favor, digite um e-mail válido.'
}

const Input= forwardRef(({Label, error, ...props}, ref)=> {
  
    return(
      <InputContainer>
        <StyleLabel>{Label}</StyleLabel>
        <StyleInput placeholder={Label} error={error} {...props} ref={ref}/>
        {error && <ErrorLabel> {errorMessage[error.type] || error.message}</ErrorLabel>}
      </InputContainer>
    )
})

export default Input