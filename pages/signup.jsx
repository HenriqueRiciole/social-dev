import { useState } from "react"
import styled from "styled-components"
<<<<<<< HEAD
import Link from "next/link"
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'
import { useRouter } from "next/router"

import { signupSchema } from '../modules/user/user.schema';

import ImageWithSpace from "../src/components/layout/ImageWithSpace";
import H1 from "../src/components/typography/H1";
import H2 from "../src/components/typography/H2";
import H4 from "../src/components/typography/H4";
import Button from "../src/components/inputs/Button";
import Input from "../src/components/inputs/Input";


const FormContainer = styled.div`
  margin-top: 60px;
` 

const Form= styled.form`
  display: flex;
  flex-direction: column;
=======
import Link from 'next/link'
import { useForm } from "react-hook-form"
import {joiResolver} from "@hookform/resolvers/joi"
import axios from "axios"
import { useRouter } from "next/router"

import { signupSchema } from "../modules/user/user.schema"

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
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
  margin: 20px 0;
  gap: 20px;
  
`

const Text= styled.p`
  text-align: center;
`

<<<<<<< HEAD
function SignupPage(){
  const router =  useRouter()
  const{control, handleSubmit, formState:{ errors}, setError}= useForm({
    resolver: joiResolver(signupSchema)
  })

 

  const handleForm= async(data)=> {
    try{
      const { status } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if( status === 201){
=======
function SignupPage(){ 
  const router= useRouter()
  const {control,handleSubmit, formState:{ errors},setError}= useForm({
    resolver: joiResolver(signupSchema)

  })

 
  const handleForm= async (data)=> {
    try{
      const {status}= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/user/signup`, data)
      if(status ===200){
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
        router.push('/')
      }
    }catch(err){
      if(err.response.data.code === 11000){
<<<<<<< HEAD
        setError(err.response.data.duplicatedKey,{
=======
        setError(err.response.data.duplicateKey, {
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
          type: 'duplicated'
        })
      }
    }
<<<<<<< HEAD
    }


  
  
  return(
        <ImageWithSpace>
           <H1># Social Dev</H1>
           <H4>Tudo que acontece no mundo dev, está aqui!</H4>
           <FormContainer>
              <H2>Crie sua conta.</H2>
              <Form onSubmit={handleSubmit(handleForm)}>
                <Input label="Nome" name="firstName" control={control}/>
                <Input label="Sobrenome" name="lastName" control={control}/>
                <Input label="Usuário" name="user" control={control}/>
                <Input label="Email " type="email" name="email" control={control}/>
                <Input label="Senha" type="password" name="password" control={control}/>
                <Button type="submit" disabled={Object.keys(errors).length> 0}>Cadastrar</Button>
              </Form>
              <Text>Já possue uma conta?<Link href="/login">Faça seu login.</Link></Text>
           </FormContainer>
        </ImageWithSpace>
    )
=======
  }

    return(
    <ImageWithSpace>
        <H1># Social Dev</H1>
        <H4>Tudo que acontece no mundo Dev, está aqui.</H4>
        <FormContainer>
            <H2>Crie sua conta</H2>
            <Form onSubmit={handleSubmit(handleForm)}>
              <Input Label="Nome" name="firstName" control={control}/>            
              <Input Label="Sobrenome" name="lastName" control={control}/>
              <Input Label="Usuário" name="user" control={control}/>
              <Input Label="Email" type="email" name="email" control={control}/>
              <Input Label="Senha" type="password" name="password" control={control}/>
              <Button type="submit" disabled={Object.keys(errors).length > 0}>Cadastrar</Button>
            </Form>
            <Text>Já possui uma conta? <Link href="/login">Faça seu login.</Link></Text>
        </FormContainer>
        
    </ImageWithSpace>
    )

>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}

export default SignupPage