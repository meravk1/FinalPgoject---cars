import TextField from "@mui/material/TextField";
import logo from "./features/photos/logo.png";
// import ProductList from "./features/ProductList";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
// import AlertTitle from "@mui/material/AlertTitle";
// import giphy from "./features/photos/giphy.gif";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "./enter.css";
import { fetchProducts } from "./features/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import axios from "axios";
const Enter = () => {
  let {
    register,
    formState: { errors },
  } = useForm({ mode: "onBlur", defaultValues: { age: 15 } });

  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  // const [name, setName] = useState(null);
  // const [password, setPassword] = useState(null);
  // const [phone, setPhone] = useState(null);
  const navigate = useNavigate();

  function enter(e) {
    e.preventDefault();
    if (user.name !== "p" || user.password != 123) return;
    else navigate("/principle");
  }
  let user = {
    password: 0,
    name: "",
  };

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, []);

  function TransitionRight(props) {
    return <Slide {...props} direction="left" />;
  }

  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // const [carNews, setCarNews] = useState([]);

  // const handleButtonClick = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:4000/product');
  //     const carNewsData = response.data;
  //     setCarNews(carNewsData);
  //   } catch (error) {
  //     // Handle any errors
  //   }
  // };

  // const componentDidMount = ()=> {
  //   axios.get("http://localhost:4000/product").then((res) => {
  //     const products = res.data;
  //     this.setState({ products });
  //   });
  // }
  return (
    <>
      <div id="myDiv">
        
        <h2>
          <form id="form">
            <br></br>
            <TextField
              id="outlined-basic"
              label="שם"
              variant="outlined"
              onChange={(e) => (user.name = e.target.value)}
            />
            <br></br>
            <br></br>
            <TextField
              label="סיסמא"
              type="password"
              id="outlined-basic"
              variant="outlined"
              autoComplete="current-password"
              onChange={(e) => (user.password = e.target.value)}
            />
            <Button
              id="submit"
              variant="contained"
              color="error"
              
              onClick={(e) => {
                enter(e);
              }}
            >
              <br></br>
              <br></br>
             
              <b>עבור לאזור מנהל</b>
            </Button>
          </form>
        </h2>
        {/* <div id="myInput">
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            // style={{display: "flex"}}
            {...register("name", {
              minLength: 2,
              maxLength: 10,
              required: "this field is required!",
              prin: "hodaya",
            })}
          />
          {errors.name?.type === "minLength" && (
            <Alert severity="error">מינימום שם פרטי 2 אותיות</Alert>
          )}
          {errors.name?.type === "maxLength" && (
            <Alert id="Alert" severity="error">מקסימום שם פרטי 10 אותיות</Alert>
          )}
          <br />
          <br />
          <TextField
            label="Password"
            type="password"
            id="outlined-basic"
            variant="outlined"
            autoComplete="current-password"
            {...register("Password", {
              minLength: 5,
              maxLength: 8,
              required: "this field is required!",
              prin: "hhh",
            })}
          />
          {errors.Password?.type === "minLength" && (
            <Alert severity="error">מינימום סיסמא 5 תוים</Alert>
          )}
          {errors.Password?.type === "maxLength" && (
            <Alert severity="error">מקסימום סיסמא 8 תוים</Alert>
          )}
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="phone"
            variant="outlined"
            type="text"
            {...register("phone", {
              minLength: 10,
              maxLength: 10,
              required: "this field is required!",
            })}
          />
          {errors.phone?.type === "minLength" && (
            <Alert severity="error">מספר פלאפון חייב להיות 10 ספרות !!!</Alert>
          )}
          {errors.phone?.type === "maxLength" && (
            <Alert severity="error">מספר פלאפון חייב להיות 10 ספרות !!!</Alert>
          )}
        </div>
        <br />
        <br /> */}
        <Button id="well" onClick={handleClick(TransitionRight)}>
          דברו איתנו
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={transition}
          message="wellcome 
          לפרטים נוספים צלצלו אלינו *6785"
          key={transition ? transition.name : ""}
        />
        <Button
          id="buttonSend"
          variant="contained"
          color="error"
          onClick={() => navigate("/ShowLogo")}
        >
          <b> הכנס</b>
        </Button>
      </div>
      {/* <div>
      <button onClick={handleButtonClick}>Get Car News</button>
      <ul>
        {carNews.map((newsItem) => (
          <li key={newsItem.name}>{newsItem.price}</li>
        ))}
      </ul> */}
    {/* </div> */}
      {/* <Button onClick={handleButtonClick}>nnl</Button> */}
    </>
  );
};

export default Enter;
