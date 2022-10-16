import express from 'express'
import { signUp ,signIn} from '../controllers/auth.js'
const router = express.Router()

//Sign up

router.post('/signup',signUp)

//Sign in

router.post('/signin',signIn)

//Google


export default router