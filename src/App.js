import React, { useState, useEffect } from 'react'
// import Loading from './Loading'
import Tours from './Tours'
// import Tour from "./Tour"
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
const [loading,setLoading] = useState(true);
const [tours,setTours] = useState([]);

const removeTour = (id)=>{
const newArr = tours.filter((item)=>item.id !== id)
setTours(newArr);

}
const fetchData = async ()=>{

const dat = await fetch(url);
const data = await dat.json();
setTours(data);
setLoading(false);
//  console.log(data)
}

useEffect(()=>{

   fetchData(); 
   setLoading(false)      
      

},[])


if(tours.length === 0){
return <main>
  <div className="container">
    <div className="row justify-content-center">
 <div className="title text-center">
    <h4>no Tours</h4>
    <button onClick ={()=>fetchData()}>refresh</button>
  </div>
    </div>
  </div>
 
</main>

}
if(loading){
return <main>
  <div className="container">
    <div className="row justify-content-center">
 <div className="title text-center">
    <h4>Loading...</h4>
  </div>
    </div>
  </div>
 
</main>

}
//default return
return <main>

<section className = "tourSection py-5">
<div className="container">
  <div className="row">
    <Tours tours = {tours} remove = {removeTour} ></Tours>
  </div>
</div>




</section>



</main>




}

export default App;
