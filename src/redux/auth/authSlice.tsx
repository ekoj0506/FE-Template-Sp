import { createSlice } from '@reduxjs/toolkit'
const authSlice = createSlice({
    name: 'authorization',
    initialState: {
        nameUser:'',
        token: '',
    },
    reducers:{
        returnName:(state)=>{
        state.nameUser
        },
        login:(state,action)=>{
            state.nameUser=action.payload.nameUser
            state.token=action.payload.token
        },
        logout:(state)=>{
            state.token=''
        }
    }
}
)
export const { login, logout } = authSlice.actions
export default authSlice.reducer

