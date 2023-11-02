<<<<<<< HEAD
import Joi from "joi";

export const signupSchema= Joi.object({
    firstName: Joi.string().required().max(50).message('O campo "nome" pode ter no máximo {{#limit}} caracteres.'),
    lastName: Joi.string().required().max(50).message('O campo "sobrenome" pode ter no máximo {{#limit}} caracteres.'),
    user: Joi.string().required().max(30).message('O campo "usuário" pode ter no máximo {{#limit}} caracteres.'),
    email: Joi.string().email({tlds:{allow: false}}).required().max(100).message('O campo "email" pode ter no máximo {{#limit}} caracteres.'),
    password: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres.')
    .min(6).message('O campo "senha" precisa ter no mínimo {{#limit}} caracteres.'),
    
  })


export const loginSchema= Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required()
    .max(50).message('O campo "senha" pode ter no máximo {{#limit}} caracteres.')
    .min(6).message('O campo "senha" precisa ter no mínimo {{#limit}} caracteres.'),
})
  
=======
import Joi from 'joi'

export const signupSchema= Joi.object({
    firstName:Joi.string().required().max(50).message('O campo "nome" só pode ter {{#limit}} caracteres. '),
    lastName:Joi.string().required().max(50).message('O campo "sobrenome" só pode ter {{#limit}} caracteres. '),
    user:Joi.string().required().max(30).message('O campo "usuário" só pode ter {{#limit}} caracteres. '),
    email:Joi.string().email({tlds: {allow: false}}).required().max(100).message('O campo "email" só pode ter {{#limit}} caracteres. '),
    password:Joi.string().required().max(50).message('O campo "senha" só pode ter {{#limit}} caracteres. ').min(6).message('O campo "senha" precisa ter no mínimo {{#limit}} caracteres. '),
})

export const loginSchema= Joi.object({
    userOrEmail: Joi.string().required(),
    password: Joi.string().required().max(50).message('O campo "senha" só pode ter {{#limit}} caracteres. ').min(6).message('O campo "senha" precisa ter no mínimo {{#limit}} caracteres. ')
  })
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
