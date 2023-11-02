<<<<<<< HEAD
import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from '../../../lib/middleware/nextconnect'
import { ironConfig } from '../../../lib/middleware/ironSession'

const logout= createHandler()
logout.post(async (req, res)=> {
  req.session.destroy()
  res.send({ ok: true})
=======
import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextconect'
import { ironConfig } from '../../../lib/middlewares/ironsession'

const logout= createHandler()

logout.post(async (req, res)=>{
  req.session.destroy()
  res.send({ok:true})
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
})

export default withIronSessionApiRoute(logout, ironConfig)