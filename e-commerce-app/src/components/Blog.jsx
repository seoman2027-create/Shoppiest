import "../App.css"
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from "react-router-dom";
import React from "react";

function Blog(){
    return (
        <div className="blog-main">
            <Navbar/>
            <h1
                style={{
                    color: "black",
                    textAlign: "center",
                    margin: "40px auto"
                }}
            >Our latest blogs</h1>
            <div className="h-main-blogs">
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
                    <p style={{
                        fontSize: "18px",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "20px 40px",
                        marginBottom: "20px",
                    }}>
                        This summer, Shoppiest has a sale for
                        everyone! Enjoy up to 40% off everything
                        from shoes to headphones, cosmetics to
                        summer accessories. The campaign is only
                        valid until the end of July!
                    </p>
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
                    <p style={{
                        fontSize: "18px",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "20px 40px",
                        marginBottom: "20px",
                    }}>
                        The most popular products on Shoppiest
                        this month: comfortable sneakers,
                        wireless headphones, and summer
                        accessories. Discover our customers'
                        favorites and join the trend!
                    </p>
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
                    <p style={{
                        fontSize: "18px",
                        textAlign: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        padding: "20px 40px",
                        marginBottom: "20px",
                    }}>
                        The Shoppiest family is growing!
                        Our customers share their
                        satisfaction with discounts,
                        fast delivery, and a convenient
                        shopping experience. Read their
                        stories and share yours with us!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog