import {useState} from "react";
import Footer from "./footer"
import {Link} from "react-router-dom";
import {Button,ButtonGroup} from '@mui/material';


function Login(){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const sendCredentials = (event)=>{
        event.preventDefault();
        console.log(username,password);
    }

    const handleUsernameChange = (event)=>{
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }

    return(
        <>
        <div className="login-title">
        Track My Health
        </div>
        <div className="login-form">
        <form onSubmit={sendCredentials}>
            <label>Username:</label><br />
            <input onChange={handleUsernameChange}/><br />
            <label>Password:</label> <br />
            <input type="password" onChange={handlePasswordChange}/><br />
            <div className="buttons">
            <ButtonGroup variant="contained">
            <Button type="submit">Login</Button>
            <Button><Link to="/signup">Sign Up</Link></Button>
            </ButtonGroup>
            </div>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default Login;