import "../App.css"
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link, useLocation} from "react-router-dom";
import React from "react";
import { allProducts } from "./Items";

function Details() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const item = params.get("item");
    const product = allProducts.find(p => p.source.includes(item))
    return (
        <div className="details-main">
            <Navbar/>
            <div className={"div-det"}>
                <Link to={"/Items"} className={"detail-link"}>Items   ></Link>
                <span className={"detail-link"}>Details</span>
            </div>
            <div></div>
            <div className="content">
                {product && (
                    <div
                        className={"detail-item"}
                    >
                        <img
                            src={product.img}
                            alt={product.name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: product.width,
                                height: product.height,
                                marginTop: "20px",
                                padding: "10px",
                            }}
                        />
                        <p
                            className={"items-product-h4"}
                        >{product.name}
                        </p>
                        <p
                            className={"items-product-h4"}
                        >${product.price}</p>
                        <input
                            type="submit"
                            value="Add to Cart"
                            className="i-div-button"
                        />
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default Details;