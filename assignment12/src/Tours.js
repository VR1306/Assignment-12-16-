import React, { useEffect, useState } from 'react'
import './Tours.css'

function Tours() {

  const [tours,setTours] = useState([]) 
   
 
  useEffect(() => { 
    fetch('https://course-api.com/react-tours-project').then(response => response.json()) 
    .then(data=>setTours(data.slice(0,200))) 
  }, [])  
 
  const handleDelete=(id)=>{ 
      let tourList=tours.filter(tour=>tour.id !==id); 
      setTours(tourList) 
  } 
  const[read,setRead]=useState(false) 
  const handleToggle = (e) => {e.preventDefault(); setRead(!read ) } 
   
   
  return (     
    <div className='backgrounds'> 
         
     <div class='tour'> 
             {tours.length>0?( 
                 <> 
 
               <div class="text-center h1 texts">Our Tours</div> 
               <div className='underline'></div>
               {tours.map(tour => <div key={tour.id}> 


               <div class='image'> 
               <div className='photos'>
                 <img src={tour.image} width='100%' height="100%"/> 
               </div>
              
              
              <div class="row"> 
              <div className='d-flex justify-content-between'>
              <h4 class="name col-9">{tour.name}</h4> 
              <h4  class="price col-4">$ {tour.price}</h4> 
              </div>
              </div> 
              <div> 
              <p class="read  text-secondary">{read ? tour.info : tour.info.slice(0, 150)} 
                <a href="#"class="color" onClick={handleToggle}> {read ? 'Show Less' : 'Read More'}</a> 
              </p> 
          
             </div> 
             
            <div class="text text-center">
              <button type="button" class="button btn btn-outline-danger" onClick={() =>handleDelete(tour.id)}>Not Interested</button>
            </div> 
          
            </div>    
      </div>)} 
 
      </> 
             ):(
                 <h2 className='text-center '>NO TOURS AVAILABLE 
                     <br/><br/><br/> 
                 <button className='btn btn-primary text-center' onClick={()=>window.location.reload()}>REFRESH</button> 
                 </h2>
                 
             )} 
</div> 
 
    </div> 
  ) 
} 

export default Tours