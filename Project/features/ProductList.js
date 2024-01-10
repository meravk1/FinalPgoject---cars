import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchAllProduct, deleteProduct } from "./ProductSlice";
// import img1 from "./photos/man.jpg";
// import img2 from "./photos/bmw3-min.jpg";

//import { useNavigate } from "react-router-dom";
// import "./Products.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import product from '../../products'
import './Product.css';
import ShowOne from './ShowOne';
import React, { useState } from 'react';
 //const navigate = useNavigate();
export default class ProductList extends React.Component{
 
 
  func = (p) => {
    
    console.log(p.img);
    const a = p.img;
    return a;
  };
  
  
  // componentDidMount() {
  //   axios.get("http://localhost:4000/product").then((res) => {
  //     const products = res.data;
  //     this.setState({ products });
  //   });
  // }
  
   ProductL = () => {
    const [likedProducts, setLikedProducts] = useState([]);

  const handleAddToBasket = (productname) => {
    const product = product.find((p) => p.name === productname);
    setLikedProducts([...likedProducts, product]);
   
  };   
 
    return (
      this.state.products.map(product => 
      <Card sx={{ maxWidth: 600 }}>{console.log(product)}
        <CardMedia
          sx={{ height: 140 }}
          // image="./photos//bmv 4 ka3.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cars
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {
              
                 
                <li key={product.id} className="product">
                  {/* <h3>name of car:</h3>
                  <ul>{product.name}</ul>*/}
                  <h3>company of car:</h3> 
                    
                  <ul>{product.company}</ul>
                 {/* <img src={product.imgUrl}></img> */}
                  {product.cname&&product.cname.map(item=>{return <li>{item.name}<br></br><h3>price</h3><br></br>{item.price}<br></br><h3>year</h3><br></br>{item.year} <br></br><br></br> {item.description}
                  <button id="h" >
            <span role="img" aria-label="heart"onClick={() => handleAddToBasket(product.name)}>❤️</span>
          </button>
                  <img src={item.imgUrl}></img><img src={item.imgUrl1}></img><img src={item.imgUrl2}></img></li>})}
             
                  {/* <h3>price of car:</h3>
                  <ul>{product.price}</ul>
                  <h3>year of car:</h3>
                  <ul>{product.year}</ul>
                  <h3>description of car:</h3>
                  <ul>{product.description}</ul> */}
                  {/* <ul>{product.imgUrl}</ul> */}
                 
                </li>
             
            }
            
            <CardActions>
              <Button size="small"  >open to see</Button>
            {/* onclick={()=>navigate('/ShowOne')} */}
            </CardActions>
          </Typography>
        </CardContent>
      </Card>
      
     
    ));
  };
 
  }

          
