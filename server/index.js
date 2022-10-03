import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

const connect = () =>{
    mongoose.connect(process.env.MONGO_URL)
        .then(()=> console.log('connected to db'))
        .catch(err => {throw err})
}

app.listen(8000,() => {
    connect()
    console.log("server running")})