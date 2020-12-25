import React from 'react';
import Tour from './Tour';
const Tours = ({tours,remove}) => {
  return <>
  {tours.map((item)=>{

return <Tour tour = {item} key = {item.id} remove = {remove}></Tour>

})}
  
  </>;
};

export default Tours;
