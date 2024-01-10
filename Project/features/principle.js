import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
// import { useNavigate } from 'react-router';
import ProductSlice, { addProduct } from '../features/ProductSlice';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
export default function AddToList() {
  // const navigate = useNavigate();
  let dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState({
    name: "",
    company: "",
    descirption: "",
    price: "",
    year: "",
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    dispatch(addProduct(newProduct))
  }
  const [company, setCompany] = React.useState('');

  const handleChange = (event) => {
    setCompany(event.target.value);
  };
  const navigate = useNavigate();


  const [image, setImage] = useState(null);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //     axios.get("http://localhost:4000/product").then((res) => {
  //     const products = res.data;
  //     this.setState({ products });
  //   });
  // }
  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setImage(file);
  // }

  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <>
      <Button id="before" onClick={() => navigate('/')}><HomeIcon sx={{ fontSize: 40 }} color="black" /></Button>
      <form onSubmit={(e) => submit(e)}>
        <TextField
          name='name'
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          name='description'
          value={newProduct.descirption}
          onChange={(e) => setNewProduct({ ...newProduct, descirption: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="description"
          variant="outlined"
        />

        <br />
        <TextField
          name='company'
          value={newProduct.company}
          onChange={(e) => setNewProduct({ ...newProduct, company: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Company"
          variant="outlined"
        />
        {/* <Box sx={{ minWidth: 20 }}>
<FormControl fullWidth>
 <InputLabel id="demo-simple-select-label"></InputLabel>
<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={newProduct.company}
    label="Company"
    onChange={handleChange}
  >
    <MenuItem value={'audi'}>audi</MenuItem>
    <MenuItem value={'jaguar'}>jaguar</MenuItem>
    <MenuItem value={'chevrolet'}>chevrolet</MenuItem>
  </Select>
  </FormControl>
  </Box> */}
        <br />
        <TextField
          name='price'
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Price"
          variant="outlined"
        />
        <br />
        <TextField
          name='year'
          value={newProduct.year}
          onChange={(e) => setNewProduct({ ...newProduct, year: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Year"
          variant="outlined"
        />
        <br />
      

        <TextField
          name='star'
          value={newProduct.star}
          onChange={(e) => setNewProduct({ ...newProduct, star: e.target.value })}
          style={{ width: "200px", margin: "5px" }}
          type="number"
          label="star"
          variant="outlined"
        />
        <br />
        <Button type='submit' variant="contained" color="error"  >
          save
 </Button>
      </form>
    </>
  );
}
