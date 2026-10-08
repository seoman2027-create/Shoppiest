import "../App.css"
import {Link, useNavigate} from "react-router-dom";
import { useState} from "react";



function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmedPassword) {
            alert("Passwords don't match. Please check again.");
            return;
        }
        try {
            const response = await fetch('https://shoppiest-backend.onrender.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password}),
            })
            navigate("/")
            const data = await response.json();
            console.log('Coming response from server:', data);
        } catch (error){
            console.log({error: error.message});
        }
    }
    return(
        <div className="regMain">
            <div className="regContainer">
                <h1
                    style={{
                        textAlign: "center",
                        padding:"20px"
                    }}>
                    Welcome to
                </h1>
                <img
                    src={`${process.env.PUBLIC_URL}/shoppiest-white.png`}
                    alt="shoppiest"
                    width={"170px"}
                />
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <h2>Registration form</h2>
                <p>Or
                    <Link
                        to="/"
                        style={{
                                textDecoration:"none",
                                color:"rgb(6 49 186)",
                                fontWeight:"bold",
                        }}> login </Link>
                    if you already have an account
                </p>
                <label htmlFor="name" className="r_label">Name</label>
                <input 
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    required 
                    className="r_input"
                />
                <label htmlFor="email" className="r_label">Email</label>
                <input 
                    type="email"
                    placeholder="Enter your e-mail"
                    id="email"
                    value={email}
                    onChange={(e)=>{setEmail(e.target.value)}}
                    required 
                    className="r_input"
                />
                <label htmlFor="password" className="r_label">Password</label>
                <input 
                    type="password"
                    placeholder="Enter new password"
                    id="password"
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required 
                    className="r_input"
                />
                <label htmlFor="new_password" className="r_label">Repeat your password</label>
                <input 
                    type="password"
                    placeholder="Enter new password"
                    id="new_password"
                    value={confirmedPassword}
                    onChange={(e)=>{
                        setConfirmedPassword(e.target.value)
                    }}
                    required 
                    className="r_input"
                />
                <div className="bottom">
                    <input 
                        type="checkbox"
                        required
                        id="terms"
                        className="last"
                    />
                    <label htmlFor="terms" className="r_label">"I'm agree with your <Link className="a_link" to={"/Policy"}>Terms of Service and Privacy Policy</Link>"</label>
                </div>
                <input
                    type="submit"
                    value="Register"
                    className="r_signButton"
                />
            </form>
            <p
                style={{
                    textAlign: "center",
                    margin:"40px",
                    fontSize:"12px",
                    color:"white",
                    background:"#312770",
            }}>
                Copyright 2025. Developed by Iso Seo
            </p>
        </div>
    )
}
export default Register;