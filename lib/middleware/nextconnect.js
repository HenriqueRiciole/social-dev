import connect from 'next-connect'

import mongooseMiddleware from './mogoose'

export default function createHandler() {
     return connect().use(mongooseMiddleware)
}