import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  videoDetails:[],
  loading:false,
  error:false
}

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
        getVideoStart:(state)=>{
            state.loading=true
        },

        getVideoSuccess:(state,action)=>{
            state.loading=false
            state.videoDetails=action.payload 
        },

        getVideoFail:(state)=>{
            state.loading=false
            state.error=true
        },
        likeVideo:(state,action)=>{
            console.log(action.payload)
            if(!state.videoDetails.likes.includes(action.payload)){
                state.videoDetails.likes.push(action.payload)
                state.videoDetails.dislikes.splice(state.videoDetails.dislikes.findIndex(userId => userId == action.payload),1)
            }
        },
        dislikeVideo:(state,action)=>{
            if(!state.videoDetails.dislikes.includes(action.payload)){
                state.videoDetails.dislikes.push(action.payload)
                state.videoDetails.likes.splice(state.videoDetails.likes.findIndex(userId => userId == action.payload),1)
            }
        },
        
       
  },
})

// Action creators are generated for each case reducer function
export const {getVideoFail,getVideoStart,getVideoSuccess,likeVideo,dislikeVideo } = videoSlice.actions

export default videoSlice.reducer