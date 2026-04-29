import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    accessToken: null
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        login: (state, action) =>{
            state.status = true
            state.accessToken = action.payload

            action.type = "LOGGEDIN SUCCESSFULLY"
        },

        logout: (state, action) =>{
            state.status = false
            state.accessToken = null

            action.type = "USER_LOGGEDOUT_SUCCESSFULLY"

        }
    }
})

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer