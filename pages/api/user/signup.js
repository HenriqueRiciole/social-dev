import Joi from 'joi'
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextconect'

import validate from '../../../lib/middlewares/validation'
import { ironConfing } from '../../../lib/middlewares/ironsession'

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
        console.error(err)
        throw(err)
    }
 })


export default withIronSessionApiRoute(signup, ironConfing)