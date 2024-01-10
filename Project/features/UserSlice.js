import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import products from "../../products";
// import { useLocation } from "react-router";

const initialState = {
    likedProducts: [],
    status: 'idle'
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addLikedProduct: (state, action) => {
            state.likedProducts.push(action.payload)
        },
        deleteLike:(state,action)=>{
            // const update=[...initialState];
            // update.splice(index,1);
            state.likedProducts.splice(action.payload,1);

        }

    },
    extraReducers(builder) {

    }

});

export const { addLikedProduct } = userSlice.actions;
export const { deleteLike } = userSlice.actions;
export default userSlice.reducer;
//reducer is-they take the state so far and the action, and return the next state
