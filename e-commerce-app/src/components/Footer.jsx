import "../App.css"
import {Link} from "react-router-dom";
import React from "react";

function Footer() {
    return (
        <div className="footer-main">
            <div className="f-basic-con">
                <div className="f-name-address">
                    <h4>Customer Service</h4>
                    <hr
                        className="f-hr"
                    />
                    <ul>
                        <li>
                            <Link
                                style={{
                                    margin:"15px 0",
                                    fontSize:"13px",
                                    fontFamily:"Google Sans Flex, sans-serif",
                                    padding:"10px 0",
                                    textDecoration:"underline",
                                    color:"white"
                                }}
                                to={"/FAQ"}>
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/Blog"}
                                style={{
                                    margin:"15px 0",
                                    fontSize:"13px",
                                    fontFamily:"Google Sans Flex, sans-serif",
                                    padding:"10px 0",
                                    textDecoration:"underline",
                                    color:"white"
                                }}
                            >
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/Contact"}
                                style={{
                                    margin:"15px 0",
                                    fontSize:"13px",
                                    fontFamily:"Google Sans Flex, sans-serif",
                                    padding:"10px 0",
                                    textDecoration:"underline",
                                    color:"white"
                                }}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="f-con-address">
                    <h4>Quick Links</h4>
                    <hr
                        className="f-hr"
                    />
                    <ul>
                        <li>
                            <Link
                                style={{
                                    margin:"15px 0",
                                    fontSize:"13px",
                                    fontFamily:"Google Sans Flex, sans-serif",
                                    padding:"10px 0",
                                    textDecoration:"underline",
                                    color:"white"
                                }}
                                to={"/About"}>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/Policy"}
                                style={{
                                    margin:"15px 0",
                                    fontSize:"13px",
                                    fontFamily:"Google Sans Flex, sans-serif",
                                    padding:"10px 0",
                                    textDecoration:"underline",
                                    color:"white"
                                }}
                            >
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="f-img-address">
                    <h4>Follow us</h4>
                    <hr
                        className="f-hr"
                    />
                    <div className="img-div">
                        <div>
                            <a
                                href={"https://www.github.com"}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img
                                    className="f-hr"
                                        src={`${process.env.PUBLIC_URL}/github.png`}
                                    alt="GitHub logo"
                                    style={{
                                        width: "18px",
                                        padding:"10px 20px",
                                    }}
                                />
                            </a>
                            <a
                                href={"https://www.instagram.com"}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img
                                    className="f-hr"
                                    src={`${process.env.PUBLIC_URL}/instagram.png`}
                                    alt="Instagram logo"
                                    style={{
                                        width: "18px",
                                        padding:"10px 20px",
                                    }}
                                />
                            </a>
                            <a
                                href={"https://www.x.com"}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img
                                    className="f-hr"
                                    src={`${process.env.PUBLIC_URL}/twitter.png`}
                                    alt="X logo"
                                    style={{
                                        width: "18px",
                                        padding:"10px 20px",
                                    }}
                                />
                            </a>
                        </div>
                        <div>
                            <a
                                href={"https://www.facebook.com"}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img
                                    className="f-hr"
                                    src={`${process.env.PUBLIC_URL}/facebook-main.png`}
                                    alt="Facebook logo"
                                    style={{
                                        width: "18px",
                                        padding:"10px 20px",
                                    }}
                                />
                            </a>
                            <a
                                href={"https://www.pinterest.com"}
                                target={"_blank"}
                                rel="noreferrer"
                            >
                                <img
                                    className="f-hr"
                                    src={`${process.env.PUBLIC_URL}/pinterest.png`}
                                    alt="Pinterset logo"
                                    style={{
                                        width: "18px",
                                        padding:"10px 20px",
                                    }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="f-main-first">
                    <h4>Newsletter</h4>
                    <hr
                        className="f-hr"
                    />
                    <p
                        style={{
                            fontSize:"14px",
                            color:"white",
                            fontFamily: "Google Sans Flex, sans-serif",
                            flexWrap:"wrap",
                        }}
                    >
                        Subscribe to our newsletter<br/>
                        and get 20% off your first<br/>
                        purchase
                    </p>
                    <form>
                        <input
                            placeholder="Enter your email"
                            style={{
                                height:"40px",
                                width:"60%",
                                fontSize:"12px",
                                color:"black",
                                fontFamily: "Google Sans Flex, sans-serif",
                                border: "none"
                            }}
                        />
                        <input
                            type="submit"
                            value="Subscribe"
                            style={{
                                height:"44px",
                                width:"30%",
                                fontSize:"9px",
                                color:"white",
                                backgroundColor:"black",
                                fontFamily: "Google Sans Flex, sans-serif",
                                border: "none"
                            }}
                        />
                    </form>
                </div>
            </div>
            <div></div>
            <div className="footer-foot">
                <a href={"/"}>
                    <img
                        src={`${process.env.PUBLIC_URL}/shoppiest-white.png`}
                        alt="shoppie-stack"
                        width={"130px"}
                        style={{
                            margin:"10px"
                        }}
                    />
                </a>
                <p
                    className="h_par"
                    style={{
                        margin:"0",
                        fontSize:"13px",
                    }}>
                    Copyright 2025. Developed by Iso Seo
                </p>
            </div>
            <hr
                style={{
                    margin:"15px",
                    fontSize:"13px",
                    width:"97%",
                }}
            />
        </div>
    )
}


export default Footer;