import express from 'express'
import { randomVideos,addVideo,updateVideo,deleteVideo,getVideo,viewVideo,trendVideos,subChnVideos,tags,search} from '../controllers/video.js'
import {verifyToken } from '../verifyToken.js'
const router = express.Router()

router.post('/', verifyToken ,addVideo)
router.put('/:id',verifyToken,updateVideo)
router.delete('/:id',verifyToken,deleteVideo)
router.get('/find/:id',getVideo)
router.get('/view/:id',viewVideo)
router.get('/trend',trendVideos)
router.get('/random',randomVideos)
router.get('/sub',verifyToken,subChnVideos)
router.get('/tags',tags)
router.get('/search',search)

export default router