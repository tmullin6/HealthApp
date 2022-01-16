import {useState} from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";


const Body = user=>{

  if(user===true){
  return (
    <>
    <Navbar />
    <div className="body">
      <div className="user-info">
        <p>User Calories and info here</p>
      </div>
      <div className="add-items">
        <p>Links to add exercises/food/etc. here</p>
      </div>
  
    </div>
    <Footer />
    </>
    
  )}

  else {

  return (
    <div>
      <Login />
    </div>
  )}
}



function App() {

  const[user,setUser]=useState(false);

  
  return (
    <>
      
      <Body user={user} />
      
    </>
  );
}

export default App;
