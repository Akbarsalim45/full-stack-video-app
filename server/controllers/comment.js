import Comment  from "../models/Comment.js"
import Video  from "../models/Video.js"
import {customError} from '../error.js'
export const addComment = async (req,res,next) => {
    try{
        const comment = await Comment({userId:req.user.id,...req.body})
        await comment.save()
        res.status(200).json("commetn added succesfully")

    }catch(e){
        next(e)
    }

}

export const deleteComment = async (req,res,next) => {

    try{
        const comment = await Comment.findById(req.params.id)
        // const video = await Video.findById(req.params.id)

        if(req.user.id == comment.userId ){

            await Comment.findByIdAndDelete(req.param.id)
           res.status(200).json("comment deleted succesfully")
        }else return next(customError(403,' you can delete only your comment'))

    }catch(e){
        next(e)
    }
}


export const getComment = async (req,res,next) => {

    try{
        const comments = await Comment.find({ videoId:req.params.videoId})
        res.status(200).json(comments)
    }catch(e){
        next(e)
    }
}
