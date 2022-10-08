import mongoose from 'mongoose'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import { customError } from '../error.js'
import jwt from 'jsonwebtoken'

export const signUp = async (req,res,next) => {

    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User( {
            ...req.body,
            password:hash
        })
        await newUser.save()
        res.status(200).json({message:'user created successfully'})
    }catch(err){
        next( err)
    }
}

export const signIn = async (req,res,next) => {

    try{
       const user = await User.findOne({email:req.body.email})
       if(!user) return  next(customError(404,"User not found"))
       const {password,...otherDetails} =user._doc
       
       const passCheck = await bcrypt.compare(req.body.password, user.password)
       if(!passCheck) return next(customError(404,'Wrong credentials'))
       
       const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
       
       res.cookie('access_token',token,{
        httpOnly:true
       }).status(200).json(otherDetails)

    }catch(err){
        next( err)
    }
}

