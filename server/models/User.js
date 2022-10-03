import mongoose from 'mongoose'

const UserScheme = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,

    },
    img:{
        type:String
    },
    subsribers:{
        type:Number,
        default:0
    },
    subscribedUers:{
        type:[String]
    },

  },
  {
    timestamps:true
  }
)

export default mongoose.model("User",UserScheme)