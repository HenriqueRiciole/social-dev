<<<<<<< HEAD
import mongoose from "mongoose"

const UserSchema= new mongoose.Schema({
  firstName: { type: String, required: true, maxlength: 50},  
  lastName: { type: String, required: true, maxlength: 50},  
  user: { type: String, required: true, maxlength: 30, unique: true},  
  email: { type: String, required: true, maxlength: 100, unique: true},  
  password: { type: String, required: true},  
})


export default mongoose.models.User || mongoose.model('User', UserSchema)
=======
import mongoose from "mongoose";

const UserSchema= new mongoose.Schema({
    firstName:{type: String, required: true, maxlength: 50},
    lastName:{type: String, required: true, maxlength: 50},
    user:{type:String, required: true, maxlength:30, unique: true},
    email:{type:String, required: true, maxlength: 100, unique: true},
    password:{type:String, required: true}

})

export default mongoose.models.User || mongoose.model('User',UserSchema)
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
