import "../App.css"
import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Navbar({theme, setTheme}) {
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("userToken");


    const handleClick = () => {
        if (isLoggedIn) {
            navigate("/Profile");
        } else {
            navigate("/Register");
        }
    }
    return (
        <>
            <nav className="n_navbar">
                <p>Free shipping on orders over $50</p>
                <div className="n-select">
                    <select
                        style={{
                            marginRight: "10px"
                        }}
                    >
                        <option value="az" >AZE</option>
                        <option value="en">ENG</option>
                        <option value="ru">RUS</option>
                    </select>
                    <select>
                        <option value="az">AZN</option>
                        <option value="en">USD</option>
                        <option value="ru">GBP</option>
                        <option value="eu">EUR</option>
                    </select>
                    <a
                        href="#link"
                    >
                        <img
                            className={`theme-icon ${theme}`}
                            src={theme === "light" ? "/dark.png" : "/light.png"}
                            alt={theme === "light" ? "Switch to dark" : "Switch to light"}
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            style={{
                                width: "20px",
                                margin: "15px",
                                cursor: "pointer",
                                padding: "10px",
                            }}
                        />
                    </a>
                </div>
            </nav>
            <div className="n_head">
                <div className="n_f_div">
                    <Link
                        to={"/"}
                    >
                        <img
                            src="/Shoppiest-logo-ed.png"
                            alt="Shoppiest-logo"
                            width={"130px"}
                            className="n_a_img"
                            style={{margin:"10px 0 10px 20px"}}
                        />
                    </Link>
                </div>
                <div className="n_s_div">
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? "active" : "n-h-links"
                        }
                        to={"/"}
                        end
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? "active" : "n-h-links"
                        }
                        to={"/Items"}
                        end
                    >
                        ITEMS
                    </NavLink>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? "active" : "n-h-links"
                        }
                        to={"/Promo"}
                        end
                    >
                        PROMOTIONS
                    </NavLink>
                    <NavLink
                        className={
                            ({ isActive }) => isActive ? "active" : "n-h-links"
                        }
                        to={"/About"}
                        end
                    >
                        ABOUT
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => isActive ? "active" : "n-h-links"}
                        to={"/Contact"}
                        end
                        style={{
                            marginRight: "20px",
                        }}
                    >
                        CONTACT
                    </NavLink>
                    <a href={"#link"}>
                        <img
                            src={"./search_icon.png"}
                            alt="search-link"
                            className="n_img_link"
                            style={{
                                width:"20px",
                                padding: "10px"
                            }}
                            onClick={() => setShowSearch(!showSearch)}
                        />
                    </a>
                    {
                        showSearch && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="n_search_input"
                                autoFocus
                            />
                        )
                    }
                    <Link
                        to={"/Profile"}
                    >
                        <img
                            src={"./User_account.png"}
                            alt="account-link"
                            className="n_img_link"
                            width={"20px"}
                            onClick={handleClick}
                            style={{
                                padding:"10px",
                                width: "20px",
                            }}
                        />
                    </Link>
                    <Link
                        to={"/ShoppingCart"}
                    >
                        <img
                            src={"Sebet-icon.png"}
                            alt="sebet-logo"
                            className="n_img_link"
                            style={{
                                width:"28px",
                                flexWrap:"wrap",
                                padding: "7px"
                            }}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;