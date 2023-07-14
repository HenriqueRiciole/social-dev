import {withIronSessionApiRoute} from 'iron-session/next'

import createHandler from '../../../lib/middlewares/nextconect'
import { ironConfig } from '../../../lib/middlewares/ironsession'

const logout= createHandler()

logout.post(async (req, res)=>{
  req.session.destroy()
  res.send({ok:true})
})

export default withIronSessionApiRoute(logout, ironConfig)