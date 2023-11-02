<<<<<<< HEAD
import Joi from "joi"

import joiObjectid from "joi-objectid"
Joi.objectID= joiObjectid(Joi)
=======
import Joi from "joi";
import joiObjectid from "joi-objectid";
Joi.objectId= joiObjectid(Joi)
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c

export const createPostSchema= Joi.object({
    text: Joi.string().required().max(256)
})

<<<<<<< HEAD
export const deletePostSchema= Joi.object ({
  id: Joi.objectID().required()
=======
export const deletePostSchema= Joi.object({
    id: Joi.objectId().required()
    
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
})