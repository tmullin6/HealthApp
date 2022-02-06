import Footer from "./footer";
import {useState} from "react";
import {Button,ButtonGroup} from '@mui/material';
import {Link} from "react-router-dom";
import apiServices from "../services/api";

function Signup(){
  const[firstName,setFirstName] =useState('');
  const[lastName,setLastName] =useState('');
  const[username,setUsername] =useState('');
  const[password,setPassword] =useState('');
  const[age,setAge] =useState(0);
  const[height,setHeight] =useState(0);
  const[weight,setWeight] =useState(0);

  const postUser = (event)=>{
    event.preventDefault();

    let user = {
      username:username,
      password:password,
      firstName:firstName,
      lastName:lastName,
      age:age,
      height:height,
      weight: weight
    }
    let missingInfo = []

    for ( let prop in user) {
      
      if(user[prop]==='' || user[prop]===0){
        missingInfo.push(prop);
      }
    }

    if(missingInfo.length !=0){
      alert(`Please provide the following information: \n ${missingInfo}`);
    }
    
    apiServices.createUser(user).then((res)=>{
    //if(!res.ok){ throw new Error("Server Error")};
    console.log(JSON.stringify(user));
    })
    
    
  }
  
  const handleFirstName = (event)=>{
    setFirstName(event.target.value);  
  }

  const handleLastName = (event)=>{
    setLastName(event.target.value);  
  }

  const handleUsername = (event)=>{
    setUsername(event.target.value);  
  };

  const handlePassword = (event)=>{
    setPassword(event.target.value);  
  }

  const handleAge = (event)=>{
    setAge(event.target.value);  
  }

  const handleHeight = (event)=>{
    setHeight(event.target.value);  
  }

  const handleWeight = (event)=>{
    setWeight(event.target.value);  
  }


  
    return(
      <>
      <div className="login-title">
        Track My Health
        </div>
      <div className="signup-form">
      <form >

        <div className="user-login-info">
        <h1>Let's start here</h1>
        <label>Username:</label><br />
        <input required={true} onChange={handleUsername}/><br />
        <label>Password:</label><br />
        <input type="password" required={true} onChange={handlePassword}/><br />
        </div>

        <div className="user-health-info">
        <h2>And then tell us a little more about you</h2>
        <label>First Name:</label><br />
        <input required={true} onChange={handleFirstName}/><br />
        <label>Last Name:</label><br />
        <input required={true} onChange={handleLastName}/><br />
        <label>Age:</label><br />
        <input required={true} onChange={handleAge}/><br />
        <label>Height(in):</label><br />
        <input required={true} onChange={handleHeight}/><br />
        <label>Weight(lbs):</label><br />
        <input required={true} onChange={handleWeight}/>
        </div>
       
       <div className="buttons">
        <ButtonGroup variant="contained">
        <Button type="submit" onClick={postUser}>Sign Up</Button>
        <Button><Link to="/login"> Back to Login</Link></Button>
        </ButtonGroup>
        </div>
        
      </form>
      </div>
      <Footer />
      </>
    )
}

export default Signup;