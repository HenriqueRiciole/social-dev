<<<<<<< HEAD
import styled from "styled-components"

const Button= styled.button`

  background-color: ${props=> props.theme.primary};
  padding: 15px 20px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color: ${props=> props.theme.white};
  font-size: 16px;
  transition: 0.3s;

  ${props=> !props.disabled && 'cursor: pointer;'}

  :hover{
    background-color: ${props=> props.theme.primaryHover};
    
  }
  :disabled{
    background-color: ${props=> props.theme.disabled};
  }
  
`



=======
import styled from "styled-components";

const Button= styled.button` 
  background-color:${props=> props.theme.primary};
  padding: 20px 15px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color:${props=> props.theme.white};
  font-size: 16px;
  transition: 0.4s;

  ${props=> !props.disabled && 'cursor:pointer;'}

  :hover {
    background-color: ${props=> props.theme.primaryHover};
  }

  :disabled{
    background-color: ${props=> props.theme.disabled};
  }

`

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
export default Button