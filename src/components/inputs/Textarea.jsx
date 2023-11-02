import styled from "styled-components";

const Textarea= styled.textarea`
<<<<<<< HEAD
  resize: none;
  width: 100%;
  padding  15px 20px;
  box-sizing: border-box;
  border:  1px solid ${props=>props.theme.inputBorder};
  background-color: ${props=>props.theme.inputBackground};
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;  

`


=======
  resize:none;
  width: 100%;
  padding: 15px 20px;
  box-sizing:border-box;
  border: 1px solid ${props=> props.theme.inputBorder};
  background-color:${props=> props.theme.inputBackground};
  border-radius:10px;
  font-family:'Roboto', sans-serif;
  font-size: 14px;
`

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
export default Textarea