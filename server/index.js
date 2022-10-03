import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/users.js'
import videoRouter from './routes/videos.js'
import commentRouter from './routes/comments.js'

const app = express()
dotenv.config()


const connect = () =>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log('connected to db'))
        .catch(err => {throw err})
}
 app.use("/api/users",userRouter)
 app.use("/api/videos",videoRouter)
 app.use("/api/comments",commentRouter)

app.listen(8000,() => {
    connect()
    console.log("server running")})