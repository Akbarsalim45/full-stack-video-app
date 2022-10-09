import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser:null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
        loginStart:(state)=>{
            state.loading=true
        },

        loginSuccess:(state,action)=>{
            console.log('actioon',action.payload)
            state.loading=false
            state.currentUser=action.payload 
        },

        loginFail:(state)=>{
            state.loading=false
            state.error=true
        },

        logout:(state)=>{
            return initialState
        },

        subscribe:(state,action)=>{
          console.log(action)
          if(action.payload.type == 'subscribe'){
            state.currentUser.subscribedUsers.push(action.payload.id)
          }else{
            state.currentUser.subscribedUsers.splice(state.currentUser.subscribedUsers.findIndex(cnl => cnl==action.payload.id),1)
          } 
        }
  },
})

// Action creators are generated for each case reducer function
export const {loginStart,loginSuccess,loginFail,logout,subscribe  } = userSlice.actions

export default userSlice.reducer