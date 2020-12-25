import React, { useState } from 'react';

const Tour = ({tour,remove})=>{
const [isReading,setIsReading] = useState(false);
const {image,name,info,id,price} = tour;
  return <>
  <div className="col-8 col-md-3 mx-auto">
<div class="card">
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{isReading?info : `${info.substring(0, 200)}...`}
    <button className="" onClick={()=>setIsReading(!isReading)}>{isReading? 'read less':'read more'}</button>

    </p>
     <p class="card-text">${price}</p>
    <button class="btn btn-primary" onClick = {()=>remove(id)} >not interested</button>
  </div>
</div>
</div>

  </>



}
export default Tour;
