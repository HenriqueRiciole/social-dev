import styled from "styled-components";
<<<<<<< HEAD
import moment from "moment/moment";
import axios from "axios";
import { useSWRConfig } from "swr";

import Menu from "../navigation/menu";

const PostContainer= styled.div`
  background-color: ${props=> props.theme.white};
  padding: 20px;
  border-radius: 10px;
=======
import moment from 'moment'
import { useSWRConfig } from "swr";

import Menu from "../navigation/Menu";

const PostContainer= styled.div`
  background-color:${props=> props.theme.white};
  padding:20px;
  border-radius:10px;

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
`

const StyledUsername= styled.p`
  font-weight: bold;
  font-size: 18px;
`
<<<<<<< HEAD

const StyledDate= styled.p`
  font-size: 12px;
`
const ContainerText= styled.div`
  margin-top: 10px;
`
const ContainerMenu= styled.div`
  float: right;
=======
const StyledDate= styled.p`
  font-size: 12px;
`

const ContainerText= styled.div`
  margin-top: 10px;
`

const ContainerMenu= styled.div`
  float:right

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
`

function Post({text, user, date, isOwner, id}){
  const {mutate}= useSWRConfig()

<<<<<<< HEAD
  const handleEdit= async ()=> {
    console.log("EDITAR PUBLICAÇÃO")
  }

  const handleDelete= async ()=> {
    try{
      const response= await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        data:{
          id
        }
      })
      if(response.status === 200)
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post}`)
    }catch(err){

    }
  }


  return(
    <PostContainer>
      {
        isOwner &&
        <ContainerMenu>
          <Menu
            options={[
              {
                text: 'Editar Publicação',
                onClick: handleEdit
              },
              {
                text: 'Deletar Publicação',
                onClick: handleDelete
              }
            ]}
            />
        </ContainerMenu>       
      }
        <StyledUsername>@{user}</StyledUsername>
        <StyledDate>{moment(date).format('LLL')}</StyledDate>
        <ContainerText>
          {text}
        </ContainerText>
    </PostContainer>
  )
  
=======
  const handleEdit=async()=>{
    console.log("EDITAR")
  }

  const handleDelete=async()=>{
    try{
     const response= await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/post`,{
       data:{
        id
       }
     })
     if(response.status === 200){
      mutate(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
     }
    }catch(err){
      console.log(err)
    }
  }

  return(
    <PostContainer>
      {
        isOwner && 
        <ContainerMenu>
        <Menu
         options={[
          {
            text:'Editar Publicação',
            onClick:handleEdit
          },
          {
            text:'Deletar Publicação',
            onClick:handleDelete
          }
         ]}
        />
      </ContainerMenu>
      }
      
      <StyledUsername>@{user}</StyledUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
       {text}
      </ContainerText>
    </PostContainer>

  )
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}

export default Post