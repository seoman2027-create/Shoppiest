import "../App.css"
import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function ShoppingCart() {
    return(
        <div className="base">
            <Navbar/>
            <h2 style={{
                textAlign:"center",
                color:"black",
                marginTop:"25px",
                marginBottom:"25px"
            }}
            >
                Shopping Cart
            </h2>
            <div className="s_main">
                <div className="s_main_first">
                    <h3>My shopping bag</h3>
                    <p>My items</p>
                </div>
                <div className="s_main_second">
                    <h3 style={{
                        marginBottom:"15px"
                    }}
                    >
                        Summary
                    </h3>
                    <div className="s_n_input">
                        <hr style={{
                            width: "100%",
                            margin:"5px 0 10px 0"
                        }}/>
                        <label
                            htmlFor="s_f_input"
                            style={{
                                fontSize:"13px",
                                textAlign:"right",
                                margin:"25px auto 10px 0"
                            }}
                        >
                            Do you have promo code?
                        </label>
                        <div className={"s_m_input"}>
                            <input
                                type="text"
                                placeholder="Enter your promocode"
                                id="s_f_input"
                                style={{
                                    width: "71%",
                                    height: "30px",
                                    fontFamily: "times new roman",
                                    fontSize: "15px",
                                    borderRadius: "5px 0 0 5px",
                                    border:"1px solid #000"
                                }}
                            />
                            <button
                                className="s_l_button"
                                style={{
                                    width: "27%",
                                    height: "34px",
                                    border:"1px solid #000",
                                    backgroundColor:"gray",
                                    color:"white",
                                    borderRadius: "0 5px 5px 0",
                                    marginBottom:"15px"
                                }}
                            >
                                Apply
                            </button>
                        </div>
                        <hr
                            style={{
                            width:"100%",
                            margin:"0"
                            }}
                        />
                        <div className="billing">
                            <label
                                htmlFor="first_input"
                                className="s_l_label"
                            >
                                Subtotal:
                            </label>
                            <span></span>
                            <label
                                htmlFor="second_input"
                                className="s_l_label"
                            >
                                Shipping:
                            </label>
                            <span></span>                         
                            <label
                                htmlFor="third_input"
                                className="s_l_label"
                            >
                                Tax:
                            </label>
                            <span></span>
                            <hr
                                style={{
                                    width:"100%",
                                    margin:"0"
                            }}/> <br />
                            <label
                                htmlFor="third_input"
                                className="s_l_label"
                            >
                                Total:
                            </label>
                            <span></span>
                            <hr style={{
                                width:"100%",
                                margin:"0"
                            }}
                            />
                        </div>
                        <button 
                            className="s_l_button"
                            style={{
                                backgroundColor:"gray",
                                border:"1px solid #000",
                                marginTop:"15px",
                                borderRadius:"5px",
                            }} >Check the bill</button>
                        <p
                            className="s_c_link"
                        >
                            Are you sure for your
                            <Link
                                to={"/PaymentInfo"}
                                style={{
                                    color:"green",
                                    fontWeight:"bold"
                                }}
                            > payment info and address?
                            </Link>
                        </p>
                        <button
                            className="s_l_button"
                            style={{
                                backgroundColor:"black",
                                marginTop:"10px",
                                borderRadius:"5px",
                            }}>
                            Order
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCart