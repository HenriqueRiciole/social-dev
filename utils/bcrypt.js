import bcryptjs from 'bcryptjs'

<<<<<<< HEAD
export const hashPassword= (password)=> 
  bcryptjs.hashSync(password)

=======
export const hashPassword= (password)=>
  bcryptjs.hashSync(password)


>>>>>>> 4389f275f3e925532b25baeb740b85c60cf2984c
export const comparePassword= (password, hash)=>
  bcryptjs.compareSync(password, hash)  