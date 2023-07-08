import styled from "styled-components";
import { useController } from "react-hook-form";

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
  'string.email': 'Por favor, digite um e-mail válido.',
  'duplicated': 'Já existe uma conta registrada com este valor'
}

const Input= ({Label, name, control, defaultValue='', ...props})=> {
  const {
    field:{value, onChange},
    fieldState:{error}

  }= useController({ name, control ,defaultValue })
    return(
      <InputContainer>
        <StyleLabel>{Label}</StyleLabel>
        <StyleInput placeholder={Label} error={error} {...props} value={value} onChange={onChange}/>
        {error && <ErrorLabel> {errorMessage[error.type] || error.message}</ErrorLabel>}
      </InputContainer>
    )
}

export default Input