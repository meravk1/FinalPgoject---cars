import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import jaguarl from './photos/jaguar/j-logo.jpg';
import audil from './photos/audi/a-logo.jpg';
import Phorshel from './photos/Phorshe/P-logo.jpg'
import chevroletl from './photos/chevrolet/c-logo.png'
import BMVl from './photos/BMV/b-logo.jpg'
import mazratilogo from './photos/mazrati/mazLogo.png'
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import './ShowLogo.css';
import product from '../../products';
import { useNavigate } from 'react-router';
import Rating from '@mui/material/Rating';
import logo from "./photos/logo.png";
import { useSelector, useDispatch } from "react-redux";
import DisplaySelectedCompanyCurs from './DisplaySelectedCompanyCurs';
// const [stateVariable, setStateVariable] = useState(initialState);
// state = {
//   products: product,
// };



const images = [
  {
    url: jaguarl,
    title: 'jaguar',
    width: '30%',
  },
  {
    url: audil,
    title: 'audi',
    width: '30%',
  },
  {
    url: Phorshel,
    title: 'Phorshe',
    width: '30%',
  },
  {
    url: chevroletl,
    title: 'chevrolet',
    width: '30%',
  },
  {
    url: BMVl,
    title: 'BMV',
    width: '30%',
  },
  {
    url: mazratilogo,
    title: 'mazrati',
    width: '30%',
  }

];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  width: 800,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 200,
  right: 0,
  top: 0,
  bottom: 0,
  width: 200,
  height: 200,
  padding:0,
  margin:0,
  display: 'flex',
  backgroundSize: 'cover',
   backgroundPosition: 'center 1 00%',
 
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 250,
  right: 0,
  top: 0,
  bottom: 0,
  padding:0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 250,
  right: 100,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 22,
  left:350,
  backgroundColor: theme.palette.common.red,
  position: 'absolute',
  // bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));
export default function ButtonBases() {
  const navigate = useNavigate();
 
  const [products, setProducts] = useState();
  const [selectedCompany, setSelectedCompany] = useState(null);

  const likedProductsArr = useSelector((state) => state.user.likedProducts)

  const filteredVehicles = product.filter(vehicle => {
    if (selectedCompany === null) {
      // show all vehicles if no company is selected
      return true;
    } else {
      // show vehicles for selected company
      return vehicle.company === selectedCompany;
    }
  });

  const onClickHandle = (companyName) =>{
    console.log(companyName);
    setSelectedCompany(companyName)
    navigate("/DisplaySelectedCompanyCurs", { state: companyName });
  }

  

  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  let filteredCars = [];
  if (searchTerm !== '') {
    filteredCars = product
      .map((company) => ({
        company: company.cname,
        cars: company.cname.filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((company) => company.cars.length > 0);
  }

 
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  return (
    <>
    <div id='all' >
     <form role="search" method="get"  action="/" autocomplete="off">

{/* <input type="text" value="" name="s" id="s" placeholder="חיפוש דגם"></input> */}
<button id="home2" type="submit"  onclick="return false;"><HomeIcon sx={{ fontSize: 40 }} color="" /></button>

       
<div>
  {/* <h2>search me!</h2> */}
  <h2>👇</h2>
      <input id="search" type="text" placeholder='search...               🔍    ' value={searchTerm} onChange={handleSearch} />
      <br></br>
      <br></br>
      {filteredCars.map((company) => (
        <div key={company.company}>
         
          {company.cars.map((car) => (
            <div key={car.name}>
              <h3>name:</h3>
              <h2>{car.name}</h2>
              <h3>price</h3>
              <h2>{car.price}</h2>
              <h3>year:</h3>
              <h2>{car.year}</h2>
              <Rating name="read-only" value={car.star} readOnly />
              <br></br>
              <img src={car.imgUrl} alt={car.name} />
              <img src={car.imgUrl1} alt={car.name} />
              <img src={car.imgUrl2} alt={car.name} />
            </div>
          ))}
        </div>
      ))}
    </div>
    
 
    
    </form>

  <img id="logo" src={logo}></img>
    <h1>-תבחר</h1>
    <h1>והוא יגיע...🚗</h1>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
        {images.map((image) => (
          <ImageButton
            // focusRipple
            key={image.title}
            style={{
              width: image.width,
              // height:image.height,
             
            }}
              onClick={()=>onClickHandle(image.title)}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Typography
                component="span"
                variant="subtitle1"
                color="red"
                sx={{
                  position: 'relative',
                  
                  p: 4,
                  pt: 2,
                  pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  
                }}
              >
               <b> {image.title}</b>
                <ImageMarked className="MuiImageMarked-root" />

              </Typography>
            </Image>
          </ImageButton>

        ))}
        <br>
        </br>

      </Box>

      <div>
        <h2 id='like'>מה שאהבתי</h2>
        <div>
          
          <Button   onClick={()=>navigate('/ShowLike')}>
          
            <span id="h" role="img" aria-label="heart"style={{ fontSize: '60px' }}>❤️</span>
           
          </Button>
         <h2 id='numLike'> ({likedProductsArr.length})</h2>
        </div>
     
      </div>
      </div>
    </>
  );


}