import mongoose from 'mongoose';

const MONGOOB_URI= process.env.MONGOOB_URI

const databaseMiddleware= async (req, res, next)=> {
    try{
      if(!global.mongoose) {
        global.mongoose= await mongoose.connect(MONGOOB_URI)
        
      }
    }catch (err) {
        console.error(err)
        res.status(500).send('database error')
    }
    return next()
}

export default databaseMiddleware