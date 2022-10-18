import React, { useState } from 'react'
import './Signup.css'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

export default function Login(){

const[data,setData]= useState({
    email:"",
    password:"",
});

    const myNav = useNavigate();

    const changeInput =(e)=>{

        setData({...data,[e.target.name] : e.target.value});
    }

    const myStyle = {
    //     color: "#fff",
	// background: "#4c535d",
	// fontfamily: "Roboto, sans-serif"
    }

    const mySubmit=(e)=>{

        e.preventDefault();

        axios.post("http://localhost:4000/accounts/authenticate",
        data)
        .then(y=>{
            console.log(y);

            localStorage.setItem("userInfo",JSON.stringify(y.data));
            
            myNav("/productlist");
        })


        
    }

    return( <div className="signup-form" style={myStyle}>
    <form  onSubmit={mySubmit}>
		<h2>Login</h2>
		{/* <p>It's free and only takes a minute.</p> */}
		<hr />
        {/* <div className="form-group">
        	<input type="text" className="form-control" name="title" placeholder="Title" required="required" onChange={myChangeHandler} />
        </div> */}
        {/* <div className="form-group">
        	<input type="text" className="form-control" name="firstName" placeholder="Enter Firstname" required="required" onChange={myChangeHandler} />
        </div> */}
        {/* <div className="form-group">
        	<input type="text" className="form-control" name="lastName" placeholder="Enter Lastname" required="required" onChange={myChangeHandler}  />
        </div> */}
        <div className="form-group">
        	<input type="email" className="form-control" name="email" placeholder="Email Address" required="required" onChange={changeInput} />
        </div>
		<div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" onChange={changeInput}/>
        </div>
		{/* <div className="form-group">
            <input type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" required="required" onChange={myChangeHandler}/>
        </div> */}
		<div className="form-group">
            <input type="submit" className="btn btn-primary btn-block btn-lg" / >
        </div>
		
    </form>
	<div className="text-center">Don't have an account? <Link to="/signup" style={{color: "red"}}>Signup here</Link></div>
</div>
    )
}