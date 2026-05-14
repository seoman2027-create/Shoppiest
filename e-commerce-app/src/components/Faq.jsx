import "../App.css"
import {Link} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function FAQ(){
    return (
        <div className="faq-main">
            <Navbar/>
            <Link
                to="/Register"
            >
                Register
            </Link>
            <Link
                to="/Login"
            >
                Login
            </Link>
            <Footer/>
        </div>
    )
}

export default FAQ