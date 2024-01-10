
import products from "../../products";

import React, { useState } from 'react';
export default class ShowOne extends React.Component{


state = {
  products: products,
};
show = () => {
   // const [stateVariable, setStateVariable] = useState(initialState);
 const [selectedCompany, setSelectedCompany] = useState(null);
  const filteredVehicles = products.filter(vehicle => {
    if (selectedCompany === null) {
      // show all vehicles if no company is selected
      return true;
    } else {
      // show vehicles for selected company
      return vehicle.company === selectedCompany;
    }

})};

  









};
 //{product.cname&&product.cname.map(item=>{return <li>{item.name}<br></br><h3>price</h3><br></br>{item.price}<br></br><h3>year</h3><br></br>{item.year} <br></br><br></br> <img src={item.imgUrl}></img><img src={item.imgUrl1}></img><img src={item.imgUrl2}></img></li>})}
   