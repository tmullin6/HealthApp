import {Link} from "react-router-dom";
import {Button,ButtonGroup} from '@mui/material';

function Navbar(){

return (
<div className="header">
        <div className="title"><Button variant ="outline"><Link to="/">Health App</Link></Button></div>
        <div className="register">
          <ButtonGroup variant="contained">
          <Button><Link to="/login">Login</Link></Button>
          <Button><Link to="/signup">Sign Up</Link></Button>
          </ButtonGroup>
        </div>
    </div>
)
}

export default Navbar;