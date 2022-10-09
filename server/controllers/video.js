import {customError} from '../error.js'
import Video from '../models/Video.js'
import User from '../models/User.js'


export const addVideo = async (req,res,next) => {
    try{
        const addVideo = await Video({
            userId:req.user.id,
            ...req.body
        })
        await addVideo.save()
        res.status(200).json(addVideo)
    }catch(e){
        next(e)
    }
} 


export const updateVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(404,'video not found')

        if(video.userId === req.user.id){
            const updatedVideo = await Video.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedVideo)
        }else return next(403,'you can update your videos only')

    }catch(e){
        next(e)
    }
} 


export const deleteVideo = async (req,res,next) => {
    try{
        const video = await Video.findById(req.params.id)
        if(!video) return next(404,'video not found')

        if(video.userId === req.user.id){
            await Video.findByIdAndDelete(req.params.id)
            res.status(200).json('video deleted successfully')
        }else return next(403,'you can delete your videos only')

    }catch(e){
        next(e)
    }
} 


export const getVideo = async (req,res,next) => {
    try{
        const video  = await Video.findById(req.params.id)
        if(!video) return next(404,'video not found')
        res.status(200).json(video)
    }catch(e){
        next(e)
    }
} 


export const viewVideo = async (req,res,next) => {
    try{
         await Video.findByIdAndUpdate(req.params.id,{
            $inc:{views:1}
         })
        res.status(200).json("view increased successfully")
    }catch(e){
        next(e)
    }
} 

export const trendVideos = async (req,res,next) => {
    try{
        const videos  = await Video.find().sort({views:-1})
        res.status(200).json(videos)
    }catch(e){
        next(e)
    }
} 


export const randomVideos = async (req,res,next) => {
    console.log(req.headers)
    try{
        const videos  = await Video.aggregate( [{ $sample: {size: 40}}])
        res.status(200).json(videos)
    }catch(e){
        next(e)
    }
} 


export const subChnVideos = async (req,res,next) => { 
    try{
    const user = await User.findById(req.user.id)
    const subscribedChannels = user.subscribedUsers
    const list = await Promise.all(
        subscribedChannels.map( channelId => {
            return Video.find({ userId:channelId})
        })
    )
    res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt))
    }catch(e){
        next(e)
    }
}

export const tags = async (req,res,next) => {
    const tags = req.query.tags.split(',')
    console.log(tags)
    try{
        const videos  = await Video.find( {tag: {$in: tags}}).limit(20)
        res.status(200).json(videos)
    }catch(e){
        next(e)
    }
} 

export const search = async (req,res,next) => {
    const query = req.query.q
    try{
        const videos  = await Video.find({ title :{ $regex :query, $options: "i"}}).limit(20)
        res.status(200).json(videos)
    }catch(e){
        next(e)
    }
} 
