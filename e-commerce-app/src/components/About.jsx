import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About({theme, setTheme}) {
    return (
        <div style={{
            color: theme === "light" ? "black" : "white",
            display: "flex",
            flexDirection: "column",
            marginRight: "auto",
            marginLeft: "auto"
        }}>
            <Navbar theme={theme} setTheme={setTheme}/>
            <main
                style={{
                display: "block",
                margin: "20px"
            }}>
                <h1 style={{
                    textAlign: "center"
                }}>About us</h1>
                <div className="about-div">
                    <h4>Welcome to Shoppiest</h4>
                    <p>
                        At Shoppiest, we believe that online
                        shopping should be simple, secure, and
                        enjoyable. Our mission is to create a
                        seamless e‑commerce experience where
                        customers can explore products,
                        manage their carts, and complete
                        payments with confidence.
                    </p>
                </div>
                <div className="about-div">
                    <h4>Our vision</h4>
                    <p>
                        We aim to build a platform that
                        combines modern design with powerful
                        functionality. From product details
                        to secure checkout, every page is
                        crafted to deliver clarity and ease of use.
                    </p>
                </div>
                <div className="about-div">
                    <h4>What we offer</h4>
                    <ul>
                        <li>
                            A wide range of products with detailed
                            descriptions.
                        </li>
                        <li>
                            A user‑friendly shopping cart and payment system.
                        </li>
                        <li>
                            Personalized features like wishlists
                            and order history.
                        </li>
                        <li>
                            An admin panel for efficient
                            product and order management.
                        </li>
                    </ul>
                </div>
                <div className="about-div">
                    <h4>Our promise</h4>
                    <p>
                        We are committed to providing
                        a reliable shopping journey,
                        ensuring that every step — from
                        browsing to payment — is smooth,
                        transparent, and trustworthy.
                    </p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default About;