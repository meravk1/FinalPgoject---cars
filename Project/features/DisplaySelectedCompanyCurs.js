import React, { useState, useEffect } from "react";
// import { useState } from "react";
// import products from "../../products";
import { Navigate, useLocation, useNavigate } from "react-router";
import "./DisplaySelectedCompanyCurs.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./ProductSlice";
import Rating from '@mui/material/Rating';
import { style } from "@mui/system";
import { Button, colors } from "@mui/material";
import ShowLike from './ShowLike';
import Checkbox from '@mui/material/Checkbox';
import { addLikedProduct } from "./UserSlice";
import{deleteLike}from './UserSlice'; 

import {deleteProduct } from "./ProductSlice";
//  import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';


export default function DisplaySelectedCompanyCurs() {
  let products = useSelector(state => state.product.products)
  const [cars, setCars] = useState([]);
  const location = useLocation();
  const selectedCompany = location.state;
  const navigate = useNavigate();
  // const [likedProducts, setLikedProducts] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState('white');
  let dispatch = useDispatch();
  // const likedProductsArr = []
  const likedProductsArr = useSelector((state) => state.user.likedProducts)



  
  const handleAddToBasket = (product) => {
   
    dispatch(addLikedProduct(product))
  };
  
const delLike=(product)=>{
  dispatch(deleteLike(product))
}

  useEffect(() => {
    if (products.length == 0)
      dispatch(fetchProducts())
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      let company = products.find((car) => car.company === selectedCompany);
      console.log(company);
      setCars(company.cname);
    }
  }, [products])

  const handleViewLikedProducts = () => {
    navigate('/liked');
  };
  const del = () => {

  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (name) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const buttonClass = clicked ? 'button-clicked' : 'not';
  return (
    <>

      <Button id="before" onClick={() => navigate('/ShowLogo')}><b>חזור לבחירת דגם</b></Button>
      <br></br>

      <h2 onClick={() => navigate('/ShowLike')}>Like ({likedProductsArr.length})</h2>

      {cars.length !== 0 &&
        cars.map((car, index) => (
          <>
            <img src={car.imgUrl}></img>

            <img src={car.imgUrl1}></img>

            <img src={car.imgUrl2}></img>

            <button className={buttonClass} onClick={() => handleAddToBasket(car)}>
              <span

                id="heart"
                role="img"
                aria-label="heart"

              >
                ❤
              </span>
            </button>
            <div>
              <br></br>
<Button id="del" onClick={()=>delLike(car)}>הסר מהמוצרים שאהבתי</Button>
              {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        
      /> */}

            </div>

            <button onClick={() => toggleDetails(car.name)}>
              {showDetails[car.name] ? <b>הסתר פרטים</b> : <b><h3>פרטים</h3></b>}
            </button>
            <br></br>
            <br></br>
            {showDetails[car.name] && (
              <>
                <h3>:שם</h3>
                <p>{car.name}</p>
                <br></br>
                <h3>:מחיר</h3>
                <p>{car.price}</p>
                <br></br>
                <h3>:תיאור</h3>
                <p>{car.description}</p>
                <h3>:חוות דעת מעצבים</h3>
                <Rating name="read-only" value={car.star} readOnly />
                <h3>:שנה</h3>
                <p>{car.year}</p>
                <br></br>
              </>
            )}
            <Button id="order" onClick={() => navigate('/Order')}><h2><b>הזמן אותי</b></h2></Button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </>
        ))}



      {/* <button onClick={handleViewLikedProducts}>View Liked Products</button>
      {likedProductsArr.length > 0 && <ShowLike likedProducts={likedProductsArr} />}
 */}

      {/* <h2>Liked Products:</h2>
      <ul>
        {likedProducts.map((product) => (
          <li key={product.name}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul> */}
    </>
  );
}

