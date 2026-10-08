import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useState} from "react";
import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../context/CartContext";


function Items({theme, setTheme}) {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const search = params.get("search");
    const [product, setProduct] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1500);
    const [appliedMaxPrice, setAppliedMaxPrice] = useState(1500);
    const [wishlist, setWishlist] = useState([]);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const mainData = async () => {
            const response = await fetch('https://shoppiest-backend.onrender.com/api/products');
            const clearData = await response.json();
            setProduct(clearData);
        }
        const fetchWishList = async () => {
            try{
                const response = await fetch("https://shoppiest-backend.onrender.com/api/wishlist/1");
                const clearData = await response.json();
                if (clearData.wishlist) {
                    setWishlist(clearData.wishlist);
                }
            }catch(err){
                console.log({err: err.message});
            }
        }
        fetchWishList();
        mainData();
        setMaxPrice(2000)
        setAppliedMaxPrice(2000)
    }, [search, category])

    const toggleWishList = async (productId) => {
        try{
            const response = await fetch('https://shoppiest-backend.onrender.com/api/wishlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id: 1,
                    product_id: productId,
                })
            });
            const clearData = await response.json();
            if (clearData.isLiked) {
                setWishlist(prev=>[...prev, productId]);
            } else{
                setWishlist(prev => prev.filter(id => id !== productId));
            }
            console.log(clearData)
        }catch(err){
            console.log({err: err.message});
        }
    }
    const filterHandleSubmit = (e) => {
        e.preventDefault();
        setAppliedMaxPrice(maxPrice);
    }
    const filteredProducts = product.filter(p =>{
        const matchesCategory = !category || category === "all" || p.category === category;
        const matchesSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
        const matchesPrice = Number(p.price) <= appliedMaxPrice
        return matchesCategory && matchesSearch && matchesPrice
    })
    return (
        <div className="items-sceletone">
            <Navbar theme={theme} setTheme={setTheme} />
            <div className="items-starter">
                <h1>Big Summer Sale!</h1>
                <p>Up to <span id="items-span-first">50% Off</span> on Selected Items</p>
            </div>
            <div className="items-main">
                <div className="items-categories">
                    <h3>{category ? category.toUpperCase() + " →" : "ALL PRODUCTS →"}</h3>
                    <ul id="ul-categories">
                        <li><Link to="/Items" className="items-link">All products</Link></li>
                        <li><Link to="/Items?category=electronics" className="items-link">Electronics</Link></li>
                        <li><Link to="/Items?category=fashion" className="items-link">Clothing</Link></li>
                        <li><Link to="/Items?category=shoes" className="items-link">Shoes</Link></li>
                        <li><Link to="/Items?category=accessories" className="items-link">Accessories</Link></li>
                        <li><Link to="/Items?category=home" className="items-link">Home & Decor</Link></li>
                        <li><Link to="/Items?category=beauty" className="items-link">Beauty & Healthy</Link></li>
                        <li><Link to="/Items?category=gifts" className="items-link">Gifts</Link></li>
                    </ul>
                </div>

                <div className="items-main-first">
                    <div className="items-filter">
                        <p className="filter-title">Filter by price</p>
                        <label htmlFor="priceRange" className="filter-label">
                            Max Price: <strong>${maxPrice}</strong>
                        </label>
                        <input
                            type="range"
                            id="priceRange"
                            min="0"
                            max="1500"
                            value={maxPrice}
                            className="custom-price-slider"
                            onChange={(e) =>
                                setMaxPrice(Number(e.target.value))}
                        />
                        <button
                            type="button"
                            className="filter-btn"
                            onClick={filterHandleSubmit}
                        >
                            Filter
                        </button>
                    </div>

                    <div className="items-products">
                        {filteredProducts.map((p) => {
                            const isLiked = wishlist.includes(p.id);
                            return (
                                <div key={p.id} className="items-product-div">
                                    <button
                                        onClick={() => toggleWishList(p.id)}
                                        className={`wishlist-btn ${isLiked ? 'liked' : ''}`}
                                    >{isLiked ? '❤️' : '🤍'}</button>
                                    <img
                                        src={`${process.env.PUBLIC_URL}` + p.img_link}
                                        alt={p.name}
                                        style={{
                                            width: p.width,
                                            height: p.height,
                                            margin: "20px",
                                        }}
                                    />
                                    <Link to={`/product/${p.id}`} className="items-product-h4">
                                        {p.name}
                                    </Link>
                                    <p
                                        className="items-product-h4"
                                        style={{
                                            color: "darkOrange"
                                        }}
                                    >${p.price}</p>
                                    <input
                                        type="submit"
                                        value={"Add to Cart"}
                                        className="i-div-button"
                                        onClick={() =>addToCart(p.id)}
                                    />
                                </div>)
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Items;