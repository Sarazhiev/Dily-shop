import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: ''
        }
    },
    reducers: {
        findUser: (state, action) => {
            state.user = action.payload.user
        },

        logOutUser: (state) => {
            state.user = {
                email: ''
            }
        }
    }
});
export default userReducer.reducer
export const {findUser, logOutUser} = userReducer.actions;