import "../App.css"
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";


function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            })
            const data = await response.json()
            if (!response.ok){
                alert(data.error || "Login failed.");
                return;
            }
            localStorage.setItem('shoppiest_token', data.token)
            console.log('Login is successfully and token saved');
            alert(data.message)
            navigate("/Home");
        }catch(error){
            console.log({error: error.message})
            alert(error.message);
        }
    }
    return(
        <div className="l-body">
            <div className="l-main">
                <div className={"l-heading"}>
                    <h1>Shoppiest</h1>
                    <h2>Welcome back</h2>
                </div>
                <form onSubmit={handleSubmit} className="form">
                    <h2 style={{
                        color:"white",
                        fontWeight:"bold",
                        textAlign:"center"
                    }}
                    >
                        Login form
                    </h2>
                    <p style={{
                        textAlign: "center",
                        color:"black"
                    }}>Or
                        <Link
                            to="/Register"
                            style={{
                                textDecoration:"none",
                                color:"rgb(6 49 186)",
                                fontWeight:"bold",
                            }}> register
                        </Link> if you already haven't an account</p>
                    <label htmlFor="name" className="l_label">Email</label>
                    <input
                        type="text"
                        placeholder="Enter e-mail address"
                        id="name"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                        className="l_input"
                    />
                    <label htmlFor="name" className="l_label">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="name"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                        className="l_input"
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                        }}
                    >
                        <input
                            type="submit"
                            value="Login"
                            className="l_button"
                        />
                        <Link
                            to="/Home"
                            type="submit"
                            className="l_button"
                        >Enter as guess</Link>
                    </div>
                </form>
                <p style={{
                    textAlign: "center",
                    margin:"10px",
                    padding:"20px",
                    fontSize:"12px",
                    color:"white"
                }}>
                    Copyright 2025. Developed by Iso Seo
                </p>
            </div>
        </div>
    )
}

export default LogIn