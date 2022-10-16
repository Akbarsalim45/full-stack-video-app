import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  comments:[],
  loading:false,
  error:false
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
        fetchComment:(state,action)=>{
            state.comments=action.payload
        },
        addComment:(state,action)=>{
            state.comments.push(action.payload)
        }
  },
})

// Action creators are generated for each case reducer function
export const {fetchComment,addComment } = commentSlice.actions

export default commentSlice.reducer