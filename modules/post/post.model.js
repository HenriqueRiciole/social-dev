<<<<<<< HEAD
import mongoose from "mongoose"

import User from "../user/user.model"

const PostSchema= new mongoose.Schema({
    text:{ type: String, required: true, maxlength: 256},
    createDate:{ type: Date, required: true},
    createBy:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
})

export default mongoose.models.Post || mongoose.model( 'Post', PostSchema)
=======
import mongoose from 'mongoose'

import User from '../user/user.model'

const PostSchema= new mongoose.Schema({
    text:{type: String, required: true, length: 256},
    createDate:{type:Date, required: true},
    createdBy:{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'}
})

export default mongoose.models.Post || mongoose.model('Post', PostSchema) 
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
