import "../App.css"
import {Link} from "react-router-dom";
import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {CartContext} from "../context/CartContext";
import {useContext} from "react";


function ShoppingCart() {
    const { cart, handleClear }= useContext(CartContext);
    const [input, setInput] = useState("");
    const [discount, setDiscount] = useState(0);
    const [openPopUp, setOpenPopUp] = useState(false);
    const [cartNumber, setCartNumber] = useState("");
    const [cartHolder, setCartHolder] = useState("");
    const [cartDate, setCartDate] = useState("");
    const [cvc, setCvc] = useState("");
    const [isFlipped, setIsFlipped] = useState(false);
    const [iaProcessing, setIaProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleApplyPromotion = () => {
        if(input.toUpperCase() === "#FIRSTPROMO"){
            setDiscount(0.03)
        }else{
            alert("Your promocode is wrong, please try again")
            setDiscount(0)
        }
    }
    const handleCardNumberChange = (e) => {
        let rawValue = e.target.value.replace(/\D/g, "").slice(0, 16);
        const formattedValue = rawValue.replace(/(.{4})/g, "$1 ").trim();
        setCartNumber(formattedValue);
    }
    const handleDateChange = (e) => {
        let rawDate = e.target.value.replace(/\D/g, "").slice(0, 4);
        if(rawDate.length >= 3){
            rawDate = `${rawDate.slice(0, 2)}/${rawDate.slice(2)}`;
        }
        setCartDate(rawDate)
    }
    const handleDateBlur = () => {
        if (!cartDate){
            return;
        }
        const [month, year] = cartDate.split("/");
        const currentYear = 26
        const maxYear = 36
        let validMonth = month
        let validYear = year;
        if(parseInt(month, 10) > 12){
            validMonth = "12"
        }
        if(validYear){
            const parsedYear = parseInt(validYear, 10);
            if(parsedYear < currentYear){
                validYear = String(currentYear)
            }else if(parsedYear > maxYear){
                validYear = String(maxYear)
            }
        }
        setCartDate(`${validMonth}/${validYear || ""}`)
    }
    const getFormattedCartNumber = () => {
        const raw = cartNumber.replace(/\s/g, "");
        const padded = raw.padEnd(16, "•")
        return padded.replace(/(.{4})/g, "$1 ").trim();
    }
    const subTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const shipping = 20
    const tax = subTotal * 0.05
    const discountAmount = subTotal * discount
    const total = subTotal - discountAmount + tax + shipping
    return(
        <div className="base">
            <Navbar/>
            <h2 style={{
                textAlign:"center",
                color:"black",
                marginTop:"25px",
                marginBottom:"25px",
                fontSize:"30px"
            }}
            >
                Shopping Cart
            </h2>
            <div className="s_main">
                <div className="s_main_first">
                    <h3
                        style={{
                            fontSize:"25px",
                        }}
                    >My shopping bag</h3>
                    <p>My items</p>
                    <hr
                        style={{
                            width:"100%",
                            margin:"20px auto",
                            fontWeight:"bold",
                        }}
                    />
                    <div>
                        { !cart || (Array.isArray(cart) && cart.length === 0) ?
                            (<p style={{ textAlign: 'center', color: "black"}}>Your cart is empty</p>) : (
                            cart && Array.isArray(cart) && cart.map((item) => (
                                <>
                                    <div key={item.cart_id}  id="s-c-info">
                                        <img
                                            id="s-c-img"
                                            src={`${process.env.PUBLIC_URL}` + item.img_link}
                                            alt={item.name}
                                            style={{
                                                margin: "0",
                                                width: "30%",
                                            }}
                                        />
                                        <div
                                            className="s-item-detail"
                                            style={{
                                                width: "40%",
                                                textAlign: "center",
                                                margin: "auto 10px",
                                            }}
                                        >
                                            <h4>
                                                {item.name}
                                            </h4>
                                            <p>Price: ${item.price}</p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                        <input
                                            type="button"
                                            value="Delete Item"
                                            className={"s-del-button"}
                                            style={{
                                                marginLeft: "10px",
                                                maxWidth: "30%",
                                                marginRight: "10px",
                                            }}
                                            onClick={() => handleClear(item.cart_id)}
                                        />
                                    </div>
                                    <hr
                                        style={{
                                            width:"100%",
                                            margin:"20px auto",
                                            fontWeight:"bold",
                                        }}
                                    />
                                </>
                        )))}
                    </div>
                </div>
                <Link
                    to={"/Items"}
                    className={"s-del-button"}
                    style={{
                        margin: "20px auto",
                        textDecoration: "none",
                    }}
                >
                    Back to shopping
                </Link>
                <div className="s_main_second">
                    <h3 style={{
                        marginBottom:"15px"
                    }}
                    >
                        Summary
                    </h3>
                    <div className="s_n_input">
                        <hr style={{
                            width: "100%",
                            margin:"5px 0 10px 0"
                        }}/>
                        <label
                            htmlFor="s_f_input"
                            style={{
                                fontSize:"13px",
                                textAlign:"right",
                                margin:"25px auto 10px 0"
                            }}
                        >
                            Do you have promo code?
                        </label>
                        <div className={"s_m_input"}>
                            <input
                                type="text"
                                placeholder="Enter your promocode"
                                id="s_f_input"
                                onChange={(e) => setInput(e.target.value)}
                                value={input}
                                style={{
                                    width: "71%",
                                    height: "30px",
                                    fontFamily: "times new roman",
                                    fontSize: "15px",
                                    borderRadius: "5px 0 0 5px",
                                    border:"1px solid #000"
                                }}
                            />
                            <button
                                className="s_l_button"
                                style={{
                                    width: "27%",
                                    height: "34px",
                                    borderRadius: "0 5px 5px 0",
                                    marginBottom:"15px"
                                }}
                                onClick={handleApplyPromotion}
                            >
                                Apply
                            </button>
                        </div>
                        <hr
                            style={{
                                width:"100%",
                                margin:"0"
                            }}
                        />
                        <div className="billing">
                            <div className="billing_info">
                                <label
                                    htmlFor="first_input"
                                    className="s_l_label"
                                >
                                    Subtotal:
                                </label>
                                <span> ${subTotal.toFixed(2)}</span>
                            </div>
                            <hr
                                style={{
                                    width:"100%",
                                    margin:"0"
                                }}/>
                            <div className="billing_info">
                                <label
                                    htmlFor="second_input"
                                    className="s_l_label"
                                >
                                    Shipping:
                                </label>
                                <span> ${shipping.toFixed(2)}</span>
                            </div>
                            <hr
                                style={{
                                    width:"100%",
                                    margin:"0"
                                }}/>
                            <div className="billing_info">
                                <label
                                    htmlFor="third_input"
                                    className="s_l_label"
                                >
                                    Tax:
                                </label>
                                <span> ${tax.toFixed(2)}</span>
                            </div>
                            <hr
                                style={{
                                    width:"100%",
                                    margin:"0"
                                }}/>
                            <div className="billing_info">
                                <label
                                    htmlFor="third_input"
                                    className="s_l_label"
                                >
                                    Total discount:
                                </label>
                                <span> ${discountAmount.toFixed(2)}</span>
                            </div>
                            <hr
                                style={{
                                    width:"100%",
                                    margin:"0"
                                }}/>
                            <div className="billing_info">
                                <label
                                    htmlFor="third_input"
                                    className="s_l_label"
                                >
                                    Total:
                                </label>
                                <span> ${total.toFixed(2)}</span>
                            </div>
                            <hr style={{
                                width:"100%",
                                margin:"0"
                            }}
                            />
                        </div>
                        <p
                            className="s_c_link"
                        >
                            Are you sure for your
                            <Link
                                onClick={() => setOpenPopUp(true)}
                                to={"#"}
                                className={"payment-info"}
                            > payment info and address?
                            </Link>
                        </p>
                        <div
                            className={openPopUp ?"overlay" : ""}
                            onClick={() => {setOpenPopUp(false)}}
                        >
                        </div>
                        <div className={openPopUp ? "p-i_second" : ""}>
                            {openPopUp && (
                                <>
                                    <div
                                        onClick={() => setOpenPopUp(false)}
                                        style={{
                                            color: "black",
                                            cursor: "pointer",
                                            fontSize: "23px",
                                            textAlign: "right",
                                        }}
                                    >
                                        {"✕"}
                                    </div>
                                    <h2
                                        style={{
                                            color:"black",
                                            textAlign:"center",
                                            margin:"0",
                                        }}
                                    >
                                        Payment details
                                    </h2>
                                    <div className={`credit-card-box ${isFlipped? "flipped": ""}`}>
                                        <div className="cart-front-side">
                                            <div className={"card-chip"}></div>
                                            <div className={"card-hologram"}></div>
                                            <p
                                                style={{
                                                    letterSpacing: "2px",
                                                    fontFamily: "monospace",
                                                    fontSize: "18px",
                                                }}
                                            >{getFormattedCartNumber()}
                                            </p>
                                            <div
                                                style={{
                                                    display:"flex",
                                                    flexDirection:"row",
                                                    justifyContent:"space-between",
                                                }}
                                            >
                                                <p>{cartHolder ? cartHolder.toUpperCase() : "FULL NAME"}</p>
                                                <p>
                                                    {cartDate ? cartDate : "MM/YY"}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="cart-back-side">
                                            <div className={"card-stripe"}></div>
                                            <div className={"card-signature-box"}>
                                                <div
                                                    className={"signature-strip"}
                                                ></div>
                                                <p>CVC: </p>
                                                <p
                                                    className={"cvc-display"}
                                                >{cvc ? cvc : ""}</p>
                                            </div>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/mastercard.svg`}
                                                style={{
                                                    width: "100px",
                                                    marginTop: "10px",
                                                }}
                                                alt=""
                                                />
                                        </div>
                                    </div>
                                    <input
                                        className="p-i_input"
                                        type="text"
                                        maxLength="19"
                                        placeholder="Enter your card number"
                                        value={cartNumber}
                                        onChange={handleCardNumberChange}
                                    />
                                    <input
                                        className="p-i_input"
                                        style={{
                                            textTransform: "uppercase"
                                        }}
                                        type="text"
                                        placeholder="Enter cardholder name"
                                        value={cartHolder}
                                        onChange={(e) => {setCartHolder(e.target.value)}}
                                    />
                                    <div className="p-i-s_input">
                                        <input
                                            className="p-i_input"
                                            style={{
                                                marginRight:"5px",
                                                width:"50%",
                                            }}
                                            type="text"
                                            value={cartDate}
                                            placeholder={"MM/YY"}
                                            maxLength="5"
                                            onChange={handleDateChange}
                                            onBlur={handleDateBlur}
                                        />
                                        <input
                                            className="p-i_input"
                                            style={{
                                                marginLeft:"5px",
                                                width:"50%",
                                            }}
                                            type="password"
                                            maxLength="3"
                                            placeholder="CVC"
                                            value={cvc}
                                            onChange={(e) =>{setCvc(e.target.value)}}
                                            onFocus={() => {setIsFlipped(true)}}
                                            onBlur={() => {setIsFlipped(false)}}
                                        />
                                    </div>
                                    <button
                                        className="p-i_submit"
                                    >{`Order and pay $${total.toFixed(2)}`}</button>
                                </>
                            )}
                        </div>
                        <button
                            className="s_l_button"
                            style={{
                                marginTop:"10px",
                                borderRadius:"5px",
                            }}>
                            Order and pay
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ShoppingCart