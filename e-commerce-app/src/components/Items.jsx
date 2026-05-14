import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";


export const allProducts = [
    { name: "Wireless headphones", category: "electronics", price: 120.19, img: "./headphones.png", width: 200, height: 180, source: "/Details?item=headphones"},
    { name: "Casual t-shirt", category: "fashion", price: 35.35, img: "./t-shirt.png", width: 150, height: 150, source: "/Details?item=t-shirt" },
    { name: "Nike Running shoes", category: "shoes", price: 95.89, img: "./shoes.png", width: 160, height: 160, source: "/Details?item=shoes" },
    { name: "Apple smartwatch", category: ["electronics", "gifts"], price: 250.15, img: "./smartwatch.png", width: 160, height: 160, source: "/Details?item=smartwatch" },
    { name: "Leather handback", category: "fashion", price: 80.22, img: "./handback.png", width: 160, height: 160, source: "/Details?item=handback" },
    { name: "Huawei smartphone", category: "electronics", price: 450.46, img: "./smartphone.png", width: 160, height: 160, source: "/Details?item=smartphones" },
    { name: "Sunglasses", category: ["fashion", "gifts"], price: 60.37, img: "./sunglasses.webp", width: 220, height: 160, source: "/Details?item=sunglasses" },
    { name: "Home lamp", category: "home", price: 40, img: "./lamp.png", width: 160.48, height: 160, source: "/Details?item=lamp" },
    { name: "Nicon hand camera", category: "electronics", price: 700.99, img: "./camera.png", width: 180, height: 180, source: "/Details?item=camera" },
    { name: "TriDerma hand cream", category: "beauty", price: 25.57, img: "./hand-cream.png", width: 160, height: 160, source: "/Details?item=hand-cream" },
    { name: "De Beers bracelet", category: ["fashion", "accessories", "gifts"], price: 350.55, img: "./bracelet.png", width: 160, height: 160, source: "/Details?item=bracelet" },
    { name: "Thalia Olive Oil Cream", category: "beauty", price: 30.97, img: "./oil-cream.png", width: 160, height: 160, source: "/Details?item=oil-cream" },
    { name: "Haute Luxe Eau De Parfume", category: ["beauty", "accessories", "gifts"], price: 120.88, img: "./parfume.png", width: 120, height: 120, source: "/Details?item=parfume" },
    { name: "HP Laptop", category: "electronics", price: 1000.76, img: "./laptop.png", width: 150, height: 160, source: "/Details?item=laptop" },
];

function Items({theme, setTheme}) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const [product, setProduct] = useState([]);

    const products = category
        ? allProducts.filter(p => Array.isArray(p.category)
            ? p.category.includes(category)
            : p.category === category)
        : allProducts;

    useEffect(() => {
        fetch("/api/products?category=fashion")
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product]);

    return (
        <div className="items-sceletone">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className={"items-starter"}>
                <h1>Big Summer Sale!</h1>
                <p>Up to <spans id="items-span-first">50% Off</spans> on Selected Items</p>
            </div>
            <div className="items-main">
                <div className="items-categories">
                    <h3>{category ? category.toUpperCase() : "All Products"}</h3>
                    <hr/>
                    <ul id="ul-categories">
                        <li><Link to="/Items" className={"items-link"}>All products →</Link></li>
                        <li><Link to="/Items?category=electronics" className={"items-link"}>Electronics →</Link></li>
                        <li><Link to="/Items?category=fashion" className={"items-link"}>Clothing →</Link></li>
                        <li><Link to="/Items?category=shoes" className={"items-link"}>Shoes →</Link></li>
                        <li><Link to="/Items?category=accessories" className={"items-link"}>Accessories →</Link></li>
                        <li><Link to="/Items?category=home" className={"items-link"}>Home & Decor →</Link></li>
                        <li><Link to="/Items?category=beauty" className={"items-link"}>Beauty & Healthy →</Link></li>
                        <li><Link to="/Items?category=gifts" className={"items-link"}>Gifts →</Link></li>
                    </ul>
                </div>
                <div className="items-main-first">
                    <div className="items-filter">
                        <input
                            type={"text"}
                            id={"items-search-input"}
                        />
                        <a href={"#link"}>
                            <img
                                src={"./search_icon.png"}
                                style={{
                                    width: "20px",
                                    paddingLeft: "0"
                                }}
                                alt={"Link"}
                            />
                        </a>
                        <p
                            style={{
                                color: "black",
                                fontWeight: "bold",
                            }}
                        >Sort:</p>
                        <select id="items-select">
                            <option>by low price</option>
                            <option>by high price</option>
                            <option>by highest demand</option>
                            <option>by lowest demand</option>
                            <option>by newest</option>
                            <option>by latest</option>
                        </select>
                    </div>
                    <div className="items-products">
                        {products.map((p,index) => (
                            <div
                                key={index}
                                className={"items-product-div"}
                            >
                                <img
                                    src={p.img}
                                    alt={p.name}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: p.width,
                                        height: p.height,
                                        marginTop: "20px",
                                        padding: "10px",
                                    }}
                                />
                                <Link
                                    to={p.source}
                                    className={"items-product-h4"}
                                >{p.name}
                                </Link>
                                <p
                                    className={"items-product-h4"}
                                >${p.price}</p>
                                <input
                                    type="submit"
                                    value="Add to Cart"
                                    className="i-div-button"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Items;
