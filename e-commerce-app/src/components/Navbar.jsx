import "../App.css"
import React, {useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Navbar({theme, setTheme}) {
    useEffect(() => {
        console.log("Navbar yaradıldı");

        return () => {
            console.log("Navbar silindi");
        };
    }, []);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("userToken");
    const [open, setOpen] = useState(false);


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
                <p
                    style={{
                        textAlign: "center",
                        maxWidth: "37%",
                        fontSize: "16px",
                    }}
                >Free shipping on orders over $50</p>
                <div className="n-select">
                    <select
                        style={{
                            marginRight: "10px"
                        }}
                    >
                        <option value="en">ENG</option>
                        <option value="rus">RUS</option>
                        <option value="fr">FR</option>
                        <option value="ger">GER</option>
                        <option value="esp">ESP</option>
                        <option value="tr">TR</option>
                        <option value="az">AZE</option>
                    </select>
                    <select>
                        <option value="usd">$ - USD</option>
                        <option value="gpb">£ - GPB</option>
                        <option value="euro">€ - EURO</option>
                        <option value="azn">₼ - AZN</option>
                        <option value="cny">¥ - CNY</option>
                        <option value="try">₺ - TRY</option>
                    </select>
                    <a
                        href="#"
                    >
                        <img
                            className={`theme-icon ${theme}`}
                            src={theme === "light" ? `${process.env.PUBLIC_URL}/dark.png` : `${process.env.PUBLIC_URL}/light.png`}
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
                            src={`${process.env.PUBLIC_URL}/shoppiest-logo-ed.png`}
                            alt="Shoppiest-logo"
                            className="n_a_img"
                            style={{
                                margin:"auto auto auto 10px",
                                width:"130px",
                        }}
                        />
                    </Link>
                </div>
                <div className="burger-icon" onClick={() => setOpen(!open)}>{open? "  " : "☰"}</div>
                <div className="n_s_div">
                    <div
                        className={open ? "sidebar" : "nav-links"}
                    >
                        {open &&
                            (
                                <>
                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="x-icon"
                                    >
                                        {"✕"}
                                    </div>
                                    <h1
                                        style={{
                                            textAlign: "center",
                                            marginBottom: "20px",
                                            fontSize: "18px",
                                        }}
                                        className="n-h-links, menu"
                                    >MENU
                                    </h1>
                                </>
                            )}
                                <NavLink
                                    className={({isActive}) => isActive ? "active" : "n-h-links"}
                                    to={"/"}
                                    end
                                >
                                    HOME
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? "active" : "n-h-links"}
                                    to={"/Items"}
                                    end
                                >
                                    ITEMS
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? "active" : "n-h-links"}
                                    to={"/Promo"}
                                    end
                                >
                                    PROMOTIONS
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? "active" : "n-h-links"}
                                    to={"/About"}
                                    end
                                >
                                    ABOUT
                                </NavLink>
                                <NavLink
                                    className={({isActive}) => isActive ? "active" : "n-h-links"}
                                    to={"/Contact"}
                                    end
                                >
                                    CONTACT
                                </NavLink>
                    </div>
                    <a href={"#link"}>
                        <img
                            src={`${process.env.PUBLIC_URL}/search_icon.png`}
                            alt="search-link"
                            className="n_img_link"
                            style={{
                                width:"20px",
                                padding: "10px",
                                margin: "auto"
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
                            src={`${process.env.PUBLIC_URL}/user_account.png`}
                            alt="account-link"
                            className="n_img_link"
                            width={"20px"}
                            onClick={handleClick}
                            style={{
                                padding:"10px",
                                width: "20px",
                                margin: "auto"
                            }}
                        />
                    </Link>
                    <Link
                        to={"/ShoppingCart"}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/sebet-icon.png`}
                            alt="sebet-logo"
                            className="n_img_link"
                            style={{
                                width:"28px",
                                flexWrap:"wrap",
                                padding: "7px",
                                margin: "auto"
                            }}
                        />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;
