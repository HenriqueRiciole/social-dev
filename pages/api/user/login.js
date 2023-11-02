<<<<<<< HEAD
import Joi from 'joi'
import { withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middleware/nextconnect'
import validate from '../../../lib/middleware/validation'
import { loginUser } from '../../../modules/user/user.service'

import { ironConfig } from '../../../lib/middleware/ironsession'
import {loginSchema} from '../../../modules/user/user.schema'
=======
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextconect'
import validate from '../../../lib/middlewares/validation'
import { login} from '../../../modules/user/user.service'

import { ironConfig } from '../../../lib/middlewares/ironsession'
import { loginSchema } from '../../../modules/user/user.schema'
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c



const handler= createHandler()

<<<<<<< HEAD
handler.post(validate ({body: loginSchema}), async (req, res)=>{
    try{
        const user= await loginUser(req.body)
        req.session.user= {
            id: user._id,
            user: user.user
        }
        await req.session.save()
        res.send({ok: true})
    }catch(err){
        return res.status(400).send(err.message)
    }
=======
handler.post(validate({body: loginSchema}), async (req, res)=>{
  try{
    const user= await login(req.body)
    req.session.user={
      id: user._id,
      user: user.user
    }
    await req.session.save()
    res.send({ok: true})

  }catch(err){
    return res.status(400).send(err.message)
  }
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
})

export default withIronSessionApiRoute(handler, ironConfig)