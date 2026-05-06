import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    accessToken: null
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        login: (state, action) =>{
            state.accessToken = action.payload
            
        },

        logout: (state, action) =>{
            state.accessToken = null

        }
    }
})

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer