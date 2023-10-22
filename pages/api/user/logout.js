import { withIronSessionApiRoute } from "iron-session/next"

import createHandler from '../../../lib/middleware/nextconnect'
import { ironConfig } from '../../../lib/middleware/ironSession'

const logout= createHandler()
logout.post(async (req, res)=> {
  req.session.destroy()
  res.send({ ok: true})
})

export default withIronSessionApiRoute(logout, ironConfig)