import jwt from 'jsonwebtoken'
import { customError} from './error.js'
export const verifyToken = async (req,res,next) =>{
    const token = req.headers?.authorization?.split(' ')[1]
         if(!token) return  next(customError(401,'you are not authenticated'))
    const user = await jwt.verify(token,process.env.JWT_SECRET)
         if(!user) return next(customError(403,'invalid token'))
        req.user=user
        next()
}