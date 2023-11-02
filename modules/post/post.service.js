import Post from './post.model'

<<<<<<< HEAD

export const createPost= async (body, user) => {
    return await Post.create({
        text: body.text,
        createDate: new Date(),
        createBy: user.id
    })
}

export const getPosts= async (limit= 10)=> {
    return await Post.find()
    .populate('createBy', 'user')
    .sort({createDate: -1})
    .limit(limit)
}

export const deletePost= async (id, user)=> {
    return await Post.findOneAndDelete({
      _id: id,
      createBy: user.id
=======
export const createPost= async(body, user)=>{
    return await Post.create({
        text:body.text,
        createDate: new Date(),
        createdBy: user.id 
    })
}

export const getPosts= async( Limit= 15)=>{
    return await Post.find()
    .populate('createdBy','user' )
    .sort({createdDate: -1})
    .limit(Limit)
}

export const deletePost= async(id,user)=>{
    return await Post.findOneAndDelete({
        _id:id,
        createdBy: user.id
>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
    })
}