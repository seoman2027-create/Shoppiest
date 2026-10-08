import "../App.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {CartContext} from "../context/CartContext";

function Details() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const mainData = async () => {
            const response = await fetch(`https://shoppiest-backend.onrender.com/api/products/${id}`);
            const clearData = await response.json()
            setProduct(clearData)
        }
        mainData()
    }, [id])

    const decreaseAmount = () => {
        setCount((prev) => Math.max(1, prev - 1));
    }
    const increaseAmount = () => {
        setCount((prev) => prev + 1)
    }

    return (
        <div className="details-main">
            <Navbar/>
            <div className={"div-det"}>
                <Link to={"/Items"} className={"detail-link"}>Items >  </Link>
                <span className={"detail-link"}> Details</span>
            </div>
            <div>
                {product &&(
                    <div className={"item-info"}>
                        <img
                            src={`${process.env.PUBLIC_URL}${product.img_link}`}
                            alt={product.name}
                            style={{
                                height: `${product.height * 1.7}px`,
                                width: `${product.width * 1.7}px`,
                            }}
                            className={"product-img"}
                        />
                        <div
                            className={"product-info"}
                        >
                            <p
                                style={{
                                    color: `black`,
                                    fontSize: "25px",
                                    fontWeight: "bold",
                                    fontFamily: "Google Sans Flex, sans-serif",
                                }}
                            >{product.name}</p>
                            <p>⭐⭐⭐⭐☆ (4.8 / 5) • 120 Comments</p>
                            <p>
                                In stock : 🟢 has
                            </p>
                            <p
                                style={{
                                    color: `darkOrange`,
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                }}
                            >${product.price}</p>
                        </div>
                        <div className="item-but">
                            <div className="counter">
                                <button
                                    className="counter-but"
                                    onClick={decreaseAmount}
                                    type="button"
                                    style={{
                                        width: "15px"
                                    }}
                                >-</button>
                                <span
                                    style={{
                                        marginLeft: "8px",
                                        width: "20px",
                                        fontWeight: "bold",
                                    }}
                                > {count} </span>
                                <button
                                    className="counter-but"
                                    onClick={increaseAmount}
                                    type="button"
                                    style={{
                                        width: "15px"
                                    }}
                                >+</button>
                            </div>
                            <button
                                type="button"
                                className="i-div-button"
                                value={count}
                                onClick={() => addToCart(product.id, count)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                )
            }
            </div>
            <div className="h-main-2">
                <div className="h-duties">
                    <img
                        src={`${process.env.PUBLIC_URL}/security.png`}
                        alt="security"
                        style={{
                            width: "35px"
                        }}
                    />
                    <p>Security payments</p>
                </div>
                <div className="h-duties">
                    <img
                        src={`${process.env.PUBLIC_URL}/support.png`}
                        alt="support"
                        style={{
                            width: "35px"
                        }}
                    />
                    <p>Customer Support</p>
                </div>
                <div className="h-duties">
                    <img
                        src={`${process.env.PUBLIC_URL}/delivery.png`}
                        alt="delivery"
                        style={{
                            width: "40px"
                        }}
                    />
                    <p>Fast Delivery</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Details;