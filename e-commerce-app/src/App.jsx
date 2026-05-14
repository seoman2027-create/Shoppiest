import "./App.css"
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home"
import ShoppingCart from "./components/shopping-cart"
import Items from "./components/Items"
import PaymentInfo from "./components/Payment-info";
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
        <Router className="app" basename="/">
            <div className="heading">
                <Routes>
                    <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
                    <Route path="/Navbar" element={<Navbar theme={theme} setTheme={setTheme} />} />
                    <Route path={"/Login"} element={<LogIn />} />
                    <Route path={"/Details"} element={<Details />}></Route>
                    <Route path={"/Register"} element={<Register />} />
                    <Route path={"/ShoppingCart"} element={<ShoppingCart />} />
                    <Route path={"/Profile"} element={<Profile />} />
                    <Route path={"/PaymentInfo"} element={<PaymentInfo />} />
                    <Route path={"/Items"} element={<Items theme={theme} setTheme={setTheme} />} />
                    <Route path={"/About"} element={<About theme={theme} setTheme={setTheme} />} />
                    <Route path={"/Contact"} element={<Contact />} />
                    <Route path={"/Promo"} element={<Promo theme={theme} setTheme={setTheme} />} />
                    <Route path={"/Policy"} element={<Policy />} />
                    <Route path={"/FAQ"} element={<FAQ />} />
                    <Route path={"/Blog"} element={<Blog />} />
                    <Route path={"/Footer"} element={<Footer />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
