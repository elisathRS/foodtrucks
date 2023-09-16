import React from "react";
import './Foodtruck.css'

const Foodtruck =(props) =>{
    return(
      <div className="Truck">
      <img className="imageUrl" src={props.imageUrl} />
      <h2 className="name" >{props.name}</h2>
      <p  className="cuisineType">{props.cuisineType}</p>
      <button className="buttonMenu">View Menu</button>
    </div>
    )

}

export default Foodtruck;