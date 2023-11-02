<<<<<<< HEAD
import styled from "styled-components"
import { useForm } from "react-hook-form"
import { joiResolver} from "@hookform/resolvers/joi"
import axios from "axios"
import { useSWRConfig } from "swr"

import { createPostSchema} from "../../../modules/post/post.schema"

import H4 from '../typography/H4' 
import ControllerTextarea from "../inputs/ControllerTextarea"
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
  const {mutate} = useSWRConfig()
  const{control, handleSubmit, formState: {isValid}, reset}= useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })

  const onSubmit= async (data)=> {
    const response=await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
    if( response.status === 201){
=======
import styled from "styled-components";
import { useForm } from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import axios from "axios";
import { useSWRConfig } from "swr";

import {createPostSchema} from '../../../modules/post/post.schema'

import H4 from "../typography/H4"
import ControlledTextarea from "../inputs/ControlledTextarea";
import Button from "../inputs/Button"

const PostContainer= styled.div`
  background-color:${props=>props.theme.white};
  padding: 20px 40px;

  @media(max-width:500px){
    padding: 20px
  }
`
const Title=styled.div`
  font-weight: bold;
  text-align:center;
`

const TextContainer= styled.div`
  margin: 20px 0;
  width:100%;

`

const BottomContainer= styled.div`
  display:flex;
  align-items:center;
  gap:5px;

  @media(max-width:500px){
    flex-direction: column-reverse;
  }
`

const BottomText= styled.p`
  flex:1;
`


function CreatePost( {username}){
  const {mutate}= useSWRConfig()
  const {control, handleSubmit, formState:{isValid}, reset}= useForm({
    resolver: joiResolver(createPostSchema),
    mode:'all'
  })

  const onSubmit= async (data)=>{
    const response= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, data)
    if(response.status === 201){
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
      reset()
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    }
  }
<<<<<<< HEAD

  return(

     <PostContainer>
        <H4><Title>No que você está pensando, @{username}?</Title></H4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextContainer>
            <ControllerTextarea
             placeholder= "Digite sua mensagem" 
             rows= "4" 
             control= {control}
             name= "text"
             maxLength= "256"
             />
          </TextContainer>
          <BottonContainer>
            <BottonText>
               A sua mensagem será pública.
            </BottonText>
            <Button disabled= {!isValid}>Postar Mensagem</Button>
          </BottonContainer>
        </form>
     </PostContainer>
  )
 
=======
    return(
        <PostContainer>
            <H4>
                <Title>
                   No que você está pensando @{username}?
                </Title>
            </H4>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextContainer>
                <ControlledTextarea placeholder="Digite sua mensagem." 
                rows={4} 
                control={control}
                name="text"
                maxLength="256"/>
              </TextContainer> 
              <BottomContainer>
                <BottomText>A sua mensagem será pública.</BottomText>
                <Button disabled={!isValid}>Postar Mensagem</Button>
              </BottomContainer>
            </form>   
        </PostContainer>
    )

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}

export default CreatePost