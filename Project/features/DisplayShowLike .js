
// import React, { useState, useEffect } from 'react';
// import products from '../../products';
// import { useLocation } from 'react-router';


// // const DisplayShowLike = ({ likedProducts }) => {
// //   const location = useLocation();
// //   const selectedLike = location.state;
// //   const [cars, setLike] = useState([])
// //   useEffect(() => {
   
  
// //     let like = products.find(like => like.company === selectedLike);
// //     setLike(like.cname)
// // }, [])

// //   return (
// //     <div>
// //       {/* ({likedProducts.length}) */}
// //     <h2>Basket </h2>
// //     <ul>
// //       {
// //       likedProducts.length!=0 &&
// //       likedProducts.cname.map((product, index) => (
// //         <li key={index}>{product.name}</li>
// //       ))}
// //     </ul>
// //   </div>
// //     // <div>
      
// //     //   <h1>I like it!</h1>
// //     //   {likedProducts ? (
// //     //     <p>No items in basket</p>
// //     //   ) : (
// //     //     <ul>
// //     //       {likedProducts.cname.map((product) => (
// //     //         <li key={product.id}>{product.company}{product.price}<img src={product.imgUrl}></img></li>
// //     //       ))}
// //     //     </ul>
// //     //   )}
// //     // </div>
// //   );
// // };

// // export default DisplayShowLike;



// // // import { useNavigate } from "react-router";
// // // import { useState } from "react";
// // // import ShowLike from "./ShowLike";

// // // export default function DisplayShowLike() {
// // //   const navigate = useNavigate();
// // //   const [selectedCompany, setSelectedCompany] = useState(null);
// // //   const onClickHandle = (LikeName) => {
// // //     console.log("d33fg");
// // //     setSelectedCompany(LikeName);
// // //     navigate("/ShowLike", { state: LikeName });
// // //   };

// //   // useEffect(() => {
// //   //     // let company = products.filter(vehicle => {
// //   //     //     vehicle.company === selectedCompany;
// //   //     // })

// //   //     let company = products.find(car => car.company === selectedCompany)

// //   //     setCars(company.cname)
// //   // }, [])

// // //   return (
// // //     <>
// // //       <h1>I like it!</h1>
// // //       <h2>
// // //         {" "}
// // //         <span role="img" aria-label="heart" style={{ fontSize: "60px" }}>
// // //           ❤️
// // //         </span>
// // //       </h2>

// // //       {/* <button onClick={()=>onClickHandle('/ShowLike')}>a</button>
// // // //     <button  >
// // // // //             <span role="img" aria-label="heart"style={{ fontSize: '60px' }}onClick={()=>navigate('/DisplayShowLike ') }>❤️</span>
// // // // //           </button>  */}
// // //     </>
// //   // );
// // // }
//  const DisplayShowLike = ({ likedProducts }) => {
//   useEffect(() => {
//     likedProducts.name = `Basket (${likedProducts.length})`;
//   }, [likedProducts]);

//   return (
//     <div>
//       {/* <h2>Basket ({likedProducts.length})</h2> */}
//       <h2>hi</h2>
      
//       <ul>
//         {likedProducts.map((product, index) => (
//           <li key={index}>{product.name}</li>
//         ))}
//       </ul>
//     </div>
    
//    );
//  };
//   export default DisplayShowLike;