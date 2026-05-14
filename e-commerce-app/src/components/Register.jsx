import "../App.css"
import { useEffect } from "react";
import {Link} from "react-router-dom";

function Register() {
    useEffect(()=>{
        document.body.classList = "r-body";
    },[])
    return(
        <div className="loginMain">
            <div className="loginContainer">
                <h1
                    style={{
                        textAlign: "center",
                        padding:"20px"
                    }}>
                    Welcome to
                </h1>
                <Link
                    to="/"
                    className="r_a_link"
                >
                    <img
                        src="./Shoppiest-white.png"
                        alt="shoppiest"
                        width={"170px"}
                    />
                </Link>
            </div>
            <form className="form">
                <h2 style={{textAlign:"center"}}>Sign in Page</h2>
                <p style={{textAlign: "center"}}>Or <Link to="/Login">login</Link> if you already have an account</p>
                <label htmlFor="name" className="r_label">Name</label>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    //onClick={handleClick}
                    required 
                    className="r_input"
                />
                <label htmlFor="email" className="r_label">Email</label>
                <input 
                    type="email"
                    placeholder="Enter your e-mail"
                    id="email"
                    //onClick={handleClick}
                    required 
                    className="r_input"
                />
                <label htmlFor="password" className="r_label">Password</label>
                <input 
                    type="password"
                    placeholder="Enter new password"
                    id="password"
                    //onClick={handleClick}
                    required 
                    className="r_input"
                />
                <label htmlFor="new_password" className="r_label">Repeat your password</label>
                <input 
                    type="password"
                    placeholder="Enter new password"
                    id="new_password"
                    //onClick={handleClick}
                    required 
                    className="r_input"
                />
                <div className="bottom">
                    <input 
                        type="checkbox"
                        required
                        id="terms"
                        //onClick={handleClick}
                        className="last"
                    />
                    <label htmlFor="terms" className="r_label">"I'm agree with your <a href="#link" className="a_link">Terms of Service</a> and <a href="#link" className="a_link">Privacy Policy</a>"</label>
                </div>
                <button className="r_signButton">Sign up</button>
                </form>
            <p
                style={{
                    textAlign: "center",
                    margin:"10px",
                    padding:"10px",
                    fontSize:"12px",
                    color:"white"
            }}>
                Copyright 2025. Developed by Iso Seo
            </p>
        </div>
    )
}
export default Register;