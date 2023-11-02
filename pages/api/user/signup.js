import Joi from 'joi'
<<<<<<< HEAD
import { withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middleware/nextconnect'
import validate from '../../../lib/middleware/validation'
import { signupUser } from "../../../modules/user/user.service"
import { signupSchema } from '../../../modules/user/user.schema'

import { ironConfig } from '../../../lib/middleware/ironsession'




const signup= createHandler()
  
signup.post(validate({body: signupSchema}),async (req, res)=> {
    try{
      const user= await signupUser(req.body)
      req.session.user= {
        id: user._id,
        user: user.user
    }
      await req.session.save()
    
      res.status(201).json({ok: true})
    } catch(err){
      if( err.code === 11000){
        return  res.status(400).send({
          code: 11000,
          duplicatedKey: Object.keys(err.keyPattern)[0]
        })
      }
      throw err
    } 
  
  })

=======
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextconect'

import validate from '../../../lib/middlewares/validation'
import { ironConfig } from '../../../lib/middlewares/ironsession'

import { signupUser} from '../../../modules/user/user.service'
//teve que abrir as chaves pq não é um export default
import { signupSchema } from '../../../modules/user/user.schema'



const signup= createHandler()
 
signup.post(validate({body:signupSchema}),async (req, res)=>{
    try{
        const user= await signupUser(req.body)
        req.session.user={
            id: user._id,
            user: user.user
          }
          await req.session.save()
        res.status(201).json({ok: true})
    }catch(err){
        if(err.code === 11000){
            return res.status(400).send({
                code: 11000,
                duplicateKey: Object.keys(err.keyPattern)[0]
            })
        }
        console.error(err)
        throw(err)
    }
 })
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c


export default withIronSessionApiRoute(signup, ironConfig)