import "../App.css"
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Promo({theme, setTheme}){
    return (
        <div className="promo_main">
            <Navbar theme={theme} setTheme={setTheme}/>
            <div className="promo_main_first">
                <h1 style={{
                    textAlign:'center',
                }}>Exclusive Deals & Promotions</h1>
                <p>
                    Discover the latest campaigns
                    and special offers on Shoppiest.
                    Save more, shop smarter, and enjoy
                    limited‑time deals across all
                    categories!
                </p>
            </div>
            <h2 style={{
                textAlign:'center',
            }}>Campaigns & Offers</h2>
            <div className="main-promos">
                <div>
                    <h3>Summer Sale — Up to 30% Off</h3>
                    <p>
                        Seasonal discounts on clothing
                        and accessories. Refresh your
                        wardrobe at lower prices.
                    </p>
                </div>
                <div>
                    <h3>Electronics Week — 20% Off</h3>
                    <p>
                        Special deals on phones, laptops,
                        and accessories. Limited stock
                        available.
                    </p>
                </div>
                <div>
                    <h3>Buy One, Get One Free (BOGO)</h3>
                    <p>
                        Select items come with a free
                        second product. Available only
                        on promo page listings.
                    </p>
                </div>
                <div>
                    <h3>Promo Code: SAVE10</h3>
                    <p>
                        Enter SAVE10 at checkout to get an
                        extra 10% discount. Valid for one use
                        per customer.
                    </p>
                </div>
                <div>
                    <h3>Free Shipping</h3>
                    <p>
                        Enjoy free delivery on all orders
                        above 50 USD. Applies to every category.
                    </p>
                </div>
                <div>
                    <h3>Weekend Flash Sale — 40% Off</h3>
                    <p>
                        Exclusive weekend‑only discounts.
                        Hurry, limited time and limited stock!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default Promo;