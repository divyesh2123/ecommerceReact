import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

export default function ProductList() {

  const [data,setData] =  useState([])


  useEffect(()=> {

    fetch("https://fakestoreapi.com/products")
            .then(y=>y.json())
            .then(y=> {
                setData(y)
            });

  },[])

  return (
    <div className='row'>

        {
            data.map((value)=> {
                
                return(<ProductItem data={value}></ProductItem>)
            })

        }

           
    </div>
  )
}
