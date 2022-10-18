import React from 'react'

export default function ProductItem({data}) {

    const myStyle = {
        color : "#0062cc"
    }
  return (
  
        <div className='col-sm-4'>

        <div class="card" >
    <img class="card-img-top" src={data.image} alt="Card image" height="300px" width="300px"/>
    <div class="card-body" style={myStyle}>
      <p class="card-text">{data.title}</p>
      <p class="card-text">{data.price}</p>
      <a href="#" class="btn btn-primary">Add To Cart</a>
    </div>

    </div>


       
 
   
  </div>
  )
}
