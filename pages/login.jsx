<<<<<<< HEAD
import styled from "styled-components";
import Link from "next/link";
import {useForm} from 'react-hook-form' 
import{joiResolver} from '@hookform/resolvers/joi'
import axios from 'axios'
import{useRouter} from 'next/router'

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H1 from "../src/components/typography/H1";
import H2 from "../src/components/typography/H2";
import H4 from "../src/components/typography/H4";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";
import { loginSchema } from "../modules/user/user.schema";


const FormContainer = styled.div`
  margin-top: 60px;
` 

const Form= styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 20px;
  
=======
import styled from "styled-components"
import Link from 'next/link'
import{ useForm } from 'react-hook-form'
import { joiResolver} from '@hookform/resolvers/joi'
import axios from "axios"
import{ useRouter} from "next/router"

import { loginSchema } from "../modules/user/user.schema"

import ImageWithSpace from "../src/components/layout/ImageWithSpace"

import H1 from "../src/components/typography/H1"
import H2 from "../src/components/typography/H2"
import H4 from "../src/components/typography/H4"
import Button from "../src/components/inputs/Button"
import Input from "../src/components/inputs/Input"

const FormContainer= styled.div`
  margin-top: 60px;
`

const Form= styled.form`
  display: flex;
  flex-direction:column;
  margin: 20px 0;
  gap: 20px;
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
`

const Text= styled.p`
  text-align: center;
`

<<<<<<< HEAD
function LoginPage(){
  const router= useRouter()
  const{control, handleSubmit, formState:{ errors}, setError}= useForm({
    resolver: joiResolver(loginSchema)
  })

  const onSubmit= async (data)=> {
    try{
      const{ status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
        if(status === 200){
          router.push('/')
        } 
=======
function LoginPage(){ 
  const router= useRouter()
  const {control,handleSubmit, formState:{ errors},setError}= useForm({
    resolver: joiResolver(loginSchema)

  })
  const onSubmit= async (data)=>{
    try{
      const {status}= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/login`, data)
      if(status === 200){
        router.push('/')
      }  
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
    }catch({response}){
      if(response.data === 'password incorrect'){
        setError('password', {
          message: 'A senha está incorreta.'
        })
<<<<<<< HEAD
      }else if(response.data === 'not found'){
=======
      }
      else if(response.data === 'not found'){
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
        setError('userOrEmail',{
          message: 'Usuário ou e-mail não encontrado.'
        })
      }
<<<<<<< HEAD
    }
  }
    return(
        <ImageWithSpace>
           <H1># Social Dev</H1>
           <H4>Tudo que acontece no mundo dev, está aqui!</H4>
           <FormContainer>
              <H2>Entre em sua conta</H2>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Input label="Email ou usuário"  name= "userOrEmail" control={control}/>
                <Input label="Senha" type="password" name="password" control={control}/>
                <Button type="submit" disabled={Object.keys(errors).length> 0}>Entrar</Button>
              </Form>
              <Text>Não possue uma conta?<Link href="/signup">Faça seu cadastro.</Link></Text>
           </FormContainer>
        </ImageWithSpace>
    )
=======
           }
    
  }
    return(
    <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo Dev, está aqui.</H4>
        <FormContainer>
            <H2>Entre em sua conta</H2>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Input Label="Email ou Usuário"  name= "userOrEmail" control={control}/>
              <Input Label="Senha" type="password" name="password" control={control}/>
              <Button type="submit" disabled={Object.keys(errors).length > 0}>Entrar</Button>
            </Form>
            <Text>Não possui uma conta? <Link href="/signup">Faça seu cadastro.</Link></Text>
        </FormContainer>
        
    </ImageWithSpace>
    )

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}

export default LoginPage