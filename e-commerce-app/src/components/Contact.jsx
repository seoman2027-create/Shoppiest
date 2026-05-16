import "../App.css"
import React, {useEffect} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Contact() {
    useEffect(()=>{
        document.body.classList.add( "c_body");
        return() => {
            document.body.classList.remove( "c_body");
        };
    },[])
    return (
        <div className="contact-main-div">
            <Navbar/>
            <h1 style={{
                color:"black",
                textAlign: "center"
            }}>Contact with us</h1>
            <div className="c-main-div">
                <div className="c-first_div">
                    <h3
                        style={{
                            color:"black",
                            textAlign: "center"
                        }}
                    >
                        Send Message
                    </h3>
                    <input
                        placeholder="Enter your name"
                        className="c-input"
                    />
                    <input
                        placeholder="E-mail"
                        className="c-input"
                    />
                    <textarea
                        rows="4"
                        cols="48"
                        className="c-input"
                        placeholder="Enter your message"
                    >
                    </textarea>
                    <input
                        type="submit"
                        className="con-in-but"
                        value="Send"
                    />
                </div>
                <div>
                    <h2
                        style={{
                            margin: "20px 10px"
                        }}
                    >
                        Follow us
                    </h2>
                    <div className="c-second_div">
                        <a
                            href={"https://www.facebook.com"}
                            target={"_blank"}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/facebook-main.png`}
                                alt="Facebook logo"
                                style={{
                                    width: "18px",
                                    padding:"10px 20px 10px 10px",
                                }}
                            />
                        </a>
                        <a
                            href={"https://www.instagram.com"}
                            target={"_blank"}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/instagram.png`}
                                alt="Instagram logo"
                                style={{
                                    width: "18px",
                                    padding:"10px 20px 10px 10px",
                                }}
                            />
                        </a>
                        <a
                            href={"https://www.x.com"}
                            target={"_blank"}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/twitter.png`}
                                alt="X logo"
                                style={{
                                    width: "18px",
                                    padding:"10px 20px 10px 10px",
                                }}
                            />
                        </a>
                        <a
                            href={"https://www.pinterest.com"}
                            target={"_blank"}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/pinterest.png`}
                                alt="Pinterset logo"
                                style={{
                                    width: "18px",
                                    padding:"10px 20px 10px 10px",
                                }}
                            />
                        </a>
                        <a
                            href={"https://www.github.com"}
                            target={"_blank"}
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/github.png`}
                                alt="GitHub logo"
                                style={{
                                    width: "18px",
                                    padding:"10px 20px 10px 10px",
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="c-main-last">
                <h2>Our contact information</h2>
                <p>
                    There are other ways to contact us.
                    You may drop us a line, give us a
                    call or send an email, choose what
                    suits you the most.
                </p>
                <p>
                    +994 051-576-84-33<br/>
                    ismayilazayev306@gmail.com
                </p>
                <p>
                    Open hours: 8.00-18.00 Mon-Sat
                    Friday: Closed
                </p>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact;