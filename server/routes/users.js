import express from 'express'
import { updateUser,deleteUser ,getUser,subscribe,unSubscribe,likeVideo,dislikeVideo } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

//get user
router.get('/:id',getUser)

//update user

router.put('/:id',verifyToken,updateUser)

//delete user
router.delete('/:id',verifyToken,deleteUser)

//subscribe a user
router.put('/sub/:id',verifyToken,subscribe)

//unsubcribe a user
router.put('/unsub/:id',verifyToken,unSubscribe)

//like a video
router.put('/like/:videoId',verifyToken,likeVideo)


//dislike a video
router.put('/dislike/:videoId',verifyToken,dislikeVideo)


export default router