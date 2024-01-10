import TextField from "@mui/material/TextField";
import './Product.css';
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { Button } from "@mui/base";
import { useNavigate } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
import logo from "./photos/logo.png";
import axios from "axios";
import React, { useState } from "react";
const handleSubmit = async (event) => {
  event.preventDefault();

  const email = event.target.email.value;

  const response = await fetch('/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  if (response.ok) {
    alert('Email sent successfully');
  } else {
    alert('Error sending email');
  }
};
export default function Order(){
   
    let {
        register,
        handleSubmit,
        getValues,
        formState: {
          errors,
          isValid,
          dirtyFields,
          isDirty,
          isSubmitted,
          principle,
        },
      } = useForm({ mode: "onBlur", defaultValues: { age: 15 } });

  //     function  componentDidMount () {
  //   axios.get("http://localhost:4000/product").then((res) => {
  //     const products = res.data;
  //     this.setState({ products });
  //   });
  // }
      const navigate = useNavigate();
      function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
      }


      const [email, setEmail] = useState("");

      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handleButtonClick = () => {
       alert("פנייתך התקבלה בהצלחה נחזור בהקדם")
        axios.post("http://localhost:4000/send-email", { email })
          .then((response) => {
            console.log("email");
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
          }



return(
    <>

<Button id="home" type="submit"  onClick={()=>navigate('/')}><HomeIcon sx={{ fontSize: 40 }} color="" /></Button>
<br></br>
<Button id="ret"  onClick={()=>navigate('/ShowLogo')}>חזור לבחירת דגם</Button> 
<br></br>


<img id="logo" src={logo}></img>
<h2 >Win car-בחרת נכון בחרת</h2>
<br></br>
<br></br>
<TextField
          id="outlined-basic"
        //   label="name"
          placeholder="שם מלא"
          variant="outlined"
          {...register("name", {
            minLength: 2,
            maxLength: 10,
            required: "this field is required!",
           
          })}
        />
        {errors.name ?.type === "minLength" && (
          <Alert severity="error">מינימום שם פרטי 2 אותיות</Alert>
        )}
        {errors.name ?.type === "maxLength" && (
          <Alert severity="error">מקסימום שם פרטי 10 אותיות</Alert>
        )}
        <br />
        <br />
        <br></br>
        <br></br>
        <TextField
          id="outlined-basic"
        //   label="phone"
          variant="outlined"
         placeholder=" פלאפון📲 "
          type="text"
          {...register("phone", {
            minLength: 10,
            maxLength: 10,
            required: "this field is required!",
          })}
        />
        {errors.phone ?.type === "minLength" && (
          <Alert severity="error">מספר פלאפון חייב להיות 10 ספרות !!!</Alert>
        )}
        {errors.phone ?.type === "maxLength" && (
          <Alert severity="error">מספר פלאפון חייב להיות 10 ספרות !!!</Alert>
        )}
        <br />
        <br />
        <br></br>
        <br></br>
          <TextField
          id="outlined-basic"
        //   label="phone"
          variant="outlined"
         placeholder="email 📧"
          type="text"
           value={email}
           
          onChange={handleEmailChange}
          {...register("email", {
           
            required: "this field is required!",
          })}
        />

{/* <input type="email" value={email} onChange={handleEmailChange} /> */}
      {/* <button onClick={handleButtonClick}>Send Email</button> */}
        <br />
        <br />
        <br></br>
       
<Button id="send"   variant="contained" onClick={handleButtonClick}><h2><b>צור קשר 📞</b></h2></Button>
</>
)
}