import {useState} from "react";
import {Button,ButtonGroup} from '@mui/material';

const Header = ()=>{

  return (
    <>
    <div className="header">
        <div className="title">Health App</div>
        <div className="register">
          <ButtonGroup variant="contained">
          <Button>Login</Button>
          <Button>Sign Up</Button>
          </ButtonGroup>
        </div>
    </div>
    </>

  )}

const Body = ()=>{
  return (
  <div className="body">
    <div className="user-info">
    <p>User Calories and info here</p>
    </div>
    <div className="add-items">
    <p>Links to add exercises/food/etc. here</p>
    </div>
  
  </div>
)}

function App() {

  const[user,setUser]=useState(false);

  return (
    <>
    <Header />
    <Body />
    </>
  );
}

export default App;
