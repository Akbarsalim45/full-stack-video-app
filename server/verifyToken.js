import jwt from 'jsonwebtoken'
import { customError} from './error.js'
export const verifyToken = async (req,res,next) =>{
    const token = req.cookies.access_token
         if(!token) return  next(customError(401,'you are not authenticated'))
    const user = await jwt.verify(req.cookies.access_token,process.env.JWT_SECRET)
         if(!user) return next(customError(403,'invalid token'))
        req.user=user
        next()
}