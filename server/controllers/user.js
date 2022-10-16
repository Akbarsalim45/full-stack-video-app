import User from '../models/User.js'
import Video from '../models/Video.js'

import {customError} from '../error.js'

export const updateUser = async (req,res,next) => {
    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {
                new:true
            }
            )
            const {password,...otherDetails} =updatedUser._doc
            res.status(200).json(otherDetails)
        }catch(e){
            next(e)
        }
    }else return next(customError(403,'you can edit only your acccount'))
}


export const deleteUser = async (req,res,next) => {
    if(req.params.id === req.user.id){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted")
        }catch(e){
            next(e)
        }
    }else return next(customError(403,'you can delete only your acccount'))
}

export const getUser = async (req,res,next) => {

    try{
        const user = await User.findById(req.params.id)
        const {password,...otherDetails} =user._doc
        res.status(200).json(otherDetails)

    }catch(e){
        next(e)
    }
}


export const subscribe = async (req,res,next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:1}
        })
        res.status(200).json("subscription successfull")
    }catch(e){
        next(e)
    }
}


export const unSubscribe = async (req,res,next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        })
        await User.findByIdAndUpdate(req.params.id,{
            $inc:{subscribers:-1}
        })
        res.status(200).json("unsubscription successfull")
    }catch(e){
        next(e)
    }
}

export const likeVideo = async (req,res,next) => {
    try{
        const likeVideo = await Video.findByIdAndUpdate(req.params.videoId,{
            $addToSet: {likes:req.user.id},
            $pull: {dislikes:req.user.id}
        })
        res.status(200).json('video liked successfully')

    }catch(e){
        next(e)
    }
}
export const dislikeVideo = async (req,res,next) => {

    try{
        const dislike = await Video.findByIdAndUpdate(req.params.videoId,{
            $addToSet: {dislikes:req.user.id},
            $pull: {likes:req.user.id}
        })
        res.status(200).json('video disliked successfully')

    }catch(e){
        next(e)
    }
}
