import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Promo({theme, setTheme}){
    return (
        <div className="promo_main">
            <Navbar theme={theme} setTheme={setTheme}/>
            <div className="promo_main_first">
                <h3
                    style={{
                        textAlign: "center",
                        marginTop: "40px",
                        marginBottom: "10px",
                        color: theme === "light" ? "black" : "white",
                    }}
                >My shopping bag</h3>
                <p
                    style={{
                        textAlign: "center",
                        marginTop: "40px",
                        marginBottom: "10px",
                        color: theme === "light" ? "black" : "white",
                    }}
                >My items</p>
            </div>
            <Footer/>
        </div>
    )
}


export default Promo;