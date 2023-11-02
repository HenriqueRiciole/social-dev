import Joi from "joi"

import joiObjectid from "joi-objectid"
Joi.objectID= joiObjectid(Joi)

export const createPostSchema= Joi.object({
    text: Joi.string().required().max(256)
})

export const deletePostSchema= Joi.object ({
  id: Joi.objectID().required()
})