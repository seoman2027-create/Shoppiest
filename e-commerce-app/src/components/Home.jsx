import React, {useState} from "react";
import "../App.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";


function Home({theme, setTheme}) {
    const [time, setTime] = useState(259200);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, []);




    const days = Math.floor(time / 86400);
    const hours = Math.floor((time % 86400) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return(
        <div className="h_sceletone">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="h_main">
                <div className="h-main-first">
                    <div className="h-main-1">
                        <h1
                            className="h_h3"
                        >
                            Welcome to Shoppiest
                        </h1>
                        <p>
                            Your trusted shopping experience
                        </p>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                marginTop: "20px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="/Items"
                        >
                            Start shopping
                        </Link>
                        <div className="h-main-2">
                            <p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/security.png`}
                                    alt="security icons"
                                    style={{
                                        width: "35px",
                                    }}
                                />
                            </p>
                            <p>Security payments</p>
                            <p>
                                <img
                                        src={`${process.env.PUBLIC_URL}/support.png`}
                                    alt="security icons"
                                    style={{
                                        width: "35px",
                                    }}
                                />
                            </p>
                            <p>Customer Support</p>
                            <p>
                                <img
                                    src={`${process.env.PUBLIC_URL}/delivery.png`}
                                    alt="security icons"
                                    style={{
                                        width: "40px",
                                    }}
                                />
                            </p>
                            <p>Fast Delivery</p>
                        </div>
                    </div>
                </div>
                <h1
                    className="h_h1"
                    style={{
                        textAlign: "center",
                        marginTop: "40px",
                        marginBottom: "10px",
                        color: theme === "light" ? "black" : "white",
                    }}
                >
                    Categories
                </h1>
                <div className="h-main-second">
                    <div className="h-second-1">
                        <h1 className="h-second-h1">Fashion</h1>
                        <Link
                            to="/Items?category=fashion"
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                        >
                            Let's look
                        </Link>
                    </div>
                    <div className="h-second-2">
                        <h1 className="h-second-h1">Home</h1>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="Items?category=home"
                        >
                            Let's look
                        </Link>
                    </div>
                </div>
                <div className="h-main-third">
                    <div className="h-third-1">
                        <h1 className="h-second-h1">Accessories</h1>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="Items?category=accessories"
                        >
                            Let's look
                        </Link>
                    </div>
                    <div className="h-third-2">
                        <h1 className="h-second-h1">Electronics</h1>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="Items?category=electronics"
                        >
                            Let's look
                        </Link>
                    </div>
                </div>
                <div className="h-main-fourth">
                    <div className="h-fourth-1">
                        <h1 className="h-second-h1">Beauty and Healthy</h1>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="Items?category=beauty"
                        >
                            Let's look
                        </Link>
                    </div>
                    <div className="h-fourth-2">
                        <h1 className="h-second-h1">Gifts</h1>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color:"white",
                                backgroundColor: "black",
                                borderRadius: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                            }}
                            to="Items?category=gifts"
                        >
                            Let's look
                        </Link>
                    </div>
                </div>
                <h1
                    className="h_h1"
                    style={{
                        textAlign: "center",
                        marginTop: "30px",
                        color: theme === "light" ? "black" : "white",
                    }}
                >
                    New & Hot Deals
                </h1>
                <div className="h-main-fifth">
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "10px 40px",
                        width: "77%",
                        borderRadius: "15px",
                        textDecoration: "none",
                    }}>
                        <h1>-30% OFF
                            🔥 HOT
                            NEW
                        </h1>
                        <h2
                            style={{
                                textAlign: "center",
                            }}
                        >
                            Limited time offers you can’t miss
                        </h2>
                        <Link
                            style={{
                                padding: "10px 40px",
                                fontSize: "17px",
                                color: "black",
                                border: "none",
                                borderRadius: "15px",
                                backgroundColor: "white",
                                marginTop: "20px",
                                fontWeight: "bold"
                            }}
                            to="/Items"
                        >
                            Shop now
                        </Link>
                        <div className="div-span">
                            <div className="h-main-span"> {days}<p> days </p></div>
                            <div className="h-main-span">{hours} <p> hours </p></div>
                            <div className="h-main-span">{minutes}<p> mins </p></div>
                            <div className="h-main-span">{seconds}<p> sec </p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-main-blogs">
                <h1
                    style={{
                        color: "black",
                        textAlign: "center",
                        margin: "40px auto"
                    }}
                >Blogs</h1>
                <div className="h-blog-1">
                    <h2 style={{
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        padding: "20px 40px",
                    }}>
                        Summer sales have begun —
                        don't miss the alerts at Shoppiest!
                    </h2>
                    <Link
                        style={{
                            padding: "10px 40px",
                            fontSize: "17px",
                            color:"white",
                            backgroundColor: "black",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                        to="Blog"
                    >
                        Let's look
                    </Link>
                </div>
                <div className="h-blog-2">
                    <h2 style={{
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        padding: "20px 40px",
                    }}>
                        This Month's Trending Products
                    </h2>
                    <Link
                        style={{
                            padding: "10px 40px",
                            fontSize: "17px",
                            color:"white",
                            backgroundColor: "black",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                        to="Blog"
                    >
                        Let's look
                    </Link>
                </div>
                <div className="h-blog-3">
                    <h2 style={{
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        color: "white",
                        padding: "20px 40px",
                    }}>
                        What Our Customers Say?
                    </h2>
                    <Link
                        style={{
                            padding: "10px 40px",
                            fontSize: "17px",
                            color:"white",
                            backgroundColor: "black",
                            borderRadius: "15px",
                            fontWeight: "bold",
                            textDecoration: "none",
                        }}
                        to="Blog"
                    >
                        Let's look
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Home