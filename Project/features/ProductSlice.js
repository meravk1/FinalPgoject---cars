import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";
import products from "../../products";
// import { useLocation } from "react-router";

const initialState = {
  products: [],
  status: 'idle'
};

// const location = useLocation();
// const selectedCompany = location.state;

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  // const response = await axios.get(BASE_URL)
  let response = { status: 200, data: products }
  console.log(response.data)
  return response.data
})

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // let company = products.find((car) => car.company === selectedCompany);
      let index = state.products.findIndex(company => company.company === action.payload.company)
      console.log('action.payload',action.payload)
      console.log('index',index)
      console.log(state.products[index])
      // companyObject.cname=companyObject.cname.push(action.payload)
      state.products[index].cname.push(action.payload)
    },
    fetchAllProduct: (state, action) => {
      state.products = action.payload;
      console.log("ProductSlice");
    },
    deleteProduct: (state, action) => {
      let index = state.products.findIndex(
        (item) => item.id == action.payload
      );
      state.products.splice(index, 1);
    },
    // addProduct: {
    //   reducer: (state, action) => {
    //     // action.payload.id =
    //     //   state.products[state.products.length - 1].id + 1;
    //     state.products.push(action.payload);
    //   },
    //   prepare: (objProduct) => {
    //     return {
    //       payload: {
    //         title: objProduct.title.toUpperCase(),
    //         src: objProduct.src,
    //         userId: objProduct.userId,
    //       },
    //     };
    //   },
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "fulfilled"
        state.products = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected"
      })

  }

});
export const { fetchAllProduct, deleteProduct, addProduct } =
  productSlice.actions;
export default productSlice.reducer;
//reducer is-they take the state so far and the action, and return the next state
