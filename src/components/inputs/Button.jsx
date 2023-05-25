import styled from "styled-components";

const Button= styled.button` 
  background-color:${props=> props.theme.primary};
  padding: 20px 15px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  color:${props=> props.theme.white};
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    background-color: ${props=> props.theme.primaryHover};
  }

`

export default Button