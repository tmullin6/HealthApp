import Navbar from "./navbar";
import Footer from "./footer";

const UserForm = ()=>{
    return(
        <>
        <Navbar />
        <div className="user-info-form">
        <h1>Tell Us Some More About You</h1>
        <form>
            <label>Age:</label><br />
            <input /><br />
            <label>Height(in):</label><br />
            <input /><br />
            <label>Weight(lbs):</label><br />
            <input /><br />
            <input type="submit" />
        </form>
        </div>
        <Footer />
        </>
    );
}

export default UserForm;