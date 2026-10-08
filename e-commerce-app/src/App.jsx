import "./App.css"
import {HashRouter, Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"
import ShoppingCart from "./components/shopping-cart"
import Items from "./components/Items"
import About from "./components/About";
import Contact from "./components/Contact"
import Profile from "./components/Profile";
import Promo from "./components/Promotions";
import Policy from "./components/Policy";
import Blog from "./components/Blog";
import FAQ from "./components/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {useEffect, useState} from "react";
import Details from "./components/Product-details";
import {CartProvider} from "./context/CartContext";


function App() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "light") {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "black";
        }
    }, [theme]);

    return(
        <CartProvider>
            <HashRouter>
                <div className="heading">
                    <Routes>
                        <Route path={"/Register"} element={<Register />} />
                        <Route path="/Home" element={<Home theme={theme} setTheme={setTheme} />} />
                        <Route path="/Navbar" element={<Navbar theme={theme} setTheme={setTheme} />} />
                        <Route path={"/"} element={<LogIn theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/product/:id"} element={<Details theme={theme} setTheme={setTheme}/>}></Route>
                        <Route path={"/ShoppingCart"} element={<ShoppingCart theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/Profile"} element={<Profile theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/Items"} element={<Items theme={theme} setTheme={setTheme} />} />
                        <Route path={"/About"} element={<About theme={theme} setTheme={setTheme} />} />
                        <Route path={"/Contact"} element={<Contact theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/Promo"} element={<Promo theme={theme} setTheme={setTheme} />} />
                        <Route path={"/Policy"} element={<Policy theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/FAQ"} element={<FAQ theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/Blog"} element={<Blog theme={theme} setTheme={setTheme}/>} />
                        <Route path={"/Footer"} element={<Footer theme={theme} setTheme={setTheme}/>} />
                    </Routes>
                </div>
            </HashRouter>
        </CartProvider>
    )
}

export default App
