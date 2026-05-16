import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Promo({theme, setTheme}){
    return (
        <div className="promo_main">
            <Navbar theme={theme} setTheme={setTheme}/>
            <div className="promo_main_first">
                <h1>USE CODE: <span>SPRING20</span></h1>
                <p>Get <span>20% OFF</span> Your order</p>
                <button className={"i-div-button"}>COPY CODE</button>
            </div>
            <div className="main-promos">
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/first-promo.png`}
                        alt="promo shoes item"
                        style={{
                            width: "250px",
                            height: "250px",
                            margin: "10px"
                        }}
                    />
                </div>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/second-promo.png`}
                        alt="promo shoes item"
                        style={{
                            width: "250px",
                            height: "250px",
                            margin: "10px"
                        }}
                    />
                </div>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/third-promo.png`}
                        alt="promo shoes item"
                        style={{
                            width: "250px",
                            height: "250px",
                            margin: "10px"
                        }}
                    />
                </div>
                <div>
                    <img
                        src={`${process.env.PUBLIC_URL}/fourth-promo.png`}
                        alt="promo shoes item"
                        style={{
                            width: "250px",
                            height: "250px",
                            margin: "10px"
                        }}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Promo;