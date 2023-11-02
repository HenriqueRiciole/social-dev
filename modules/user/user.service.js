<<<<<<< HEAD
import { hashPassword, comparePassword } from "../../utils/bcrypt"

import User from './user.model'

export  const signupUser= async (body) => {

=======
import {hashPassword, comparePassword} from '../../utils/bcrypt'

import User from './user.model'

export const signupUser= async (body)=> {
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
    try{
        const user={
            ...body,
            password: hashPassword(body.password)
        }
<<<<<<< HEAD
        
        const dbUser= await User.create(user)
        return dbUser
    }catch(err){

        throw err

   }

}

export const loginUser= async (body) => {
   try{
     const user= await User.findOne({
        $or: [
            {email: body.userOrEmail},
            {user: body.userOrEmail}
        ]
     })

     if (!user) throw new Error('not found')
     const passwordIsCorrect= comparePassword(body.password, user.password)
     if(!passwordIsCorrect) throw new Error('password incorrect')

     return user

   }catch(err){
    throw err
   }
=======

        const dbUser=await User.create(user)
        return dbUser
    }catch(err){
        throw(err)
    }
}

export const login= async (body) => {
    try{
        const user= await User.findOne({
            $or:[
              {email: body.userOrEmail},
              {user: body.userOrEmail}
            ]
           
        })

    if(!user) throw new Error('not found')
    const passwordIsCorrect= comparePassword(body.password, user.password)
    if(!passwordIsCorrect) throw new Error('password incorrect')

    return user

    }catch(err){
        throw err
    }
  
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
}