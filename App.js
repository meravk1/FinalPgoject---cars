import logo from "./logo.svg";
import "./App.css";
import Addproduct from "./Project/features/AddProduct";
import ProductList from "./Project/features/ProductList";
import ProductSlice from "./Project/features/ProductSlice";
import Enter from "./Project/enter";
import { Routes, Route } from "react-router-dom";
import ShowOne from "./Project/features/ShowOne";
import ShowLogo from "./Project/features/ShowLogo";
import ShowLike from "./Project/features/ShowLike";
import { useState } from "react";
import DisplaySelectedCompanyCurs from "./Project/features/DisplaySelectedCompanyCurs";
import DisplayShowLike from "./Project/features/DisplayShowLike ";
import { BrowserRouter as Router } from "react-router-dom";
import Principle from "./Project/features/principle";
import Order from "./Project/features/Order";
import New from "./Project/features/New";
// import AuthProviderWithHistory from './auth/auth-provider-with-history';

function App() {
  //   <BrowserRouter>
  //   <AuthProvider>
  //     <App />
  //   </AuthProvider>
  // </BrowserRouter>
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Enter />}></Route>
        <Route path="/Principle" element={<Principle />}></Route>
        <Route path="/addproduct" element={<Addproduct />}></Route>
        <Route path="/productList" element={<ProductList />}></Route>
        <Route path="/productSlice" element={<ProductSlice />}></Route>
        <Route path="/ShowOne" element={<ShowOne />}></Route>
        <Route path="/ShowLogo" element={<ShowLogo />}></Route>
        <Route path="/ShowLike" element={<ShowLike />}></Route>
        <Route path="/Order" element={<Order/>}></Route>
        <Route path="/New" element={<New/>}></Route>
        <Route
          path="/DisplaySelectedCompanyCurs"
          element={<DisplaySelectedCompanyCurs />}
        ></Route>
        <Route path="/DisplayShowLike" element={<DisplayShowLike />}></Route>
        <Route path="/liked" element={<ShowLike />} />
        {/* <Route  path="/liked">
  <ShowLike />
</Route> */}
      </Routes>
    </div>
  );
  
}

export default App;
