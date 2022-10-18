import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  
    const myNavigation = useNavigate();

    const myLogout=()=>{

      localStorage.removeItem("userInfo");
      myNavigation("/");
    }

    return (

    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
       
       
        <li class="nav-item my-2 my-lg-0 ">
          <button className='nav-link' onClick={myLogout} style={{color: "red"}}>Logout</button>
        </li>
      
      </ul>
    </div>
    </nav>
  )
}
