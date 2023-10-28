import { useEffect, useState } from "react"
import styled from "styled-components"
import { withIronSessionSsr } from "iron-session/next"
import axios from "axios"
import useSWR from "swr"

import { ironConfig } from "../lib/middleware/ironSession"

import Navbar from "../src/components/layout/Navbar"
import Container from "../src/components/inputs/Container"
import CreatePost from "../src/components/cards/CreatePost"
import H3 from "../src/components/typography/H3"
import Post from "../src/components/cards/Post"

const Content= styled.div`
  margin: 50px 0;
`

const LastPostText=styled.div`
  padding: 40px 0;
`
/* outra maneira de fazer 
const LastPostText= styled(H3)`
  padding: 40px 0;
`*/

const RefreshPost= styled.span`
  font-weight: bold;
  color: ${props=> props.theme.primary};
  cursor: pointer;
`

const RefreshContainer= styled.div`
  text-align: center;
`
const PostContainer= styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   margin-top: 20px;
`

const fetcher= url => axios.get(url).then(res=> res.data)

function HomePage ({ user }) {
  const { data }= useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, fetcher)  

 /*
 Foi comentada a parte feita somente com axios, a parte que não está comentada utiliza swr 
 const [data, setData]= useState([])

  const handlerPost= async ()=> {  
    const response= await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/post`)
    setData(response.data)
  }
  
  useEffect(()=> {
    handlerPost()
  }, [])

  console.log(data)
  */
  return (
    <>
      <Navbar/>
      <Content>
        <Container>
          <CreatePost username= {user.user}/>
          <LastPostText>
            <H3>Últimas postagens:</H3>
          </LastPostText>
          <RefreshContainer>
            <RefreshPost> Carregar novas postagens.</RefreshPost>
          </RefreshContainer>
          <PostContainer>
            {
              data?.map(post=> 
                  <Post
                    key={post._id}
                    text={post.text}
                    user={post.createBy.user}
                    date={post.createDate}
                  />
                )
            }
          </PostContainer>
        </Container>
      </Content>
    </>
  )
}

export const getServerSideProps= withIronSessionSsr(
   async function getServerSideProps({req}){
    const user= req.session.user
    
    if(!user){
      return{
        redirect:{
          permanent: false,
          destination: '/login'
        }
      }
    }

  return{
    props:{
      user
    }
  }
}, ironConfig)


export default HomePage