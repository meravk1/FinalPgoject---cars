import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../features/counter/counterSlice";
import productSlice from '../features/ProductSlice';
import  userSlice  from "../features/UserSlice";

export const store = configureStore({
    reducer: {
        // counter: counterSlice,//אחכ ניגש בקומפוננטה לערך על ידי state.counter.value
       product : productSlice,
       user: userSlice
    },
})