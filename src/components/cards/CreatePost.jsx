import styled from "styled-components";

import H4 from '../typography/H4' 
import Textarea from "../inputs/TextArea";
import Button from "../inputs/Button"


const PostContainer= styled.div`
  background-color: ${props=> props.theme.white};
  padding: 20px 40px;

  @media (max-width: 500px){
    padding:20px;
  }
`
const Title= styled.div`
  font-weight: bold;
  text-align: center;
`

const TextContainer= styled.div`
  padding: 20px 0;
  width: 100%;
  
`

const BottonContainer= styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 500px){
    flex-direction: column-reverse;
    gap: 5px;
  }
`

const BottonText= styled.p`
  flex: 1;
  font-weight: bolder;
`

function CreatePost({username}){
  return(

     <PostContainer>
        <H4><Title>No que você está pensando, @{username}?</Title></H4>
        <TextContainer>
            <Textarea placeholder= "Digite sua mensagem" rows= "4"/>
        </TextContainer>
        <BottonContainer>
            <BottonText>
                A sua mensagem será pública.
            </BottonText>
            <Button>Enviar Mensagem</Button>
        </BottonContainer>
     </PostContainer>
  )
 
}

export default CreatePost