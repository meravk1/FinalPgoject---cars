import { useSelector,useDispatch  } from 'react-redux';
import { useNavigate, useLocation} from "react-router";
import { Button, colors } from "@mui/material";
import React, { useState, useEffect } from "react";
import './Product.css';
import{deleteLike}from './UserSlice';
const ShowLike = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const selected = location.state;

  


const navigate=useNavigate();
let dispatch = useDispatch();
  const likedProducts = useSelector(state => state.user.likedProducts)

  // const removeFromCart = (index) => {
  //   const updatedCartItems = [...likedProducts];
  //   updatedCartItems.splice(index, 1);
  //   setCartItems(updatedCartItems);
  // };

  
  const delLike=(id)=>{
    
    let update = likedProducts.filter((product) => product.id !==id);
    if (update !== -1) {
    dispatch(deleteLike(update,1))
    }
    alert("הוסר 😥")
  }

 
  return (
    <div>
       <Button id="before" onClick={() => navigate('/ShowLogo')}><b>חזור לבחירת דגם</b></Button>
      <h2>המוצרים שאהבתי:</h2>
      <br></br>
      <br></br>
      {!likedProducts || likedProducts.length === 0 ? <div><h2><b>לא הוספת עדיין רכבים שאהבת! <br></br><h2>😯</h2></b></h2></div> : ''}
      <ul>
        {likedProducts.map((product) => (
          <li key={product.name}>
            
            <img src={product.imgUrl}></img>
            <img src={product.imgUrl1}></img>
            <img src={product.imgUrl2}></img>
            
<br></br>
<b><h3>:שם</h3></b>
           <b> {product.name}</b>
            <br></br>
            <b><h3>:מחיר</h3></b>
            <b> {product.price}</b>
            <br></br>
            <b><h3>:שנה</h3></b>
            <b> {product.year}</b>
            <br></br>
            <br></br>
            <Button id='del' onClick={()=>delLike(product.name)}>הסר מהרשימה</Button>
        
      {/* <Button onClick={() => removeFromCart(product.name)}>Remove</Button>
    */}
 
          </li>
          
        ))}
        
      </ul>
      <ul>
  
</ul>
    </div>
  );
};

export default ShowLike;