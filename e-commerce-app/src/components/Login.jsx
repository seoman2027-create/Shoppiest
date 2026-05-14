import "../App.css"
import {Link} from "react-router-dom";
import {useEffect} from "react";
function LogIn() {
    useEffect(() => {
        document.body.classList = "l-body";
    },[]
    )

    return(
        <div className="l_main">
            <h1 style={{textAlign:"center"}}>Shoppiest</h1>
            <h2 style={{textAlign:"center"}}>Welcome back</h2>
            <form action="" className="form">
                <h2 style={{
                    color:"white",
                    fontWeight:"bold",
                    textAlign:"center"
                }}
                >
                    Sign in form
                </h2>
                <p style={{
                    textAlign: "center",
                    color:"black"
                }}>Or
                    <Link
                        to="/Register"
                        style={{
                            textDecoration:"none",
                            color:"rgb(130, 221, 102)"
                    }}> register
                    </Link> if you already have an account</p>
                <label htmlFor="name" className="l_label">Username</label>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    id="name"                 
                    //onClick={handleClick}
                    required 
                    className="l_input"
                />
                <label htmlFor="name" className="l_label">Password</label>
                <input 
                    type="password"
                    placeholder="Enter your password"
                    id="name"                 
                    //onClick={handleClick}
                    required 
                    className="l_input"
                />
                <button className="l_button">Sign in</button>
            </form>
            <p style={{
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

export default LogIn